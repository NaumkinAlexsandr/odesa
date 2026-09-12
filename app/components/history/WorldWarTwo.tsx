"use client";

import React from "react";
import { useParams } from "next/navigation";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import SectionWrapper from "@/ui/SectionWrapper";
import ImageWrapper from "@/ui/ImageWrapper";
import { useAllImageSlides } from "./AllImageSlide";

import osvobozhdenie_one from "@/img/history/worldWarTwo/osvobozhdenie_one.webp";

export default function WorldWarTwo() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const history = odessaHistory[currentLang] || odessaHistory.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;

  const { ni1, oborona } = useAllImageSlides();

  return (
    <div className="w-full min-w-0 overflow-hidden">
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
