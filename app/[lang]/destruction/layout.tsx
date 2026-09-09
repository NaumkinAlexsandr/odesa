import type { Metadata } from "next";
import { createMetadataGenerator, TranslationMap } from "@/utils/metadata";

const translations: TranslationMap = {
  ua: {
    title: "Хроніка руйнувань",
    description: "Детальна хронологія руйнувань, завданих місту.",
  },
  ru: {
    title: "Хроника разрушений",
    description: "Подробная хронология разрушений, нанесенных городу.",
  },
  en: {
    title: "Chronicle of Destruction",
    description: "Detailed chronology of destruction inflicted upon the city.",
  },
};

export const generateMetadata = createMetadataGenerator(translations);

export default function DestructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
