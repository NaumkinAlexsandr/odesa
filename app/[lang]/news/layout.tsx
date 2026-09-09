import type { Metadata } from "next";
import { createMetadataGenerator, TranslationMap } from "@/utils/metadata";

const translations: TranslationMap = {
  ua: {
    title: "Усі новини",
    description: "Найновіші новини, анонси подій та оголошення по проекту.",
  },
  ru: {
    title: "Все новости",
    description:
      "Самые свежие новости, анонсы событий и объявления по проекту.",
  },
  en: {
    title: "All news",
    description: "The latest news, event announcements, and project updates.",
  },
};

export const generateMetadata = createMetadataGenerator(translations);

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
