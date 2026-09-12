import { historyMetadata } from "./historyMetadata";
import { destructionMetadata } from "./destructionMetadata";
import { currencyMetadata } from "./currencyMetadata";
import { eventsMetadata } from "./eventsMetadata";
import { attractionsMetadata } from "./attractionsMetadata";
import { homeMetadata } from "./homeMetadata";
import { newsMetadata } from "./newsMetadata";

export const metadataTranslations = {
  ua: {
    home: homeMetadata.ua,
    history: historyMetadata.ua,
    destruction: destructionMetadata.ua,
    currency: currencyMetadata.ua,
    event: eventsMetadata.ua,
    attractions: attractionsMetadata.ua,
    news: newsMetadata.ua,
  },
  ru: {
    home: homeMetadata.ru,
    history: historyMetadata.ru,
    destruction: destructionMetadata.ru,
    currency: currencyMetadata.ru,
    event: eventsMetadata.ru,
    attractions: attractionsMetadata.ru,
    news: newsMetadata.ru,
  },
  en: {
    home: homeMetadata.en,
    history: historyMetadata.en,
    destruction: destructionMetadata.en,
    currency: currencyMetadata.en,
    event: eventsMetadata.en,
    attractions: attractionsMetadata.en,
    news: newsMetadata.en,
  },
};

export type LangKey = keyof typeof metadataTranslations;
export const allowedLangs = Object.keys(metadataTranslations) as LangKey[];
