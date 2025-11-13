import { StaticImageData } from "next/image";
import { IContentArticle, ContentSliderType } from "@/type/content";

import one from "@/images/destruction/2023/25.09/destruction_01.jpg";
import two from "@/images/destruction/2023/25.09/destruction_02.jpg";
import three from "@/images/destruction/2023/25.09/destruction_03.jpeg";
import four from "@/images/destruction/2023/25.09/destruction_04.jpg";

export const dest_25_09_Slider: ContentSliderType = [
  {
    src: one as StaticImageData,
    translations: {
      ua: { alt: `` },
      ru: { alt: `` },
      en: { alt: `` },
    },
  },
  {
    src: two as StaticImageData,
    translations: {
      ua: { alt: `` },
      ru: { alt: `` },
      en: { alt: `` },
    },
  },
  {
    src: three as StaticImageData,
    translations: {
      ua: { alt: `` },
      ru: { alt: `` },
      en: { alt: `` },
    },
  },
  {
    src: four as StaticImageData,
    translations: {
      ua: { alt: `` },
      ru: { alt: `` },
      en: { alt: `` },
    },
  },
];

export const dsd: IContentArticle = {
  id: ``,
  isoDate: "2025-09-12T00:00:00.000Z",
  layoutType: `sliderLeft`,
  urlImg: one,
  slides: dest_25_09_Slider,
  translations: {
    ua: {
      title: ``,
      displayDate: ``,
      alt: ``,
      p_01: ``,
      p_02: ``,
      p_03: ``,
      p_04: ``,
      p_05: ``,
      p_06: ``,
      p_07: ``,
      p_08: ``,
      p_09: ``,
      p_10: ``,
      p_11: ``,
      p_12: ``,
      p_13: ``,
      p_14: ``,
    },
    ru: {
      title: ``,
      displayDate: ``,
      alt: ``,
      p_01: ``,
      p_02: ``,
      p_03: ``,
      p_04: ``,
      p_05: ``,
      p_06: ``,
      p_07: ``,
      p_08: ``,
      p_09: ``,
      p_10: ``,
      p_11: ``,
      p_12: ``,
      p_13: ``,
      p_14: ``,
    },
    en: {
      title: ``,
      displayDate: ``,
      alt: ``,
      p_01: ``,
      p_02: ``,
      p_03: ``,
      p_04: ``,
      p_05: ``,
      p_06: ``,
      p_07: ``,
      p_08: ``,
      p_09: ``,
      p_10: ``,
      p_11: ``,
      p_12: ``,
      p_13: ``,
      p_14: ``,
    },
  },
};
