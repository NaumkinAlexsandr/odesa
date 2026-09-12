"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import opera from "@/img/attractions/theatre/opera/opera.webp";
import philharmonic from "@/img/attractions/theatre/philharmonic/philharmonic_one.webp";
import {
  sectionTheaters,
  theatersTranslations,
} from "@/lib/translations/attractions/theaters/theaters";

export default function Theaters() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const theaters = theatersTranslations[currentLang] || theatersTranslations.ua;
  const titleTheaters = sectionTheaters[currentLang] || sectionTheaters.ua;

  return (
    <div id="theaters" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleTheaters.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={theaters.opera.title}
          descriptionP1={theaters.opera.descriptionP1}
          descriptionP2={theaters.opera.descriptionP2}
          imageSrc={opera}
          imagePosition="left"
          address={theaters.opera.address}
          phoneNumber={theaters.opera.phoneNumber}
          url={theaters.opera.urlGPS}
          urlInfo={`/${currentLang}/attractions/theaters/odesa-opera-house`}
          moreInfo={theaters.opera.moreInfo}
        />

        <AttractionsCard
          title={theaters.philharmonic.title}
          descriptionP1={theaters.philharmonic.descriptionP1}
          imageSrc={philharmonic}
          imagePosition="right"
          address={theaters.philharmonic.address}
          phoneNumber={theaters.philharmonic.phoneNumber}
          url={theaters.philharmonic.urlGPS}
          urlInfo={`/${currentLang}/attractions/theaters/odesa-philharmonic`}
          moreInfo={theaters.philharmonic.moreInfo}
          warURl={`/${currentLang}/destruction/philharmonic-hall-strike`}
          warInfo={theaters.philharmonic.warInfo}
        />
      </div>
    </div>
  );
}
