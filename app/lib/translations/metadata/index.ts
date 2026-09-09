import { homeMetadata } from "./homeMetadata";
import { historyMetadata } from "./historyMetadata";

export const metadataTranslations = {
  ua: {
    ...homeMetadata.ua,
    ...historyMetadata.ua,
  },
  ru: {
    ...homeMetadata.ru,
    ...historyMetadata.ru,
  },
  en: {
    ...homeMetadata.en,
    ...historyMetadata.en,
  },
};

export type LangKey = keyof typeof metadataTranslations;
export const allowedLangs = Object.keys(metadataTranslations) as LangKey[];
