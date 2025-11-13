"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import SectionWrapper from "@/ui/SectionWrapper";
import ImageWrapper from "@/ui/ImageWrapper";
import { AllImageSlide } from "./AllImageSlide";

import osvobozhdenie_one from "@/public/images/history/worldWarTwo/osvobozhdenie_one.jpg";

export default function WorldWarTwo() {
  const { currentLang } = useLanguage();

  const { ni1, oborona } = AllImageSlide();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return (
    <div className="w-full">
      <div className="clearfix">
        <SectionWrapper
          id_h2="worldWarTwo_title_1"
          title_h1={history.worldWarTwo_title_1}
          title={history.worldWarTwo_title_2}
          paragraphs={[history.worldWarTwo_1]}
        />

        <SliderHistory slides={ni1} swiperId="ni1" />

        <SectionWrapper paragraphs={[history.worldWarTwo_2]} />

        <SliderHistory
          slides={oborona}
          swiperId="oborona"
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[history.worldWarTwo_3, history.worldWarTwo_4]}
        />

        <ImageWrapper
          src={osvobozhdenie_one}
          alt={alt.osvobozhdenie}
          caption={caption.osvobozhdenie}
        />

        <SectionWrapper
          paragraphs={[history.worldWarTwo_5, history.worldWarTwo_6]}
        />
      </div>
    </div>
  );
}
