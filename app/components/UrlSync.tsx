"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppStore } from "@/store/app-store-provider";

// 1. Определение поддерживаемых языков (добавляй сюда новые при необходимости)
export const SUPPORTED_LANGS = ["en", "ru"] as const;

// 2. Динамический тип для языков ("en" | "ru" | ...)
export type Lang = (typeof SUPPORTED_LANGS)[number];

const VALID_LOCALES = new Set<string>(SUPPORTED_LANGS);

export default function UrlSync() {
  const pathname = usePathname();
  const setLang = useAppStore((state) => state.setLang);

  useEffect(() => {
    if (!pathname) return;

    const segments = pathname.split("/").filter(Boolean);
    const currentLang = segments[0];

    // Синхронизация языка со стором
    if (currentLang && VALID_LOCALES.has(currentLang)) {
      setLang(currentLang as Lang);
    }

    // Сохранение роута в Cookie
    if (segments.length > 1) {
      const pageRoute = segments.slice(1).join("/");
      document.cookie = `last_path=${pageRoute};path=/;max-age=31536000;SameSite=Lax`;
    } else if (segments.length === 1 && VALID_LOCALES.has(currentLang)) {
      document.cookie = `last_path=;path=/;max-age=31536000;SameSite=Lax`;
    }
  }, [pathname, setLang]);

  return null;
}
