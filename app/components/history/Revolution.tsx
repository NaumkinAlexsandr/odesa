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

import universal from "@/public/images/history/revolution/universal.jpg";
import panteleimon_1906 from "@/public/images/history/revolution/panteleimon_1906.jpg";

export default function Revolution() {
  const { currentLang } = useLanguage();

  const { french, bolshevik } = AllImageSlide();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return (
    <div className="w-full">
      <div className="clearfix">
        <SectionWrapper
          id_h2="revolution_title_1"
          title={history.revolution_title_1}
          paragraphs={[history.revolution_1]}
        />

        <ImageWrapper
          src={panteleimon_1906}
          alt={alt.panteleimon_1906}
          caption={caption.panteleimon_1906}
        />

        <SectionWrapper
          paragraphs={[
            history.revolution_2,
            history.revolution_3,
            history.revolution_4,
          ]}
        />

        <SectionWrapper
          id_h2="revolution_title_2"
          title={history.revolution_title_2}
          paragraphs={[
            history.revolution_5,
            history.revolution_6,
            history.revolution_7,
          ]}
        />

        <SectionWrapper
          id_h2="revolution_title_3"
          title={history.revolution_title_3}
          paragraphs={[history.revolution_8]}
        />

        <ImageWrapper
          src={universal}
          alt={alt.universal}
          caption={caption.universal}
        />

        <SectionWrapper
          paragraphs={[
            history.revolution_9,
            history.revolution_10,
            history.revolution_11,
          ]}
        />

        <SliderHistory
          slides={french}
          swiperId="french"
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[history.revolution_12, history.revolution_13]}
        />

        <SliderHistory slides={bolshevik} swiperId="bolshevik" />

        <SectionWrapper
          paragraphs={[
            history.revolution_14,
            history.revolution_15,
            history.revolution_16,
          ]}
        />
      </div>
    </div>
  );
}
