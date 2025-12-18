import type { Metadata } from "next";
import { createMetadataGenerator, TranslationMap } from "@/utils/metadata";

const translations: TranslationMap = {
  ua: {
    title: "Курс обміну валют",
    description: "Актуальні курси обміну валют в місті та офіційні дані НБУ.",
  },
  ru: {
    title: "Курс обмена валют",
    description:
      "Актуальные курсы обмена валют в городе и официальные данные НБУ.",
  },
  en: {
    title: "Currency Exchange Rate",
    description:
      "Current currency exchange rates in the city and official NBU data.",
  },
};

export const generateMetadata = createMetadataGenerator(translations);

export default function CurrencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
