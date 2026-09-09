export const historyMetadata = {
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

export type LangKey = keyof typeof historyMetadata;
export const allowedLangs = Object.keys(historyMetadata) as LangKey[];
