"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import SectionWrapper from "@/ui/SectionWrapper";
import { useAllImageSlides } from "./AllImageSlide";

import hadzhibey_img from "@/img/history/hajibey/hadzhibey_img.webp";
import ImageWrapper from "@/ui/ImageWrapper";

export default function Hajibey() {
  const { currentLang } = useLanguage();
  const { hadzhibey } = useAllImageSlides();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return (
    <div className="w-full">
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
        />

        <SectionWrapper paragraphs={[history.hajibey_2, history.hajibey_3]} />

        <SliderHistory slides={hadzhibey} swiperId="hadzhibey" />

        <SectionWrapper
          paragraphs={[history.hajibey_4, history.hajibey_5, history.hajibey_6]}
        />
      </div>
    </div>
  );
}
