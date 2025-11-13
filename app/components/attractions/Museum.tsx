"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
// import war from "@/images/icons/сardAttractions/war.png";
import museumArt from "@/images/attractions/museumArt.jpg";
import museumWEArt from "@/images/attractions/museumWEArt.jpg";
import museumArchaeological from "@/images/attractions/museumArchaeological.jpg";
import {
  museumsTranslations,
  sectionMuseums,
} from "@/lib/translations/attractions/museums";

export default function Museum() {
  const { currentLang } = useLanguage();

  const museums =
    museumsTranslations[currentLang as keyof typeof museumsTranslations];

  const titleMuseums =
    sectionMuseums[currentLang as keyof typeof sectionMuseums];

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
          gps={gps}
          address={museums.museumArt.address}
          call={call}
          phoneNumber={museums.museumArt.phoneNumber}
          url={museums.museumArt.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={museums.museumArt.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={museums.museumArt.warInfo}
        />

        <AttractionsCard
          title={museums.museumArchaeological.title}
          descriptionP1={museums.museumArchaeological.descriptionP1}
          imageSrc={museumArchaeological}
          imagePosition="left"
          gps={gps}
          address={museums.museumArchaeological.address}
          call={call}
          phoneNumber={museums.museumArchaeological.phoneNumber}
          url={museums.museumArchaeological.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={museums.museumArchaeological.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={museums.museumArchaeological.warInfo}
        />

        <AttractionsCard
          title={museums.museumWEArt.title}
          descriptionP1={museums.museumWEArt.descriptionP1}
          imageSrc={museumWEArt}
          imagePosition="right"
          gps={gps}
          address={museums.museumWEArt.address}
          call={call}
          phoneNumber={museums.museumWEArt.phoneNumber}
          url={museums.museumWEArt.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={museums.museumWEArt.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={museums.museumWEArt.warInfo}
        />
      </div>
    </div>
  );
}
