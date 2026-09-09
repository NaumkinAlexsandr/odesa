"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./passage";

import one from "@/public/images/attractions/hotels/passage/passage-1.jpg";
import two from "@/public/images/attractions/hotels/passage/passage-2.jpg";
import three from "@/public/images/attractions/hotels/passage/passage-3.jpg";
import four from "@/public/images/attractions/hotels/passage/passage-4.jpg";
import five from "@/public/images/attractions/hotels/passage/passage-5.jpg";

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
