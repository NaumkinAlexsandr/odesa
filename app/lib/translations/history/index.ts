import { ancient } from "./ancient";
import { kotsyubiev } from "./kotsyubiev";
import { hajibey } from "./hajibey";
import { imperial } from "./imperial";
import { revolution } from "./revolution";
import { worldWarTwo } from "./worldWarTwo";
import { ussr } from "./ussr";
import { modern_ukr } from "./modern_ukr";

export const odessaHistory = {
  ua: {
    title: "Історія Одеси крізь часи.",
    description:
      'Одеса, яку часто називають "Перлиною біля моря", — це місто з багатою та багатогранною історією, де переплелися долі багатьох народів та культур. ' +
      "Її історія — це не лише розповідь про заснування імперського порту, а й тисячолітня спадщина, що сягає корінням у глибоку давнину. " +
      "Перша письмова згадка про портове місто датується XV століттям. ",
    ...ancient.ua,
    ...kotsyubiev.ua,
    ...hajibey.ua,
    ...imperial.ua,
    ...revolution.ua,
    ...worldWarTwo.ua,
    ...ussr.ua,
    ...modern_ukr.ua,
  },
  ru: {
    title: "История Одессы сквозь времена.",
    description:
      'Одесса, которую часто называют "Жемчужиной у моря", — это город с богатой и многогранной историей, где переплелись судьбы многих народов и культур. Её история — это не только рассказ об основании имперского порта, но и тысячелетнее наследие, уходящее корнями в глубокую древность. Первое письменное упоминание о портовом городе датируется XV веком.',
    ...ancient.ru,
    ...kotsyubiev.ru,
    ...hajibey.ru,
    ...imperial.ru,
    ...revolution.ru,
    ...worldWarTwo.ru,
    ...ussr.ru,
    ...modern_ukr.ru,
  },
  en: {
    title: "The History of Odessa Through the Ages.",
    description:
      'Odessa, often called the "Pearl of the Sea," is a city with a rich and multifaceted history, where the destinies of many peoples and cultures have intertwined. Its history is not just a story about the founding of an imperial port, but also a thousand-year-old heritage rooted in deep antiquity. The first written mention of the port city dates back to the 15th century.',
    ...ancient.en,
    ...kotsyubiev.en,
    ...hajibey.en,
    ...imperial.en,
    ...revolution.en,
    ...worldWarTwo.en,
    ...ussr.en,
    ...modern_ukr.en,
  },
};
