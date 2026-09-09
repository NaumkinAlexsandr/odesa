"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./odesa-philharmonic";

import one from "@/public/images/attractions/theatre/philharmonic/philharmonic_one.jpg";
import two from "@/public/images/attractions/theatre/philharmonic/philharmonic_two.jpg";
import three from "@/public/images/attractions/theatre/philharmonic/philharmonic_three.jpg";
import four from "@/public/images/attractions/theatre/philharmonic/philharmonic_four.jpg";

export const getPhilharmonicSlides = (currentLang: string): IImagWrapper[] => {
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];

  const firsPhilharmonic: IImagWrapper[] = [
    { src: one, alt: alt.one, caption: caption.one },
    { src: two, alt: alt.two, caption: caption.two },
    { src: three, alt: alt.three, caption: caption.three },
    { src: four, alt: alt.four, caption: caption.four },
  ];
  return firsPhilharmonic;
};
