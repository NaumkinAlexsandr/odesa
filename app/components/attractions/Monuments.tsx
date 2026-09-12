"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/common/cards/AttractionsCard";
import nemo from "@/img/attractions/leisure/nemo/nemo.webp";
import arkadia from "@/img/attractions/leisure/arkadia/arkadiaTwo.webp";
import {
  leisuresTranslations,
  sectionLeisures,
} from "@/lib/translations/attractions/leisure/leisure";

export default function Leisure() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const leisures = leisuresTranslations[currentLang] || leisuresTranslations.ua;
  const titleLeisures = sectionLeisures[currentLang] || sectionLeisures.ua;

  return (
    <div id="leisure" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleLeisures.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={leisures.nemo.title}
          descriptionP1={leisures.nemo.descriptionP1}
          descriptionP2={leisures.nemo.descriptionP2}
          imageSrc={nemo}
          imagePosition="left"
          address={leisures.nemo.address}
          phoneNumber={leisures.nemo.phoneNumber}
          url={leisures.nemo.urlGPS}
        />

        <AttractionsCard
          title={leisures.arkadia.title}
          descriptionP1={leisures.arkadia.descriptionP1}
          imageSrc={arkadia}
          imagePosition="right"
          address={leisures.arkadia.address}
          url={leisures.arkadia.urlGPS}
        />
      </div>
    </div>
  );
}
