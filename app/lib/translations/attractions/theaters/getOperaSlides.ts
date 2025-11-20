"use client";
import { IImagWrapper } from "@/type/interface";
import { imgAlt, imgСaption } from "./odesa-opera-house";

import firstTheatre from "@/public/images/attractions/theatre/opera/first_theatre.png";
import fire from "@/public/images/attractions/theatre/opera/fire.png";
import newTheatreOne from "@/public/images/attractions/theatre/opera/new_theatre_one.jpg";
import newTheatreTwo from "@/public/images/attractions/theatre/opera/new_theatre_two.jpg";
import newTheatreThree from "@/public/images/attractions/theatre/opera/new_theatre_three.jpeg";
import newTheatreFour from "@/public/images/attractions/theatre/opera/new_theatre_four.png";
import newTheatreFive from "@/public/images/attractions/theatre/opera/new_theatre_five.jpg";
import hall from "@/public/images/attractions/theatre/opera/hall_one.jpg";
import hallTwo from "@/public/images/attractions/theatre/opera/hall_two.jpg";
import ceiling from "@/public/images/attractions/theatre/opera/ceiling.jpg";
import foyer from "@/public/images/attractions/theatre/opera/foyer_one.jpg";
import foyerTwo from "@/public/images/attractions/theatre/opera/foyer_two.jpg";

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
