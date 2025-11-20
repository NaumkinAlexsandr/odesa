"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./bristol";

import two from "@/public/images/attractions/hotels/bristol/bristol-2.jpg";
import three from "@/public/images/attractions/hotels/bristol/bristol-3.jpg";
import four from "@/public/images/attractions/hotels/bristol/bristol-4.jpg";
import five from "@/public/images/attractions/hotels/bristol/bristol-5.jpg";
import six from "@/public/images/attractions/hotels/bristol/bristol-6.png";

export const getBristolSlides = (currentLang: string): IImagWrapper[] => {
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];

  const firsBristol: IImagWrapper[] = [
    { src: two, alt: alt.two, caption: caption.two },
    { src: three, alt: alt.three, caption: caption.three },
    { src: four, alt: alt.four, caption: caption.four },
    { src: five, alt: alt.five, caption: caption.five },
    { src: six, alt: alt.six, caption: caption.six },
  ];
  return firsBristol;
};
