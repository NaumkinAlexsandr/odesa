import type { Metadata } from "next";
import { createMetadataGenerator, TranslationMap } from "@/utils/metadata";

const translations: TranslationMap = {
  ua: {
    title: "Пам'ятки Одеси",
    description: "Визначні місця, пам'ятники та цікаві локації міста Одеса.",
  },
  ru: {
    title: "Достопримечательности Одессы",
    description:
      "Знаковые места, памятники и интересные локации города Одесса.",
  },
  en: {
    title: "Attractions of Odesa",
    description:
      "Landmarks, monuments, and interesting locations in the city of Odesa.",
  },
};

export const generateMetadata = createMetadataGenerator(translations);

export default function AttractionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
