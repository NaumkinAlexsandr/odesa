export interface IEventTexts {
  titlePage: string;
  allEvents: string;
  tickets: string;
}

export type LangKey = "ua" | "ru" | "en";
export type EventTextType = Record<LangKey, IEventTexts>;

export const eventText: EventTextType = {
  ua: {
    titlePage: `Найближчі події`,
    allEvents: `Усі події >>`,
    tickets: `Замовити квитки concert.ua`,
  },
  ru: {
    titlePage: `Ближайшие события`,
    allEvents: `Все события >>`,
    tickets: `Заказать билеты concert.ua`,
  },
  en: {
    titlePage: `Upcoming events`,
    allEvents: `All events >>`,
    tickets: `Order tickets concert.ua`,
  },
};
