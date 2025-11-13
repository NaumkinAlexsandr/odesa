import { StaticImageData } from "next/image";

export interface ILangProps {
  [key: string]: string | string[] | null;
}

export interface IContentTranslation extends ILangProps {
  title: string;
  displayDate: string;
  alt: string;
}

export interface IContentArticle {
  id: string;
  isoDate: string;
  layoutType: string;
  urlImg: StaticImageData;
  articleImage?: StaticImageData;
  slides?: ContentSliderType;
  translations: {
    [lang: string]: IContentTranslation;
  };
}

export interface IContentSlide {
  src: StaticImageData;
  translations: {
    [lang: string]: ILangProps;
  };
  // caption?: string;
}

export type ContentSliderType = IContentSlide[];
