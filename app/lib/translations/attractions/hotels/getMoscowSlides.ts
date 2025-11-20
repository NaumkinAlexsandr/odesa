"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./moskovskaya";

import two from "@/public/images/attractions/hotels/moskovskaya/moskovskaya-2.jpg";
import three from "@/public/images/attractions/hotels/moskovskaya/moskovskaya-3.jpg";
import four from "@/public/images/attractions/hotels/moskovskaya/moskovskaya-4.jpg";
import five from "@/public/images/attractions/hotels/moskovskaya/moskovskaya-5.jpg";
import six from "@/public/images/attractions/hotels/moskovskaya/moskovskaya-6.jpg";

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
