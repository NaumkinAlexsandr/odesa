"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./odesa-opera-house";

import firstTheatre from "@/img/attractions/theatre/opera/first_theatre.webp";
import fire from "@/img/attractions/theatre/opera/fire.webp";
import newTheatreOne from "@/img/attractions/theatre/opera/new_theatre_one.webp";
import newTheatreTwo from "@/img/attractions/theatre/opera/new_theatre_two.webp";
import newTheatreThree from "@/img/attractions/theatre/opera/new_theatre_three.webp";
import newTheatreFour from "@/img/attractions/theatre/opera/new_theatre_four.webp";
import newTheatreFive from "@/img/attractions/theatre/opera/new_theatre_five.webp";
import hall from "@/img/attractions/theatre/opera/hall_one.webp";
import hallTwo from "@/img/attractions/theatre/opera/hall_two.webp";
import ceiling from "@/img/attractions/theatre/opera/ceiling.webp";
import foyer from "@/img/attractions/theatre/opera/foyer_one.webp";
import foyerTwo from "@/img/attractions/theatre/opera/foyer_two.webp";

interface IOperaSlides {
  sliderOne: IImagWrapper[];
  sliderTwo: IImagWrapper[];
  sliderThree: IImagWrapper[];
}

export const getOperaSlides = (currentLang: string): IOperaSlides => {
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];

  const sliderOne: IImagWrapper[] = [
    { src: firstTheatre, alt: alt.firstTheatre, caption: caption.firstTheatre },
    { src: fire, alt: alt.fire, caption: caption.fire },
  ];

  const sliderTwo: IImagWrapper[] = [
    {
      src: newTheatreOne,
      alt: alt.newTheatreOne,
      caption: caption.newTheatreOne,
    },
    {
      src: newTheatreTwo,
      alt: alt.newTheatreTwo,
      caption: caption.newTheatreTwo,
    },
    {
      src: newTheatreThree,
      alt: alt.newTheatreThree,
      caption: caption.newTheatreThree,
    },
    {
      src: newTheatreFour,
      alt: alt.newTheatreFour,
      caption: caption.newTheatreFour,
    },
    {
      src: newTheatreFive,
      alt: alt.newTheatreFive,
      caption: caption.newTheatreFive,
    },
  ];

  const sliderThree: IImagWrapper[] = [
    { src: hall, alt: alt.hall, caption: caption.hall },
    { src: hallTwo, alt: alt.hallTwo, caption: caption.hallTwo },
    { src: ceiling, alt: alt.ceiling, caption: caption.ceiling },
    { src: foyer, alt: alt.foyer, caption: caption.foyer },
    { src: foyerTwo, alt: alt.foyerTwo, caption: caption.foyerTwo },
  ];
  return {
    sliderOne,
    sliderTwo,
    sliderThree,
  };
};
