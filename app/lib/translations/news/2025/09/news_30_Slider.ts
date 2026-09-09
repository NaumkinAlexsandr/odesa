import one from "@/images/news/09.2025/news_30.09.25/129762.jpeg";
import two from "@/images/news/09.2025/news_30.09.25/129563.jpeg";
import three from "@/images/news/09.2025/news_30.09.25/129731.jpeg";
import four from "@/images/news/09.2025/news_30.09.25/129737.jpeg";
import five from "@/images/news/09.2025/news_30.09.25/129750.jpeg";
import six from "@/images/news/09.2025/news_30.09.25/129757.jpeg";
import seven from "@/images/news/09.2025/news_30.09.25/129758.jpeg";
import { StaticImageData } from "next/image";
import { ContentSliderType } from "@/type/content";

export const news_30_Slider: ContentSliderType = [
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Діти в класі в українських вишиванках, сидять за партами та посміхаються.`,
      },
      ru: {
        alt: `Дети в классе в украинских вышиванках, сидят за партами и улыбаются.`,
      },
      en: {
        alt: `Children in a classroom wearing Ukrainian vyshyvankas (embroidered shirts), sitting at desks and smiling.`,
      },
    },
  },
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Фотографії пошкоджень або руйнувань, вивішені на стенді з металевої сітки.`,
      },
      ru: {
        alt: `Фотографии повреждений или разрушений, вывешенные на стенде из металлической сетки.`,
      },
      en: {
        alt: `Photographs of damage or destruction displayed on a metal grid stand.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Двоє хлопчиків роблять селфі з Геннадієм Трухановим.`,
      },
      ru: {
        alt: `Двое мальчиков делают селфи с Геннадием Трухановым.`,
      },
      en: {
        alt: `Two boys taking a selfie with a Gennadiy Trukhanov.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Приміщення шкільної їдальні або бомбосховища, обладнане столами та лавками. Жовті стіни та вентиляційні труби.`,
      },
      ru: {
        alt: `Помещение школьной столовой или бомбоубежища, оборудованное столами и скамейками. Желтые стены и вентиляционные трубы.`,
      },
      en: {
        alt: `A school cafeteria or bomb shelter room equipped with tables and benches. Yellow walls and ventilation ducts.`,
      },
    },
  },
  {
    src: five as StaticImageData,
    translations: {
      ua: {
        alt: `Дитячий ігровий куточок: яскравий стіл у формі квітки з різнокольоровими сегментами та стільці.`,
      },
      ru: {
        alt: `Детский игровой уголок: яркий стол в форме цветка с разноцветными сегментами и стулья.`,
      },
      en: {
        alt: `Children's play corner: a bright flower-shaped table with multi-colored segments and chairs.`,
      },
    },
  },
  {
    src: six as StaticImageData,
    translations: {
      ua: {
        alt: `Санвузли з кабінками та унітазом, пристосовані для використання.`,
      },
      ru: {
        alt: `Санузлы с кабинками и унитазом, приспособленные для использования.`,
      },
      en: { alt: `Restrooms with stalls and a toilet, adapted for use.` },
    },
  },
  {
    src: seven as StaticImageData,
    translations: {
      ua: {
        alt: `Діти в класі, багато з них одягнені у вишиванки, стоять біля парт.`,
      },
      ru: {
        alt: `Дети в классе, многие из них одеты в вышиванки, стоят возле парт.`,
      },
      en: {
        alt: `Children in a classroom, many wearing vyshyvankas, standing by their desks.`,
      },
    },
  },
];
