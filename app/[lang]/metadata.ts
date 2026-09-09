import type { Metadata } from "next";
import {
  metadataTranslations,
  allowedLangs,
  LangKey,
} from "@/lib/translations/metadata";
import { getCleanLang } from "@/utils/getCleanLang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = allowedLangs.includes(lang as LangKey)
    ? (lang as LangKey)
    : "ua";
  const t = metadataTranslations[currentLang];

  const siteNames = {
    ua: "Місто Одеса",
    ru: "Город Одесса",
    en: "City of Odessa",
  };

  const keywordsMap = {
    ua: ["Одеса", "Архітектура", "Історія", "Пам'ятки", "Новини"],
    ru: [
      "Одесса",
      "Архитектура",
      "История",
      "Достопримечательности",
      "Новости",
    ],
    en: ["Odessa", "Architecture", "History", "Monuments", "News"],
  };

  const siteName = siteNames[currentLang];
  const keywords = keywordsMap[currentLang];

  return {
    title: {
      default: t.title,
      template: `%s | ${siteName}`,
    },
    description: t.description,
    applicationName: siteName,
    authors: [{ name: "Naumkin Alexandr" }],
    keywords,
    openGraph: {
      title: {
        default: t.title,
        template: `%s | ${siteName}`,
      },
      description: t.description,
      type: "website",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: {
        default: t.title,
        template: `%s | ${siteName}`,
      },
      description: t.description,
    },
  };
}
