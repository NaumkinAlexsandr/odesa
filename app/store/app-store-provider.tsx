"use client";

import { createContext, useContext, useState } from "react";
import { createStore, useStore } from "zustand";

interface AppState {
  theme: "light" | "dark";
  lang: string;
  setTheme: (theme: "light" | "dark") => void;
  setLang: (lang: string) => void;
}

type AppStore = ReturnType<typeof createAppStore>;

// Функция создания изолированного стора для текущего сеанса
const createAppStore = (initProps: {
  theme: "light" | "dark";
  lang: string;
}) => {
  return createStore<AppState>((set) => ({
    theme: initProps.theme,
    lang: initProps.lang,
    setTheme: (theme) => {
      document.cookie = `theme=${theme};path=/;max-age=31536000;SameSite=Lax`;

      document.documentElement.classList.add("theme-changing");

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      set({ theme });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.remove("theme-changing");
        });
      });
    },
    setLang: (lang) => {
      document.cookie = `lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
      set({ lang });
    },
  }));
};

const AppStoreContext = createContext<AppStore | null>(null);

export function AppStoreProvider({
  children,
  theme,
  lang,
}: {
  children: React.ReactNode;
  theme: "light" | "dark";
  lang: string;
}) {
  // Инициализируем сам стор ОДИН раз через ленивый useState.
  // React 19 гарантирует, что эта функция выполнится строго один раз при создании провайдера,
  // при этом мы не трогаем рефы во время рендера и не вызываем сторонних сайд-эффектов.
  const [store] = useState(() => createAppStore({ theme, lang }));

  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  );
}

// Кастомный хук для безопасного вызова в компонентах
export function useAppStore<T>(selector: (state: AppState) => T): T {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new Error("useAppStore must be used within an AppStoreProvider");
  }
  return useStore(context, selector);
}
