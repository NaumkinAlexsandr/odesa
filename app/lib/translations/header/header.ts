export interface HeaderButton {
  home: string;
  attractions: string;
  history: string;
  news: string;
  events: string;
  destruction: string; // <-- 1. Добавьте это свойство в интерфейс
}

export const header = {
  ua: {
    headerBtn: {
      home: "Головна",
      attractions: "Визначні місця",
      history: "Історія",
      news: "Новини",
      events: "Події",
      destruction: "Руйнування", // <-- 2. Добавьте перевод для UA
    },
  },
  ru: {
    headerBtn: {
      home: "Главная",
      attractions: "Достопримечательности",
      history: "История",
      news: "Новости",
      events: "События",
      destruction: "Разрушения", // <-- 2. Добавьте перевод для RU
    },
  },
  en: {
    headerBtn: {
      home: "Home",
      attractions: "Attractions",
      history: "History",
      news: "News",
      events: "Events",
      destruction: "Destruction", // <-- 2. Добавьте перевод для EN
    },
  },
};
