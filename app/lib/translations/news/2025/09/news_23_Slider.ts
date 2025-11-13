import one from "@/images/news/09.2025/news_23.09.25/129338.jpg";
import two from "@/images/news/09.2025/news_23.09.25/129340.jpg";
import three from "@/images/news/09.2025/news_23.09.25/129341.jpg";
import four from "@/images/news/09.2025/news_23.09.25/129343.jpg";
import five from "@/images/news/09.2025/news_23.09.25/129344.jpg";
import { ContentSliderType } from "@/type/content";
import { StaticImageData } from "next/image";

export const news_23_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Геннадій Труханов та інший учасник зустрічі підписують документи за столом переговорів.`,
      },
      ru: {
        alt: `Геннадий Труханов и другой участник встречи подписывают документы за столом переговоров.`,
      },
      en: {
        alt: `Gennadiy Trukhanov and another meeting participant signing documents at the negotiation table.`,
      },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Рука вказує ручкою на карту міста Одеси або іншого приморського міста під час обговорення.`,
      },
      ru: {
        alt: `Рука указывает ручкой на карту города Одессы или другого приморского города во время обсуждения.`,
      },
      en: {
        alt: `A hand points with a pen to a map of Odesa or another coastal city during a discussion.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Крупний план: чоловік у синьому костюмі та жінка за столом переговорів.`,
      },
      ru: {
        alt: `Крупный план: мужчина в синем костюме и женщина за столом переговоров.`,
      },
      en: {
        alt: `Close-up: a man in a blue suit and a woman sitting at the negotiation table.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Крупний портрет: жінка в чорному піджаку та червоній блузці, учасниця переговорів.`,
      },
      ru: {
        alt: `Крупный портрет: женщина в черном пиджаке и красной блузке, участница переговоров.`,
      },
      en: {
        alt: `Close-up portrait: a woman in a black blazer and red blouse, a participant in the negotiations.`,
      },
    },
  },
  {
    src: five as StaticImageData,
    translations: {
      ua: {
        alt: `Міжнародна зустріч: учасники, включаючи чоловіків у костюмах та жінку, сидять за столом, перед ними прапори.`,
      },
      ru: {
        alt: `Международная встреча: участники, включая мужчин в костюмах и женщину, сидят за столом, перед ними флаги.`,
      },
      en: {
        alt: `International meeting: participants, including men in suits and a woman, sitting at a table with flags in front of them.`,
      },
    },
  },
];
