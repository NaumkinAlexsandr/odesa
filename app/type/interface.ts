import { StaticImageData } from "next/image";
import { ContentSliderType, IContentTranslation } from "./content";

// ---------- wrappers ----------
export type FloatDirection = "float-left" | "float-right" | "float-none";

export interface IFloatDirection {
  floatDirection?: FloatDirection;
}

export interface IImagWrapper {
  src: StaticImageData;
  alt: string;
  caption?: string;
}

export interface ISliderHistoryProps {
  slides: IImagWrapper[];
  swiperId: string;
}

export interface ISliderProps {
  slides: ContentSliderType;
  swiperId: string;
  translation: IContentTranslation;
}

// ---------- sidebar ----------
export interface ISidebarSection {
  id: string;
  titleSection: string;
}

export interface ISidebarProps {
  sections: ISidebarSection[];
  title?: string;
}

// ---------- exchange ----------
export interface IExchangeRates {
  buy: string;
  sell: string;
}

export interface IExchange {
  code?: string;
  name?: string;
  currency: string;
  flag: StaticImageData;
  rates: IExchangeRates;
}
