"use client";
import { usePathname } from "next/navigation";

const languages = ["ua", "ru", "en"];

interface ILanguageHook {
  currentLang: string;
  langPrefix: string;
  isActive: (path: string) => boolean;
  createLocalizedPath: (targetLang: string) => string;
}

export const useLanguage = (): ILanguageHook => {
  const pathname = usePathname();

  const pathParts = pathname.split("/");
  const pathPrefixExists = languages.includes(pathParts[1]);

  const currentLang = pathPrefixExists ? pathParts[1] : "ua";
  const langPrefix = `/${currentLang}`;

  const isActive = (path: string): boolean => {
    const pathToCheck = pathPrefixExists
      ? `/${pathParts.slice(2).join("/")}`
      : pathname;

    if (path === "/" && (pathToCheck === "/" || pathToCheck === "")) {
      return true;
    }

    return pathToCheck === path;
  };

  const createLocalizedPath = (targetLang: string) => {
    const pathWithoutLang = pathPrefixExists
      ? pathParts.slice(2).join("/")
      : pathParts.join("/");

    return `/${targetLang}/${pathWithoutLang}`;
  };

  return {
    currentLang,
    langPrefix,
    isActive,
    createLocalizedPath,
  };
};

/*
import { useLanguage } from "@/hooks/useLanguage";
const { currentLang, langPrefix, isActive, createLocalizedPath } =
    useLanguage();
const text = eventText[currentLang as keyof typeof eventText];

*/
