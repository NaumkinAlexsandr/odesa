"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
// import war from "@/images/icons/сardAttractions/war.png";
import nemo from "@/images/attractions/nemo.jpeg";
import arkadia from "@/images/attractions/arkadiaTwo.jpg";
import {
  leisuresTranslations,
  sectionLeisures,
} from "@/lib/translations/attractions/leisure";

export default function Leisure() {
  const { currentLang } = useLanguage();

  const leisures =
    leisuresTranslations[currentLang as keyof typeof leisuresTranslations];

  const titleLeisures =
    sectionLeisures[currentLang as keyof typeof sectionLeisures];

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
          gps={gps}
          address={leisures.nemo.address}
          call={call}
          phoneNumber={leisures.nemo.phoneNumber}
          url={leisures.nemo.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={leisures.nemo.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={leisures.nemo.warInfo}
        />

        <AttractionsCard
          title={leisures.arkadia.title}
          descriptionP1={leisures.arkadia.descriptionP1}
          imageSrc={arkadia}
          imagePosition="right"
          gps={gps}
          address={leisures.arkadia.address}
          url={leisures.arkadia.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={leisures.arkadia.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={leisures.arkadia.warInfo}
        />
      </div>
    </div>
  );
}
