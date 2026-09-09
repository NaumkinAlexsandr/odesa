export interface IDestructionsTexts {
  titlePage: string;
  allDestruction: string;
}

export type LangKey = "ua" | "ru" | "en";
export type DestructionsTextType = Record<LangKey, IDestructionsTexts>;

export const destText: DestructionsTextType = {
  ua: {
    titlePage: `Хроніка руйнувань`,
    allDestruction: `Усі руйнування >>`,
  },
  ru: {
    titlePage: `Хроника разрушений`,
    allDestruction: `Все разрушения >>`,
  },
  en: {
    titlePage: `Chronicle of Destruction`,
    allDestruction: `All destructions >>`,
  },
};
