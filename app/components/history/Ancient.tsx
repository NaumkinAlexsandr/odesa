"use client";

import React from "react";
import { useParams } from "next/navigation";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import ImageWrapper from "@/ui/ImageWrapper";
import SectionWrapper from "@/ui/SectionWrapper";
import istrion_two from "@/img/history/ancient/istrion_two.webp";
import { useAllImageSlides } from "./AllImageSlide";

export default function Ancient() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const history = odessaHistory[currentLang] || odessaHistory.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;

  const { istrion } = useAllImageSlides();

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <SectionWrapper
        title_h1={history.title}
        paragraphs={[history.description]}
      />

      <SectionWrapper
        id_h1="ancient_title_1"
        title_h1={history.ancient_title_1}
        paragraphs={[history.ancient_1, history.ancient_2]}
      />

      <SliderHistory
        slides={istrion}
        swiperId="ancient-istrion"
        floatDirection="float-left"
      />

      <SectionWrapper
        id_h2="ancient_title_2"
        title={history.ancient_title_2}
        paragraphs={[history.ancient_3, history.ancient_4, history.ancient_5]}
      />

      <div className="clear-both" />

      <ImageWrapper
        src={istrion_two}
        alt={alt.istrion_two}
        caption={caption.istrion_two}
        floatDirection="float-right"
      />

      <SectionWrapper
        id_h2="ancient_title_3"
        title={history.ancient_title_3}
        paragraphs={[history.ancient_6, history.ancient_7]}
      />

      <div className="clear-both" />

      <SectionWrapper
        id_h2="ancient_title_4"
        title={history.ancient_title_4}
        paragraphs={[
          history.ancient_8,
          history.ancient_9,
          history.ancient_10,
          history.ancient_11,
          history.ancient_12,
        ]}
      />
    </div>
  );
}
