export interface HeaderButton {
  home: string;
  attractions: string;
  history: string;
  news: string;
  events: string;
}

export interface Header {
  ua: { headerBtn: HeaderButton };
  en: { headerBtn: HeaderButton };
  ru: { headerBtn: HeaderButton };
}

export const header: Header = {
  ua: {
    headerBtn: {
      home: "Головна",
      attractions: "Пам'ятки",
      history: "Історія",
      news: "Новини",
      events: "Події",
    },
  },
  en: {
    headerBtn: {
      home: "Home",
      attractions: "Attractions",
      history: "History",
      news: "News",
      events: "Events",
    },
  },
  ru: {
    headerBtn: {
      home: "Главная",
      attractions: "Значимые места",
      history: "История",
      news: "Новости",
      events: "События",
    },
  },
};
