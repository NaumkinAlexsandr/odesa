"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { IImagWrapper } from "@/type/interface";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import ImageWrapper from "@/ui/ImageWrapper";

import { odesaOperaHouse } from "@/lib/translations/theaters/odesa-opera-house";
import firstTheatre from "@/public/images/theatre/opera/first_theatre.png";
import fire from "@/public/images/theatre/opera/fire.png";
import secondTheatre from "@/public/images/theatre/opera/old_theatre.jpg";
import newTheatreOne from "@/public/images/theatre/opera/new_theatre_one.jpg";
import newTheatreTwo from "@/public/images/theatre/opera/new_theatre_two.jpg";
import newTheatreThree from "@/public/images/theatre/opera/new_theatre_three.jpeg";
import newTheatreFour from "@/public/images/theatre/opera/new_theatre_four.png";
import newTheatreFive from "@/public/images/theatre/opera/new_theatre_five.jpg";
import hall from "@/public/images/theatre/opera/hall_one.jpg";
import hallTwo from "@/public/images/theatre/opera/hall_two.jpg";
import ceiling from "@/public/images/theatre/opera/ceiling.jpg";
import foyer from "@/public/images/theatre/opera/foyer_one.jpg";
import foyerTwo from "@/public/images/theatre/opera/foyer_two.jpg";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";

const firstTheatreImages: IImagWrapper[] = [
  { src: firstTheatre, alt: "first Theatre" },
  { src: fire, alt: "fire" },
];

const newTheatreImages: IImagWrapper[] = [
  { src: newTheatreOne, alt: "new theatre" },
  { src: newTheatreTwo, alt: "new theatre" },
  { src: newTheatreThree, alt: "new theatre" },
  { src: newTheatreFour, alt: "new theatre" },
  { src: newTheatreFive, alt: "new theatre" },
];

const hallImages: IImagWrapper[] = [
  { src: hall, alt: "hall" },
  { src: hallTwo, alt: "hall" },
  { src: ceiling, alt: "ceiling" },
  { src: foyer, alt: "foyer" },
  { src: foyerTwo, alt: "foyer" },
];

export default function OdesaOperaHouse() {
  const { currentLang } = useLanguage();

  const OOH = odesaOperaHouse[currentLang as keyof typeof odesaOperaHouse];

  return (
    <div className="w-full pt-15">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{OOH.title}</h1>
        <SliderHistory slides={firstTheatreImages} swiperId="first-theatre" />

        <div className="w-full">
          <Paragraph className={p} text={OOH.first} />
          <Paragraph className={p} text={OOH.second} />
          <Paragraph className={p} text={OOH.third} />
        </div>

        <ImageWrapper
          src={secondTheatre}
          alt={"Old Theatre"}
          caption={"Old Theatre"}
          floatDirection="float-right"
        />
        <div className="w-full">
          <Paragraph className={p} text={OOH.fourth} />
          <Paragraph className={p} text={OOH.fifth} />
          <Paragraph className={p} text={OOH.sixth} />
        </div>

        <SliderHistory slides={newTheatreImages} swiperId="new-theatre" />

        <div className="w-full">
          <Paragraph className={p} text={OOH.seventh} />
          <Paragraph className={p} text={OOH.eighth} />
        </div>

        <SliderHistory
          slides={hallImages}
          swiperId="inside-theatre"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={OOH.ninth} />
          <Paragraph className={p} text={OOH.tenth} />
          <Paragraph className={p} text={OOH.eleventh} />
        </div>
      </div>
    </div>
  );
}
