"use client";

import React from "react";
import { useParams } from "next/navigation";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  passage,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/hotels/passage";
import { getPassageSlides } from "@/lib/translations/attractions/hotels/getPassageSlides";
import six from "@/img/attractions/hotels/passage/passage-6.webp";
import ArrowUp from "@/ui/ArrowUp";

export default function PassageClient() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const hotelPassage = passage[currentLang] || passage.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const sliderOne = getPassageSlides(currentLang);

  return (
    <div className="w-full min-w-0 overflow-hidden pt-16">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{hotelPassage.title}</h1>

        <ImageWrapper src={six} alt={alt.six} caption={caption.six} />

        <div className="w-full">
          <Paragraph className={p} text={hotelPassage.one} />
          <Paragraph className={p} text={hotelPassage.two} />
          <Paragraph className={p} text={hotelPassage.three} />
          <Paragraph className={p} text={hotelPassage.four} />
          <Paragraph className={p} text={hotelPassage.five} />
        </div>

        {/* Сброс обтекания перед слайдером */}
        <div className="clear-both" />

        <SliderHistory
          slides={sliderOne}
          swiperId="passage-slides"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={hotelPassage.six} />
          <Paragraph className={p} text={hotelPassage.seven} />
          <Paragraph className={p} text={hotelPassage.eight} />
          <Paragraph className={p} text={hotelPassage.nine} />
          <Paragraph className={p} text={hotelPassage.ten} />
          <Paragraph className={p} text={hotelPassage.eleven} />
        </div>

        {/* Сброс обтекания в конце секции */}
        <div className="clear-both" />
      </div>
      <ArrowUp />
    </div>
  );
}
