"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
import call from "@/images/icons/сardAttractions/call.png";
import info from "@/images/icons/сardAttractions/information.png";
import war from "@/images/icons/сardAttractions/war.png";
import opera from "@/images/attractions/opera.jpg";
import philharmonic from "@/images/attractions/philharmonic.jpg";
import {
  theatersTranslations,
  sectionTheaters,
} from "@/lib/translations/attractions/theaters";

export default function Theaters() {
  const { currentLang, langPrefix } = useLanguage();

  const theaters =
    theatersTranslations[currentLang as keyof typeof theatersTranslations];

  const titleTheaters =
    sectionTheaters[currentLang as keyof typeof sectionTheaters];

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
          gps={gps}
          address={theaters.opera.address}
          call={call}
          phoneNumber={theaters.opera.phoneNumber}
          url={theaters.opera.urlGPS}
          info={info}
          urlInfo={`${langPrefix}/attractions/theaters/odesa-opera-house`}
          moreInfo={theaters.opera.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={theaters.opera.warInfo}
        />

        <AttractionsCard
          title={theaters.philharmonic.title}
          descriptionP1={theaters.philharmonic.descriptionP1}
          imageSrc={philharmonic}
          imagePosition="right"
          gps={gps}
          address={theaters.philharmonic.address}
          call={call}
          phoneNumber={theaters.philharmonic.phoneNumber}
          url={theaters.philharmonic.urlGPS}
          info={info}
          urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          moreInfo={theaters.philharmonic.moreInfo}
          war={war}
          warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          warInfo={theaters.philharmonic.warInfo}
        />
      </div>
    </div>
  );
}
