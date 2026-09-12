"use client";

import React from "react";
import { useParams } from "next/navigation";
import { odessaHistory } from "@/lib/translations/history/index";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import SectionWrapper from "@/ui/SectionWrapper";
import { useAllImageSlides } from "./AllImageSlide";

export default function Ussr() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const history = odessaHistory[currentLang] || odessaHistory.ua;
  const { ruins } = useAllImageSlides();

  return (
    <div className="w-full min-w-0 overflow-hidden">
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
