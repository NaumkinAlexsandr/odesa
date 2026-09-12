"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import bridgeMother from "@/img/attractions/other/bridgeMother/bridgeMother.webp";
import port from "@/img/attractions/other/port/port.webp";
import privoz from "@/img/attractions/other/privoz/privozTwo.webp";
import catacombs from "@/img/attractions/other/catacombs/catacombs.webp";
import {
  otherTranslations,
  sectionOther,
} from "@/lib/translations/attractions/other/other";

export default function Other() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const other = otherTranslations[currentLang] || otherTranslations.ua;
  const titleOther = sectionOther[currentLang] || sectionOther.ua;

  return (
    <div id="other" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleOther.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={other.bridgeMother.title}
          descriptionP1={other.bridgeMother.descriptionP1}
          imageSrc={bridgeMother}
          imagePosition="left"
          address={other.bridgeMother.address}
          url={other.bridgeMother.urlGPS}
        />

        <AttractionsCard
          title={other.port.title}
          descriptionP1={other.port.descriptionP1}
          imageSrc={port}
          imagePosition="right"
          address={other.port.address}
          url={other.port.urlGPS}
          warURl={`/${currentLang}/destruction/strike-on-marine-terminal-and-hotel-odesa`}
          warInfo={other.port.warInfo}
        />

        <AttractionsCard
          title={other.privoz.title}
          descriptionP1={other.privoz.descriptionP1}
          imageSrc={privoz}
          imagePosition="left"
          address={other.privoz.address}
          url={other.privoz.urlGPS}
        />

        <AttractionsCard
          title={other.catacombs.title}
          descriptionP1={other.catacombs.descriptionP1}
          descriptionP2={other.catacombs.descriptionP2}
          imageSrc={catacombs}
          imagePosition="right"
          address={other.catacombs.address}
          url={other.catacombs.urlGPS}
        />
      </div>
    </div>
  );
}
