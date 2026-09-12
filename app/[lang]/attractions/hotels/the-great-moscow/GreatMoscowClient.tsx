"use client";

import React from "react";
import { useParams } from "next/navigation";
import SliderHistory from "@/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  moskovskaya,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/hotels/moskovskaya";
import { getMoscowSlides } from "@/lib/translations/attractions/hotels/getMoscowSlides";
import one from "@/img/attractions/hotels/moskovskaya/moskovskaya-1.webp";
import ArrowUp from "@/ui/ArrowUp";

export default function GreatMoscowClient() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const hotelMoscow = moskovskaya[currentLang] || moskovskaya.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const sliderOne = getMoscowSlides(currentLang);

  return (
    <div className="w-full min-w-0 overflow-hidden pt-16">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{hotelMoscow.title}</h1>

        <ImageWrapper src={one} alt={alt.one} caption={caption.one} />

        <div className="w-full">
          <Paragraph className={p} text={hotelMoscow.one} />
          <Paragraph className={p} text={hotelMoscow.two} />
          <Paragraph className={p} text={hotelMoscow.three} />
          <Paragraph className={p} text={hotelMoscow.four} />
        </div>

        {/* Сброс обтекания перед слайдером */}
        <div className="clear-both" />

        <SliderHistory
          slides={sliderOne}
          swiperId="moscow-slides"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={hotelMoscow.five} />
          <Paragraph className={p} text={hotelMoscow.six} />
          <Paragraph className={p} text={hotelMoscow.seven} />
          <Paragraph className={p} text={hotelMoscow.eight} />
          <Paragraph className={p} text={hotelMoscow.nine} />
          <Paragraph className={p} text={hotelMoscow.ten} />
        </div>

        {/* Сброс обтекания в конце секции */}
        <div className="clear-both" />
      </div>
      <ArrowUp />
    </div>
  );
}
