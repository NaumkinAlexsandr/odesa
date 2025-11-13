"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SectionWrapper from "@/ui/SectionWrapper";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import ImageWrapper from "@/ui/ImageWrapper";
import { AllImageSlide } from "./AllImageSlide";

import hadzhibey_1794 from "@/public/images/history/imperial/hadzhibey_1794.jpg";
import odessa_1814 from "@/public/images/history/imperial/odessa_1814.png";
import opera_house_1887 from "@/public/images/history/imperial/opera_house_1887.jpg";
import university_1894 from "@/public/images/history/imperial/university_1894.jpg";

export default function Imperial() {
  const { currentLang } = useLanguage();

  const { odessa_1854, odessa_1899 } = AllImageSlide();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return (
    <div className="w-full">
      <div className="clearfix">
        <SectionWrapper
          id_h1="imperial_title_1"
          id_h2="imperial_title_2"
          title_h1={history.imperial_title_1}
          title={history.imperial_title_2}
          paragraphs={[history.imperial_1]}
        />

        <ImageWrapper
          src={hadzhibey_1794}
          alt={alt.hadzhibey_1794}
          caption={caption.hadzhibey_1794}
        />

        <SectionWrapper paragraphs={[history.imperial_2, history.imperial_3]} />

        <ImageWrapper
          src={odessa_1814}
          alt={alt.odessa_1814}
          caption={caption.odessa_1814}
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[
            history.imperial_4,
            history.imperial_5,
            history.imperial_6,
          ]}
        />

        <SliderHistory slides={odessa_1854} swiperId="odessa_1854" />

        <SectionWrapper
          paragraphs={[
            history.imperial_7,
            history.imperial_8,
            history.imperial_9,
          ]}
        />

        <ImageWrapper
          src={opera_house_1887}
          alt={alt.opera_house_1887}
          caption={caption.opera_house_1887}
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[
            history.imperial_10,
            history.imperial_11,
            history.imperial_12,
          ]}
        />

        <SliderHistory
          slides={odessa_1899}
          swiperId="odessa_1899"
          floatDirection="float-left"
        />

        <SectionWrapper
          paragraphs={[
            history.imperial_13,
            history.imperial_14,
            history.imperial_15,
          ]}
        />

        <ImageWrapper
          src={university_1894}
          alt={alt.university_1894}
          caption={caption.university_1894}
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[
            history.imperial_16,
            history.imperial_17,
            history.imperial_18,
          ]}
        />
      </div>
    </div>
  );
}
