"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import ImageWrapper from "@/ui/ImageWrapper";
import SectionWrapper from "@/ui/SectionWrapper";
import { AllImageSlide } from "./AllImageSlide";

import istrion_two from "@/public/images/history/ancient/istrion_two.png";

export default function Ancient() {
  const { currentLang } = useLanguage();
  const { istrion } = AllImageSlide();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return (
    <div className="w-full">
      <div className="clearfix">
        <SectionWrapper
          title_h1={history.title}
          paragraphs={[history.description]}
        />

        <SectionWrapper
          id_h1="ancient_title_1"
          title_h1={history.ancient_title_1}
          paragraphs={[history.ancient_1, history.ancient_2]}
        />

        <SliderHistory slides={istrion} swiperId="ancient-istrion" />

        <SectionWrapper
          id_h2="ancient_title_2"
          title={history.ancient_title_2}
          paragraphs={[history.ancient_3, history.ancient_4, history.ancient_5]}
        />

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
    </div>
  );
}

/*
<SectionWrapper
          title={history.}
          paragraphs={[history., history.]}
        />

*/
