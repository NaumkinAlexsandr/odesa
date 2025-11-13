import { StaticImageData } from "next/image";
import { ContentSliderType } from "@/type/content";

import one from "@/images/destruction/2023/25.09/destruction_01.jpg";
import two from "@/images/destruction/2023/25.09/destruction_02.jpg";
import three from "@/images/destruction/2023/25.09/destruction_03.jpg";
import four from "@/images/destruction/2023/25.09/destruction_04.jpg";

export const dest_25_09_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Колаж до/після: Готель "Одеса" цілий (ліворуч) та пошкоджений після влучання (праворуч). Видно обвалення нижніх поверхів та вигорілі вікна.`,
      },
      ru: {
        alt: `Коллаж до/после: Отель "Одесса" цел (слева) и поврежден после попадания (справа), видны обрушения нижних этажей и выгоревшие окна.`,
      },
      en: {
        alt: `Before/After collage: Odesa Hotel intact (left) and damaged after impact (right), showing collapsed lower floors and burned-out windows.`,
      },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Масштабні пошкодження фасаду висотної будівлі Готелю "Одеса" та прилеглої споруди, видно обвалення скління та конструкцій.`,
      },
      ru: {
        alt: `Масштабные повреждения фасада высотного здания Отеля "Одесса" и прилегающего строения, видно обрушение остекления и конструкций.`,
      },
      en: {
        alt: `Extensive damage to the facade of the high-rise Odesa Hotel building and the adjacent structure, with collapsed glazing and structures visible.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Пошкоджена відкрита тераса чи навіс будівлі перед готелем "Одеса" з оголеними балками та звисаючими уламками матеріалів.`,
      },
      ru: {
        alt: `Поврежденная открытая терраса или навес здания перед отелем "Одесса" с оголенными балками и свисающими обломками материалов.`,
      },
      en: {
        alt: `Damaged open terrace or canopy of the building in front of the Odesa Hotel, showing exposed beams and hanging material debris.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Вигляд з вулиці на сильні пошкодження Готелю "Одеса" та його прибудови: зруйновані вікна та підвісні конструкції.`,
      },
      ru: {
        alt: `Вид с улицы на сильные повреждения Отеля "Одесса" и его пристройки: разрушенные окна и подвесные конструкции.`,
      },
      en: {
        alt: `Street view of the severe damage to the Odesa Hotel and its annex: shattered windows and suspended structures.`,
      },
    },
  },
];
