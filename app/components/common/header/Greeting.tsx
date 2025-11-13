import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Greeting() {
  const { currentLang } = useLanguage();

  const city = {
    ua: "Одесі",
    ru: "Одессу",
    en: "Odesa",
  };

  const getGreeting = (lang: string) => {
    switch (lang) {
      case "ua":
        return `Раді бачити в  ${city.ua}!`;
      case "ru":
        return `Добро пожаловать в  ${city.ru}!`;
      case "en":
        return `Ready to explore ${city.en}?`;
      default:
        return "Welcome!";
    }
  };

  const greetingText = getGreeting(currentLang);

  return (
    <h1 className="font-greatVibes pt-2 text-center text-2xl text-zinc-700">
      {greetingText}
    </h1>
  );
}
