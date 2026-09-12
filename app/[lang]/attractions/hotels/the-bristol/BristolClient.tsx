"use client";

import React from "react";
import { useParams } from "next/navigation";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  bristol,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/hotels/bristol";
import { getBristolSlides } from "@/lib/translations/attractions/hotels/getBristolSlides";
import one from "@/img/attractions/hotels/bristol/bristol.webp";
import ArrowUp from "@/ui/ArrowUp";

export default function BristolClient() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const hotelBristol = bristol[currentLang] || bristol.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const sliderOne = getBristolSlides(currentLang);

  return (
    <div className="w-full min-w-0 overflow-hidden pt-16">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{hotelBristol.title}</h1>

        <ImageWrapper src={one} alt={alt.one} caption={caption.one} />

        <div className="w-full">
          <Paragraph className={p} text={hotelBristol.one} />
          <Paragraph className={p} text={hotelBristol.two} />
          <Paragraph className={p} text={hotelBristol.three} />
          <Paragraph className={p} text={hotelBristol.four} />
        </div>

        {/* Сброс обтекания перед слайдером */}
        <div className="clear-both" />

        <SliderHistory
          slides={sliderOne}
          swiperId="bristol-slides"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={hotelBristol.five} />
          <Paragraph className={p} text={hotelBristol.six} />
          <Paragraph className={p} text={hotelBristol.seven} />
          <Paragraph className={p} text={hotelBristol.eight} />
        </div>

        {/* Сброс обтекания в конце секции */}
        <div className="clear-both" />
      </div>
      <ArrowUp />
    </div>
  );
}
