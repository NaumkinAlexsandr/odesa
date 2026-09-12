"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/common/cards/AttractionsCard";
import museumArt from "@/img/attractions/museums/museumArt/museumArt.webp";
import museumWEArt from "@/img/attractions/museums/museumWEArt/museumWEArt.webp";
import museumArchaeological from "@/img/attractions/museums/museumArchaeological/museumArchaeological.webp";
import {
  museumsTranslations,
  sectionMuseums,
} from "@/lib/translations/attractions/museums/museums";

export default function Museum() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const museums = museumsTranslations[currentLang] || museumsTranslations.ua;
  const titleMuseums = sectionMuseums[currentLang] || sectionMuseums.ua;

  return (
    <div id="museums" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleMuseums.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={museums.museumArt.title}
          descriptionP1={museums.museumArt.descriptionP1}
          imageSrc={museumArt}
          imagePosition="right"
          address={museums.museumArt.address}
          phoneNumber={museums.museumArt.phoneNumber}
          url={museums.museumArt.urlGPS}
        />

        <AttractionsCard
          title={museums.museumArchaeological.title}
          descriptionP1={museums.museumArchaeological.descriptionP1}
          imageSrc={museumArchaeological}
          imagePosition="left"
          address={museums.museumArchaeological.address}
          phoneNumber={museums.museumArchaeological.phoneNumber}
          url={museums.museumArchaeological.urlGPS}
        />

        <AttractionsCard
          title={museums.museumWEArt.title}
          descriptionP1={museums.museumWEArt.descriptionP1}
          imageSrc={museumWEArt}
          imagePosition="right"
          address={museums.museumWEArt.address}
          phoneNumber={museums.museumWEArt.phoneNumber}
          url={museums.museumWEArt.urlGPS}
        />
      </div>
    </div>
  );
}
