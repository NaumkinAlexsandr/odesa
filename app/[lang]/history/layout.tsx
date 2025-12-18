import type { Metadata } from "next";
import { createMetadataGenerator, TranslationMap } from "@/utils/metadata";

const translations: TranslationMap = {
  ua: {
    title: "Історія міста Одеса",
    description: "Хронологія історії міста, ключові події та епохи.",
  },
  ru: {
    title: "История города Одесса",
    description: "Хронология истории города, ключевые события и эпохи.",
  },
  en: {
    title: "History of Odesa City",
    description: "Chronology of the city's history, key events, and epochs.",
  },
};

export const generateMetadata = createMetadataGenerator(translations);

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
