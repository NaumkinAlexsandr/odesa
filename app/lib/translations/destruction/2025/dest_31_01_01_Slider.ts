import { StaticImageData } from "next/image";
import { ContentSliderType } from "@/type/content";

import one from "@/images/destruction/2025/31.01/destruction_01.jpg";
import two from "@/images/destruction/2025/31.01/destruction_02.jpg";
import three from "@/images/destruction/2025/31.01/destruction_03.jpg";
import four from "@/images/destruction/2025/31.01/destruction_04.jpg";
import five from "@/images/destruction/2025/31.01/destruction_05.jpg";

export const dest_31_01_01_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: {
        alt: `Зруйновані вікна фасаду Одеської філармонії, закриті чорною плівкою, з видимими тріщинами на склі.`,
      },
      ru: {
        alt: `Разрушенные окна фасада Одесской филармонии, закрытые черной пленкой, с видимыми трещинами на стекле.`,
      },
      en: {
        alt: `Shattered windows on the facade of the Odesa Philharmonic, covered with black sheeting, with visible cracks in the glass.`,
      },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: {
        alt: `Пошкоджене вікно готичного стилю із залишками кольорового вітража у стіні історичної будівлі в Одесі.`,
      },
      ru: {
        alt: `Поврежденное окно в готическом стиле с остатками цветного витража в стене исторического здания в Одессе.`,
      },
      en: {
        alt: `Damaged Gothic-style window with fragments of colored stained glass in the wall of a historical building in Odesa.`,
      },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: {
        alt: `Інтер'єр філармонії: видно старі різьблені дерев'яні двері, дверний отвір, завалений уламками та дерев'яними елементами декору, покритими плівкою.`,
      },
      ru: {
        alt: `Интерьер филармонии: видны старые резные деревянные двери, дверной проем, заваленный обломками и деревянными элементами декора, покрытыми пленкой.`,
      },
      en: {
        alt: `Interior of the Philharmonic: old carved wooden doors, a doorway blocked by debris and wooden decorative elements covered with sheeting.`,
      },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: {
        alt: `Значні тріщини на рожевому фасаді старовинної будівлі, розташованої поруч із філармонією, видно пошкодження даху та вікон.`,
      },
      ru: {
        alt: `Значительные трещины на розовом фасаде старинного здания, расположенного рядом с филармонией, видны повреждения крыши и окон.`,
      },
      en: {
        alt: `Significant cracks on the pink facade of an old building located near the Philharmonic, showing damage to the roof and windows.`,
      },
    },
  },
  {
    src: five as StaticImageData,
    translations: {
      ua: {
        alt: `Пошкоджений інтер'єр старовинної будівлі (ймовірно, прилеглої до філармонії): уламки дощок та сміття на підлозі біля відчинених дверей.`,
      },
      ru: {
        alt: `Поврежденный интерьер старинного здания (вероятно, прилегающего к филармонии): обломки досок и мусор на полу у открытой двери.`,
      },
      en: {
        alt: `Damaged interior of an old building (likely adjacent to the Philharmonic): debris and wood fragments on the floor near an open door.`,
      },
    },
  },
];
