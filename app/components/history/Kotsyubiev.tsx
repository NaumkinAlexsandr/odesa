"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SectionWrapper from "@/ui/SectionWrapper";
import ImageWrapper from "@/ui/ImageWrapper";

import kotsyubiev_1415 from "@/public/images/history/kotsyubiev/kotsyubiev_1415.jpg";
import ukrainska_1648 from "@/public/images/history/kotsyubiev/ukrainska_1648.jpg";

export default function Kotsyubiev() {
  const { currentLang } = useLanguage();

  const history = odessaHistory[currentLang as keyof typeof odessaHistory];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return (
    <div className="w-full">
      <h1
        id="kotsyubiev_title_1"
        className="font-caveat mt-3 mb-2 text-center text-[40px] font-bold"
      >
        {history.kotsyubiev_title_1}
      </h1>

      <div className="clearfix">
        <SectionWrapper
          id_h2="kotsyubiev_title_2"
          title={history.kotsyubiev_title_2}
          paragraphs={[history.kotsyubiev_1]}
        />

        <ImageWrapper
          src={ukrainska_1648}
          alt={alt.ukrainska_1648}
          caption={caption.ukrainska_1648}
        />

        <SectionWrapper
          paragraphs={[
            history.kotsyubiev_2,
            history.kotsyubiev_3,
            history.kotsyubiev_4,
          ]}
        />

        <ImageWrapper
          src={kotsyubiev_1415}
          alt={alt.kotsyubiev_1415}
          caption={caption.kotsyubiev_1415}
          floatDirection="float-right"
        />
      </div>
    </div>
  );
}
