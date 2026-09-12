"use client";

import React from "react";
import { useParams } from "next/navigation";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import SectionWrapper from "@/ui/SectionWrapper";
import ImageWrapper from "@/ui/ImageWrapper";
import hadzhibey_img from "@/img/history/hajibey/hadzhibey_img.webp";
import { useAllImageSlides } from "./AllImageSlide";

export default function Hajibey() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const history = odessaHistory[currentLang] || odessaHistory.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;

  const { hadzhibey } = useAllImageSlides();

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="clearfix">
        <SectionWrapper
          id_h2="hajibey_title_1"
          title={history.hajibey_title_1}
          paragraphs={[history.hajibey_1]}
        />

        <ImageWrapper
          src={hadzhibey_img}
          alt={alt.hadzhibey_img}
          caption={caption.hadzhibey_img}
          floatDirection="float-left"
        />

        <SectionWrapper paragraphs={[history.hajibey_2, history.hajibey_3]} />

        {/* Сброс обтекания перед слайдером */}
        <div className="clear-both" />

        <SliderHistory
          slides={hadzhibey}
          swiperId="hadzhibey"
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[history.hajibey_4, history.hajibey_5, history.hajibey_6]}
        />

        {/* Сброс обтекания в конце секции */}
        <div className="clear-both" />
      </div>
    </div>
  );
}
