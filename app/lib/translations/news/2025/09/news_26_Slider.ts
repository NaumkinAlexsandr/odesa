import one from "@/images/news/09.2025/news_26.09.25/129510.jpeg";
import two from "@/images/news/09.2025/news_26.09.25/129502.jpeg";
import three from "@/images/news/09.2025/news_26.09.25/129503.jpeg";
import four from "@/images/news/09.2025/news_26.09.25/129504.jpeg";
import five from "@/images/news/09.2025/news_26.09.25/129506.jpeg";
import six from "@/images/news/09.2025/news_26.09.25/129508.jpeg";
import { StaticImageData } from "next/image";
import { ContentSliderType } from "@/type/content";

export const news_26_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Обладнання станції очистки води: сині резервуари та фільтри в приміщенні бювету.`,
      },
      ru: {
        alt: `Оборудование станции очистки воды: синие резервуары и фильтры в помещении бювета.`,
      },
      en: {
        alt: `Water purification station equipment: blue tanks and filters inside the public water point (bjuvet).`,
      },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Група людей на чолі з Геннадієм Трухановим (Мер Одеси) оглядає будівлю нового бювету або точки видачі води.`,
      },
      ru: {
        alt: `Группа людей во главе с Геннадием Трухановым (Мэр Одессы) осматривает здание нового бювета или точки выдачи воды.`,
      },
      en: {
        alt: `A group of people led by Gennadiy Trukhanov (Mayor of Odesa) inspects the building of the new public water point.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Кран для набору води на стіні з білого мармуру в громадському пункті видачі води (бюветі).`,
      },
      ru: {
        alt: `Краны для набора воды на стене из белого мрамора в общественном пункте выдачи воды (бювете).`,
      },
      en: {
        alt: `Water taps on a white marble wall at the public water dispensing point.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Обладнання станції очистки води: сині фільтри та великий резервуар у приміщенні.`,
      },
      ru: {
        alt: `Оборудование станции очистки воды: синие фильтры и большой резервуар в помещении.`,
      },
      en: {
        alt: `Water purification station equipment: blue filters and a large tank inside the facility.`,
      },
    },
  },
  {
    src: five as StaticImageData,
    translations: {
      ua: {
        alt: `Жінка в червоному костюмі набирає воду у велику пляшку в бюветі.`,
      },
      ru: {
        alt: `Женщина в красном костюме набирает воду в большую бутылку в бювете.`,
      },
      en: {
        alt: `A woman in a red suit filling a large bottle with water at the public water point.`,
      },
    },
  },
  {
    src: six as StaticImageData,
    translations: {
      ua: {
        alt: `Геннадій Труханов (Мер Одеси) наливає воду у стаканчик з крана для дегустації.`,
      },
      ru: {
        alt: `Геннадий Труханов (Мэр Одессы) наливает воду в стаканчик из крана для дегустации.`,
      },
      en: {
        alt: `Gennadiy Trukhanov (Mayor of Odesa) pouring water from the tap into a cup for tasting.`,
      },
    },
  },
];
