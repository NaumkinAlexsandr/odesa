export interface ITitleExchange {
  [key: string]: {
    country?: string;
    currency: string;
    buy: string;
    sell: string;
    more?: string;
  };
}

export interface ILoadingExchange {
  [key: string]: { loading: string; error: string; data: string };
}

export const titleExchange: ITitleExchange = {
  ua: {
    country: "Країна",
    currency: "Валюта",
    buy: "Купівля",
    sell: "Продаж",
    more: "Більше валют >>>",
  },
  ru: {
    country: "Страна",
    currency: "Валюта",
    buy: "Покупка",
    sell: "Продажа",
    more: "Больше валют >>>",
  },
  en: {
    country: "Country",
    currency: "Currency",
    buy: "Buy",
    sell: "Sell",
    more: "More currencies >>>",
  },
};

export const downloadExchange: ILoadingExchange = {
  ua: {
    loading: "Завантаження курсів...",
    error: "Помилка: ",
    data: "Немає даних для відображення.",
  },
  ru: {
    loading: "Загрузка курсов...",
    error: "Ошибка: ",
    data: "Нет данных для отображения.",
  },
  en: {
    loading: "Downloading courses...",
    error: "Error: ",
    data: "No data to display.",
  },
};
