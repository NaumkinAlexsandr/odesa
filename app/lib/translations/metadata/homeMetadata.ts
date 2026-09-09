export const homeMetadata = {
  ua: {
    title: "Місто Одеса - Головна",
    description: "Глобальний опис для всього сайту.",
  },
  ru: {
    title: "Город Одесса - Главная",
    description: "Глобальное описание для всего сайта.",
  },
  en: {
    title: "City of Odessa - Home",
    description: "Global description for the entire site.",
  },
};

export type LangKey = keyof typeof homeMetadata;
export const allowedLangs = Object.keys(homeMetadata) as LangKey[];
