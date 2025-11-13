import one from "@/images/news/09.2025/news_24.09.25/129349.jpg";
import two from "@/images/news/09.2025/news_24.09.25/129346.jpg";
import three from "@/images/news/09.2025/news_24.09.25/129347.jpg";
import four from "@/images/news/09.2025/news_24.09.25/129348.jpg";
import { StaticImageData } from "next/image";
import { ContentSliderType } from "@/type/content";

export const news_24_Slider: ContentSliderType = [
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Геннадій Труханов, мер Одеси, вручає нагороду (медаль у синьому футлярі) представнику іноземної делегації.`,
      },
      ru: {
        alt: `Геннадий Труханов, мэр Одессы, вручает награду (медаль в синем футляре) представителю иностранной делегации.`,
      },
      en: {
        alt: `Gennadiy Trukhanov, Mayor of Odesa, presents an award (a medal in a blue case) to a foreign delegation representative.`,
      },
    },
  },
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Загальний план: зустріч (переговори) Геннадія Труханова та його команди з іноземною делегацією в офіційному залі.`,
      },
      ru: {
        alt: `Общий план: встреча (переговоры) Геннадия Труханова и его команды с иностранной делегацией в официальном зале.`,
      },
      en: {
        alt: `General view: a meeting (negotiation) between Gennadiy Trukhanov and his team with a foreign delegation in an official hall.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Крупний план: два представники іноземної делегації за столом переговорів, один з них робить нотатки.`,
      },
      ru: {
        alt: `Крупный план: два представителя иностранной делегации за столом переговоров, один из них делает заметки.`,
      },
      en: {
        alt: `Close-up: two representatives of the foreign delegation at the negotiation table, one of them taking notes.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Крупний портрет Геннадія Труханова, мера Одеси, під час зустрічі.`,
      },
      ru: {
        alt: `Крупный портрет Геннадия Труханова, мэра Одессы, во время встречи.`,
      },
      en: {
        alt: `Close-up portrait of Gennadiy Trukhanov, Mayor of Odesa, during the meeting.`,
      },
    },
  },
];
