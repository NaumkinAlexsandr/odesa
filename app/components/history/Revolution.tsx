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

import universal from "@/img/history/revolution/universal.webp";
import panteleimon_1906 from "@/img/history/revolution/panteleimon_1906.webp";

export default function Revolution() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const history = odessaHistory[currentLang] || odessaHistory.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;

  const { french, bolshevik } = useAllImageSlides();

  return (
    <div className="w-full min-w-0 overflow-hidden">
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
          paragraphs={[]}
        />

        <ImageWrapper
          src={universal}
          alt={alt.universal}
          caption={caption.universal}
        />

        <SectionWrapper
          paragraphs={[
            history.revolution_8,
            history.revolution_9,
            history.revolution_10,
            history.revolution_11,
            history.revolution_12,
          ]}
        />

        <SliderHistory
          slides={french}
          swiperId="french"
          floatDirection="float-right"
        />

        <SectionWrapper
          paragraphs={[
            history.revolution_13,
            history.revolution_14,
            history.revolution_15,
          ]}
        />

        <SliderHistory slides={bolshevik} swiperId="bolshevik" />

        <SectionWrapper paragraphs={[history.revolution_16]} />
      </div>
    </div>
  );
}
