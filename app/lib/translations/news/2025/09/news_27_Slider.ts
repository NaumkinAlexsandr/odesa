import one from "@/images/news/09.2025/news_27.09.25/129549.jpeg";
import two from "@/images/news/09.2025/news_27.09.25/129552.jpeg";
import three from "@/images/news/09.2025/news_27.09.25/129554.jpeg";
import four from "@/images/news/09.2025/news_27.09.25/243290.jpeg";
import { ContentSliderType } from "@/type/content";
import { StaticImageData } from "next/image";

export const news_27_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Геннадій Труханов та іноземний представник (у синьому костюмі з вусами) під час офіційної зустрічі.`,
      },
      ru: {
        alt: `Геннадий Труханов и иностранный представитель (в синем костюме с усами) во время официальной встречи.`,
      },
      en: {
        alt: `Gennadiy Trukhanov and a foreign representative (in a blue suit with a mustache) during an official meeting.`,
      },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Крупний план: представник іноземної делегації (у синьому костюмі та блакитній краватці) за столом переговорів.`,
      },
      ru: {
        alt: `Крупный план: представитель иностранной делегации (в синем костюме и голубом галстуке) за столом переговоров.`,
      },
      en: {
        alt: `Close-up: a foreign delegation representative (in a blue suit and light blue tie) at the negotiation table.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Делегація в офіційній залі: учасники зустрічі, перед ними прапори України, Італії та ЄС.`,
      },
      ru: {
        alt: `Делегация в официальном зале: участники встречи, перед ними флаги Украины, Италии и ЕС.`,
      },
      en: {
        alt: `Delegation in the official hall: meeting participants, with the flags of Ukraine, Italy, and the EU in front of them.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Переговори Геннадія Труханова (праворуч) з іноземною делегацією. На екрані видно прапори України та Італії.`,
      },
      ru: {
        alt: `Переговоры Геннадия Труханова (справа) с иностранной делегацией. На экране видны флаги Украины и Италии.`,
      },
      en: {
        alt: `Negotiations between Gennadiy Trukhanov (right) and a foreign delegation. The flags of Ukraine and Italy are visible on the screen.`,
      },
    },
  },
];
