"use client";

import React from "react";
import { useParams } from "next/navigation";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  odesaOperaHouse,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/theaters/odesa-opera-house";
import { getOperaSlides } from "@/lib/translations/attractions/theaters/getOperaSlides";
import secondTheatre from "@/img/attractions/theatre/opera/old_theatre.webp";
import ArrowUp from "@/ui/ArrowUp";

export default function OdesaOperaHouseClient() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const OOH = odesaOperaHouse[currentLang] || odesaOperaHouse.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const { sliderOne, sliderTwo, sliderThree } = getOperaSlides(currentLang);

  return (
    <div className="w-full min-w-0 overflow-hidden pt-16">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{OOH.title}</h1>

        <SliderHistory slides={sliderOne} swiperId="first-theatre" />

        <div className="w-full">
          <Paragraph className={p} text={OOH.first} />
          <Paragraph className={p} text={OOH.second} />
          <Paragraph className={p} text={OOH.third} />
        </div>

        <div className="clear-both" />

        <ImageWrapper
          src={secondTheatre}
          alt={alt.old}
          caption={caption.old}
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={OOH.fourth} />
          <Paragraph className={p} text={OOH.fifth} />
          <Paragraph className={p} text={OOH.sixth} />
        </div>

        <div className="clear-both" />

        <SliderHistory slides={sliderTwo} swiperId="new-theatre" />

        <div className="w-full">
          <Paragraph className={p} text={OOH.seventh} />
          <Paragraph className={p} text={OOH.eighth} />
          <Paragraph className={p} text={OOH.ninth} />
        </div>

        <div className="clear-both" />

        <SliderHistory
          slides={sliderThree}
          swiperId="inside-theatre"
          floatDirection="float-right"
        />
        <div className="w-full">
          <Paragraph className={p} text={OOH.tenth} />
          <Paragraph className={p} text={OOH.eleventh} />
        </div>
        <div className="clear-both" />
      </div>
      <ArrowUp />
    </div>
  );
}
