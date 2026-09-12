"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./odesa-philharmonic";

import one from "@/img/attractions/theatre/philharmonic/philharmonic_one.webp";
import two from "@/img/attractions/theatre/philharmonic/philharmonic_two.webp";
import three from "@/img/attractions/theatre/philharmonic/philharmonic_three.webp";
import four from "@/img/attractions/theatre/philharmonic/philharmonic_four.webp";

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
