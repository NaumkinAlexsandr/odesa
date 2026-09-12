"use client";

import React from "react";
import { useParams } from "next/navigation";
import { odessaHistory } from "@/lib/translations/history/index";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import SectionWrapper from "@/ui/SectionWrapper";
import ImageWrapper from "@/ui/ImageWrapper";

import kotsyubiev_1415 from "@/img/history/kotsyubiev/kotsyubiev_1415.webp";
import ukrainska_1648 from "@/img/history/kotsyubiev/ukrainska_1648.webp";

export default function Kotsyubiev() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const history = odessaHistory[currentLang] || odessaHistory.ua;
  const caption = imgСaption[currentLang] || imgСaption.ua;
  const alt = imgAlt[currentLang] || imgAlt.ua;

  return (
    <div className="w-full min-w-0 overflow-hidden">
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
          paragraphs={[]}
        />
        <ImageWrapper
          src={kotsyubiev_1415}
          alt={alt.kotsyubiev_1415}
          caption={caption.kotsyubiev_1415}
        />

        <SectionWrapper
          paragraphs={[
            history.kotsyubiev_1,
            history.kotsyubiev_2,
            history.kotsyubiev_3,
            history.kotsyubiev_4,
          ]}
        />

        <ImageWrapper
          src={ukrainska_1648}
          alt={alt.ukrainska_1648}
          caption={caption.ukrainska_1648}
          floatDirection="float-right"
        />
      </div>
    </div>
  );
}
