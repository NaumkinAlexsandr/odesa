"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import SectionWrapper from "@/ui/SectionWrapper";
import { AllImageSlide } from "./AllImageSlide";

export default function ModernUA() {
  const { currentLang } = useLanguage();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const { odessa_1990s, odessa_2000s, odessa_2014, odessa_2020, odessa_2024 } =
    AllImageSlide();

  return (
    <div className="w-full">
      <div className="clearfix">
        <SectionWrapper
          id_h1="modern_ukr_title_1"
          id_h2="modern_ukr_title_2"
          title_h1={history.modern_ukr_title_1}
          title={history.modern_ukr_title_2}
          paragraphs={[history.modern_ukr_1, history.modern_ukr_2]}
        />

        <SliderHistory slides={odessa_1990s} swiperId="odessa_1990s" />

        <SectionWrapper
          paragraphs={[
            history.modern_ukr_3,
            history.modern_ukr_4,
            history.modern_ukr_5,
          ]}
        />

        <SectionWrapper
          id_h2="modern_ukr_title_3"
          title={history.modern_ukr_title_3}
          paragraphs={[history.modern_ukr_6, history.modern_ukr_7]}
        />

        <SliderHistory
          slides={odessa_2000s}
          swiperId="odessa_2000s"
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[
            history.modern_ukr_8,
            history.modern_ukr_9,
            history.modern_ukr_10,
          ]}
        />

        <SectionWrapper
          id_h2="modern_ukr_title_4"
          title={history.modern_ukr_title_4}
          paragraphs={[history.modern_ukr_11, history.modern_ukr_12]}
        />

        <SliderHistory slides={odessa_2014} swiperId="odessa_2014" />

        <SectionWrapper
          paragraphs={[
            history.modern_ukr_13,
            history.modern_ukr_14,
            history.modern_ukr_15,
          ]}
        />

        <SectionWrapper
          id_h2="modern_ukr_title_5"
          title={history.modern_ukr_title_5}
          paragraphs={[history.modern_ukr_16]}
        />

        <SliderHistory
          slides={odessa_2020}
          swiperId="odessa_2020"
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[
            history.modern_ukr_17,
            history.modern_ukr_18,
            history.modern_ukr_19,
          ]}
        />

        <SliderHistory slides={odessa_2024} swiperId="odessa_2024" />

        <SectionWrapper
          paragraphs={[
            history.modern_ukr_20,
            history.modern_ukr_21,
            history.modern_ukr_22,
          ]}
        />
      </div>
      ;
    </div>
  );
}
