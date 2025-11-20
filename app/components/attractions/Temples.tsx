"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
import war from "@/images/icons/сardAttractions/war.png";
import preobrajenskiy from "@/images/attractions/temples/preobrajenskiy/preobrajenskiy.jpg";
import uspenskiy from "@/images/attractions/temples/uspenskiy/uspenskiy.jpg";
import {
  sectionTemples,
  templesTranslations,
} from "@/lib/translations/attractions/temples/temples";

export default function Temples() {
  const { currentLang, langPrefix } = useLanguage();

  const temples =
    templesTranslations[currentLang as keyof typeof templesTranslations];

  const titleTemples =
    sectionTemples[currentLang as keyof typeof sectionTemples];

  return (
    <div id="temples" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleTemples.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={temples.preobrajenskiy.title}
          descriptionP1={temples.preobrajenskiy.descriptionP1}
          descriptionP2={temples.preobrajenskiy.descriptionP2}
          imageSrc={preobrajenskiy}
          imagePosition="left"
          gps={gps}
          address={temples.preobrajenskiy.address}
          call={call}
          phoneNumber={temples.preobrajenskiy.phoneNumber}
          url={temples.preobrajenskiy.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions`}
          // moreInfo={temples.preobrajenskiy.moreInfo}
          war={war}
          warURl={`${langPrefix}/destruction/missile-strike-on-the-transfiguration-cathedral`}
          warInfo={temples.preobrajenskiy.warInfo}
        />

        <AttractionsCard
          title={temples.uspenskiy.title}
          descriptionP1={temples.uspenskiy.descriptionP1}
          descriptionP2={temples.uspenskiy.descriptionP2}
          imageSrc={uspenskiy}
          imagePosition="right"
          gps={gps}
          address={temples.uspenskiy.address}
          call={call}
          phoneNumber={temples.uspenskiy.phoneNumber}
          url={temples.uspenskiy.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={temples.uspenskiy.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/`}
          // warInfo={temples.uspenskiy.warInfo}
        />
      </div>
    </div>
  );
}
