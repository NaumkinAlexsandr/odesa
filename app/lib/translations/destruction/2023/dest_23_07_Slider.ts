import { StaticImageData } from "next/image";
import { ContentSliderType } from "@/type/content";

import one from "@/images/destruction/2023/23.07/destruction_01.jpg";
import two from "@/images/destruction/2023/23.07/destruction_02.jpg";
import three from "@/images/destruction/2023/23.07/destruction_03.jpeg";
import four from "@/images/destruction/2023/23.07/destruction_04.jpg";
import five from "@/images/destruction/2023/23.07/destruction_05.jpg";
import six from "@/images/destruction/2023/23.07/destruction_06.jpg";
import seven from "@/images/destruction/2023/23.07/destruction_07.jpg";
import eight from "@/images/destruction/2023/23.07/destruction_08.jpg";

export const dest_23_07_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Зруйнована фасадна частина Спасо-Преображенського собору в Одесі після обстрілу`,
      },
      en: {
        alt: `The destroyed facade of the Transfiguration Cathedral in Odesa after the shelling`,
      },
      ru: {
        alt: `Разрушенная фасадная часть Спасо-Преображенского собора в Одессе после обстрела`,
      },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: "Інтер'єр Спасо-Преображенського собору, завалений уламками, з рятувальниками та людьми всередині",
      },
      en: {
        alt: `The interior of the Transfiguration Cathedral, cluttered with debris, with rescuers and people inside`,
      },
      ru: {
        alt: `Интерьер Спасо-Преображенского собора, заваленный обломками, со спасателями и людьми внутри`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: "Інтер'єр собору: вівтарна частина та фрески, завалені уламками та будівельним сміттям",
      },
      en: {
        alt: `The interior of the cathedral: the altar area and frescoes, covered with debris and construction waste`,
      },
      ru: {
        alt: `Интерьер собора: алтарная часть и фрески, заваленные обломками и строительным мусором`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: "Вигляд зверху на пошкоджений дах і куполи собору на тлі заходу сонця",
      },
      en: {
        alt: `Top view of the damaged roof and domes of the cathedral against the sunset`,
      },
      ru: {
        alt: `Вид сверху на поврежденную крышу и купола собора на фоне заката`,
      },
    },
  },
  {
    src: five as StaticImageData,
    translations: {
      ua: {
        alt: "Сцена руйнування всередині собору, з великою кількістю уламків на підлозі та пошкодженими арками",
      },
      en: {
        alt: `A scene of destruction inside the cathedral, with a large amount of debris on the floor and damaged arches`,
      },
      ru: {
        alt: `Сцена разрушения внутри собора, с большим количеством обломков на полу и поврежденными арками`,
      },
    },
  },
  {
    src: six as StaticImageData,
    translations: {
      ua: {
        alt: "Вигляд зверху на діру в даху собору та скупчення людей біля будівлі",
      },
      en: {
        alt: `Top view of the hole in the cathedral's roof and a crowd of people near the building`,
      },
      ru: {
        alt: `Вид сверху на дыру в крыше собора и скопление людей у здания`,
      },
    },
  },
  {
    src: seven as StaticImageData,
    translations: {
      ua: {
        alt: "Аерофотознімок пошкодженого даху собору, видно провали та порушення конструкцій",
      },
      en: {
        alt: `Aerial photo of the damaged cathedral roof, showing collapses and structural damage`,
      },
      ru: {
        alt: `Аэрофотоснимок поврежденной крыши собора, видны провалы и нарушения конструкций`,
      },
    },
  },
  {
    src: eight as StaticImageData,
    translations: {
      ua: {
        alt: "Загальний вигляд зверху на Спасо-Преображенський собор з великою пробоїною в даху та пошкодженими куполами",
      },
      en: {
        alt: `General top view of the Transfiguration Cathedral with a large hole in the roof and damaged domes`,
      },
      ru: {
        alt: `Общий вид сверху на Спасо-Преображенский собор с большой пробоиной в крыше и поврежденными куполами`,
      },
    },
  },
];
