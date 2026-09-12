"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import streetDeribasovskaya from "@/img/attractions/streets/deribasovskaya/streetDeribasovskaya.webp";
import streetPrimorskiy from "@/img/attractions/streets/primorskiy/streetPrimorskiy.webp";
import {
  sectionStreets,
  streetsTranslations,
} from "@/lib/translations/attractions/streets/streets";

export default function Street() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const streets = streetsTranslations[currentLang] || streetsTranslations.ua;

  const titleStreets = sectionStreets[currentLang] || sectionStreets.ua;

  return (
    <div id="streets" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleStreets.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={streets.streetDeribasovskaya.title}
          descriptionP1={streets.streetDeribasovskaya.descriptionP1}
          descriptionP2={streets.streetDeribasovskaya.descriptionP2}
          imageSrc={streetDeribasovskaya}
          imagePosition="left"
          address={streets.streetDeribasovskaya.address}
          url={streets.streetDeribasovskaya.urlGPS}
        />

        <AttractionsCard
          title={streets.streetPrimorskiy.title}
          descriptionP1={streets.streetPrimorskiy.descriptionP1}
          descriptionP2={streets.streetPrimorskiy.descriptionP2}
          imageSrc={streetPrimorskiy}
          imagePosition="right"
          address={streets.streetPrimorskiy.address}
          url={streets.streetPrimorskiy.urlGPS}
        />
      </div>
    </div>
  );
}
