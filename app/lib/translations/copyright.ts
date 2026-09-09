import { Lang } from "@/type/interface";

export interface CopyrightTranslation {
  info: string;
  copyrightSymbol: string;
  reservedText: string;
}

export type CopyrightTransMap = Record<Lang, CopyrightTranslation>;

export const copyright: CopyrightTransMap = {
  ua: {
    info: "Інформаційний портал міста Одеса. Всі матеріали сайту спрямовані на ознайомлення з історією, архітектурою та культурною спадщиною міста.",
    copyrightSymbol: "© ",
    reservedText: "NAUM. Місто Одеса. Всі права захищені.",
  },
  ru: {
    info: "Информационный портал города Одесса. Все материалы сайта направлены на ознакомление с историей, архитектурой и культурным наследием города.",
    copyrightSymbol: "© ",
    reservedText: "NAUM. Город Одесса. Все права защищены.",
  },
  en: {
    info: "Information portal of the city of Odessa. All materials on the site are aimed at introducing the history, architecture, and cultural heritage of the city.",
    copyrightSymbol: "© ",
    reservedText: "NAUM. City of Odessa. All rights reserved.",
  },
};
