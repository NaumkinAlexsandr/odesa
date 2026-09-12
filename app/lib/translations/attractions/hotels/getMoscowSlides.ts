"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./moskovskaya";

import two from "@/img/attractions/hotels/moskovskaya/moskovskaya-2.webp";
import three from "@/img/attractions/hotels/moskovskaya/moskovskaya-3.webp";
import four from "@/img/attractions/hotels/moskovskaya/moskovskaya-4.webp";
import five from "@/img/attractions/hotels/moskovskaya/moskovskaya-5.webp";
import six from "@/img/attractions/hotels/moskovskaya/moskovskaya-6.webp";

export const getMoscowSlides = (currentLang: string): IImagWrapper[] => {
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];

  const firsmoskovskaya: IImagWrapper[] = [
    { src: two, alt: alt.two, caption: caption.two },
    { src: three, alt: alt.three, caption: caption.three },
    { src: four, alt: alt.four, caption: caption.four },
    { src: five, alt: alt.five, caption: caption.five },
    { src: six, alt: alt.six, caption: caption.six },
  ];
  return firsmoskovskaya;
};
