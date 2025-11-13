"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { odessaHistory } from "@/lib/translations/history/index";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import SectionWrapper from "@/ui/SectionWrapper";
import { AllImageSlide } from "./AllImageSlide";

export default function Ussr() {
  const { currentLang } = useLanguage();

  const { ruins } = AllImageSlide();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];

  return (
    <div className="w-full">
      <div className="clearfix">
        <SectionWrapper
          id_h2="ussr_title_1"
          title={history.ussr_title_1}
          paragraphs={[history.ussr_1]}
        />

        <SliderHistory
          slides={ruins}
          swiperId="ruins"
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[history.ussr_2, history.ussr_3, history.ussr_4]}
        />
      </div>
    </div>
  );
}
