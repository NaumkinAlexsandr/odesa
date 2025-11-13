export interface INewsTexts {
  titlePage: string;
  allNews: string;
}

export type LangKey = "ua" | "ru" | "en";
export type NewsTextType = Record<LangKey, INewsTexts>;

export const newsText: NewsTextType = {
  ua: {
    titlePage: `Останні новини`,
    allNews: `Усі новини >>`,
  },
  ru: {
    titlePage: `Последние новости`,
    allNews: `Все новости >>`,
  },
  en: {
    titlePage: `Latest news`,
    allNews: `All news >>`,
  },
};
