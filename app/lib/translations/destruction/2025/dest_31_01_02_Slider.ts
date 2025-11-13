import { StaticImageData } from "next/image";
import { ContentSliderType } from "@/type/content";

import one from "@/images/destruction/2025/31.01/destruction_06.jpg";
import two from "@/images/destruction/2025/31.01/destruction_07.jpg";
import three from "@/images/destruction/2025/31.01/destruction_08.jpg";
import four from "@/images/destruction/2025/31.01/destruction_09.jpg";
import five from "@/images/destruction/2025/31.01/destruction_10.jpg";

export const dest_31_01_02_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Аерознімок пошкодженого даху історичної будівлі (ймовірно, будинку поруч із собором) з великою пробоїною та оголеними дерев'яними конструкціями.`,
      },
      ru: {
        alt: `Аэроснимок поврежденной крыши исторического здания (вероятно, дома рядом с собором) с большой пробоиной и оголенными деревянными конструкциями.`,
      },
      en: {
        alt: `Aerial view of the damaged roof of a historic building (likely near the Cathedral) showing a large hole and exposed wooden structures.`,
      },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Сходи з вишуканими балясинами в Готелі "Брістоль", завалені уламками та ґратами. Видно статую, що постраждала від обвалення.`,
      },
      ru: {
        alt: `Лестница с изысканными балясинами в Отеле "Бристоль", заваленная обломками и решетками. Видна статуя, пострадавшая от обрушения.`,
      },
      en: {
        alt: `Staircase with elegant balusters in the Bristol Hotel, littered with debris and rubble. A statue is visible, damaged by the collapse.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Зруйнована зала або вітальня Готелю "Брістоль" з розкішними синіми оксамитовими кріслами, заваленими сміттям та склом.`,
      },
      ru: {
        alt: `Разрушенный зал или гостиная Отеля "Бристоль" с роскошными синими бархатными креслами, заваленными мусором и стеклом.`,
      },
      en: {
        alt: `Destroyed lounge or living room in the Bristol Hotel, showing luxurious blue velvet armchairs covered in debris and shattered glass.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Колаж пошкодженого інтер'єру Готелю "Брістоль": завалений уламками коридор (ліворуч) та фасад будівлі, освітлений вночі (праворуч).`,
      },
      ru: {
        alt: `Коллаж поврежденного интерьера Отеля "Бристоль": заваленный обломками коридор (слева) и фасад здания, освещенный ночью (справа).`,
      },
      en: {
        alt: `Collage of the damaged interior of the Bristol Hotel: a debris-filled corridor (left) and the building's facade illuminated at night (right).`,
      },
    },
  },
  {
    src: five as StaticImageData,
    translations: {
      ua: {
        alt: `Колаж сходів Готелю "Брістоль", завалених будівельним сміттям, цеглою та камінням. Видно обвалення частини стіни та вікна.`,
      },
      ru: {
        alt: `Коллаж лестницы Отеля "Бристоль", заваленной строительным мусором, кирпичами и камнями. Видно обрушение части стены и окна.`,
      },
      en: {
        alt: `Collage of the Bristol Hotel staircase, covered in construction debris, bricks, and stones. A collapsed section of the wall and a window are visible.`,
      },
    },
  },
];
