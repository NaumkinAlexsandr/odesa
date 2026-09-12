"use client";

import React from "react";
import { useParams } from "next/navigation";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/components/ui/ImageWrapper";
import { odesaPhilharmonic } from "@/lib/translations/attractions/theaters/odesa-philharmonic";
import { getPhilharmonicSlides } from "@/lib/translations/attractions/theaters/getPhilharmonicSlides";
import philharmonic from "@/img/history/imperial/philharmonic.webp";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import ArrowUp from "@/ui/ArrowUp";

export default function PhilharmonicClient() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const OP = odesaPhilharmonic[currentLang] || odesaPhilharmonic.ua;
  const sliderOne = getPhilharmonicSlides(currentLang);
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;

  return (
    <div className="w-full min-w-0 overflow-hidden pt-16">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{OP.title}</h1>

        <ImageWrapper
          src={philharmonic}
          alt={alt.philharmonic}
          caption={caption.philharmonic}
        />

        <div className="w-full">
          <Paragraph className={p} text={OP.first} />
          <Paragraph className={p} text={OP.second} />
          <Paragraph className={p} text={OP.third} />
          <Paragraph className={p} text={OP.fourth} />
        </div>

        {/* Сброс обтекания перед слайдером */}
        <div className="clear-both" />

        <SliderHistory
          slides={sliderOne}
          swiperId="philharmonic-slides"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={OP.fifth} />
          <Paragraph className={p} text={OP.sixth} />
          <Paragraph className={p} text={OP.seventh} />
          <Paragraph className={p} text={OP.eighth} />
        </div>

        {/* Финальный сброс обтекания */}
        <div className="clear-both" />
      </div>
      <ArrowUp />
    </div>
  );
}
