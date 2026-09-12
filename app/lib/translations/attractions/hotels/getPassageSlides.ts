"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./passage";

import one from "@/img/attractions/hotels/passage/passage-1.webp";
import two from "@/img/attractions/hotels/passage/passage-2.webp";
import three from "@/img/attractions/hotels/passage/passage-3.webp";
import four from "@/img/attractions/hotels/passage/passage-4.webp";
import five from "@/img/attractions/hotels/passage/passage-5.webp";

export const getPassageSlides = (currentLang: string): IImagWrapper[] => {
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];

  const sliderOne: IImagWrapper[] = [
    { src: five, alt: alt.five, caption: caption.five },
    { src: one, alt: alt.one, caption: caption.one },
    { src: two, alt: alt.two, caption: caption.two },
    { src: three, alt: alt.three, caption: caption.three },
    { src: four, alt: alt.four, caption: caption.four },
  ];
  return sliderOne;
};
