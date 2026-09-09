import { IContentArticle } from "@/type/content";

import two from "@/images/news/09.2025/news_30.09.25/129563.jpeg";
import { news_30_Slider } from "./news_30_Slider";

export const news_30: IContentArticle = {
  id: `odesa-mayor-inspected-restoration-gymnasium-125`,
  isoDate: "2025-09-30T00:00:00.000Z",
  layoutType: `sliderLeft`,
  urlImg: two,
  slides: news_30_Slider,
  translations: {
    ua: {
      title: "Мер Одеси проінспектував відновлення гімназії №125.",
      displayDate: `30 вересня 2025 р.`,
      alt: "Фото",
      p_01: `Одеський міський голова Геннадій Труханов проінспектував завершення відновлювальних робіт у гімназії №125.`,
      p_02: `7 листопада минулого року цей заклад постраждав від ворожого обстрілу. Тоді внаслідок удару поблизу корпусу були зруйновані класи, пошкоджено систему опалення - напередодні зими школа залишилася без тепла.`,
      p_03: `Сьогодні класи та групи дитячого садочка повністю відновлені, а також відремонтоване шкільне укриття на понад 600 осіб.`,
      p_04: `«Школа живе, діти навчаються, все йде своєю чергою. Наступного року ми завершимо ремонт фасаду», — зазначив мер Одеси.`,
    },
    ru: {
      title: "Мэр Одессы проинспектировал восстановление гимназии №125.",
      displayDate: `30 сентября 2025 г.`,
      alt: "Фото",
      p_01: `Одесский городской голова Геннадий Труханов проинспектировал завершение восстановительных работ в гимназии №125.`,
      p_02: `7 ноября прошлого года это учебное заведение пострадало от вражеского обстрела. Тогда в результате удара вблизи корпуса были разрушены классы, повреждена система отопления - накануне зимы школа осталась без тепла.`,
      p_03: `Сегодня классы и группы детского сада полностью восстановлены, а также отремонтировано школьное укрытие более чем на 600 человек.`,
      p_04: `«Школа живет, дети учатся, все идет своим чередом. В следующем году мы завершим ремонт фасада», — отметил мэр Одессы.`,
    },
    en: {
      title:
        "The mayor of Odesa inspected the restoration of gymnasium no. 125.",
      displayDate: `September 30, 2025`,
      alt: "Фото",
      p_01: `Odesa Mayor Gennadiy Trukhanov inspected the completion of restoration work at Gymnasium No. 125.`,
      p_02: `On November 7 of last year, this institution was damaged by enemy shelling. As a result of the strike near the building, classrooms were destroyed and the heating system was damaged - on the eve of winter, the school was left without heat.`,
      p_03: `Today, the classrooms and kindergarten groups have been fully restored, and the school shelter for over 600 people has also been repaired.`,
      p_04: `"The school is alive, the children are studying, everything is proceeding as usual. Next year we will complete the facade renovation," said the Mayor of Odesa.`,
    },
  },
};
