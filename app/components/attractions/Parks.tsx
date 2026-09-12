"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import parkCity from "@/img/attractions/parks/parkCity/parkCity.webp";
import parkShevchenko from "@/img/attractions/parks/parkShevchenko/parkShevchenko.webp";
import {
  parksTranslations,
  sectionParks,
} from "@/lib/translations/attractions/parks/parks";

export default function Parks() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const parks = parksTranslations[currentLang] || parksTranslations.ua;
  const titleParks = sectionParks[currentLang] || sectionParks.ua;

  return (
    <div id="parks" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleParks.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={parks.parkCity.title}
          descriptionP1={parks.parkCity.descriptionP1}
          imageSrc={parkCity}
          imagePosition="left"
          address={parks.parkCity.address}
          url={parks.parkCity.urlGPS}
        />

        <AttractionsCard
          title={parks.parkShevchenko.title}
          descriptionP1={parks.parkShevchenko.descriptionP1}
          descriptionP2={parks.parkShevchenko.descriptionP2}
          imageSrc={parkShevchenko}
          imagePosition="right"
          address={parks.parkShevchenko.address}
          url={parks.parkShevchenko.urlGPS}
        />
      </div>
    </div>
  );
}
