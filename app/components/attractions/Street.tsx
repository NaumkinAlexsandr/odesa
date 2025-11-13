"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
// import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
// import war from "@/images/icons/сardAttractions/war.png";
import streetDeribasovskaya from "@/images/attractions/streetDeribasovskaya.jpg";
import streetPrimorskiy from "@/images/attractions/streetPrimorskiy.jpg";
import {
  sectionStreets,
  streetsTranslations,
} from "@/lib/translations/attractions/streets";

export default function Street() {
  const { currentLang } = useLanguage();

  const streets =
    streetsTranslations[currentLang as keyof typeof streetsTranslations];

  const titleStreets =
    sectionStreets[currentLang as keyof typeof sectionStreets];

  return (
    <div id="streets" className="scroll-mt-[65px]">
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={streets.streetDeribasovskaya.title}
          descriptionP1={streets.streetDeribasovskaya.descriptionP1}
          descriptionP2={streets.streetDeribasovskaya.descriptionP2}
          imageSrc={streetDeribasovskaya}
          imagePosition="left"
          gps={gps}
          address={streets.streetDeribasovskaya.address}
          url={streets.streetDeribasovskaya.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={streets.streetDeribasovskaya.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={streets.streetDeribasovskaya.warInfo}
        />

        <AttractionsCard
          title={streets.streetPrimorskiy.title}
          descriptionP1={streets.streetPrimorskiy.descriptionP1}
          descriptionP2={streets.streetPrimorskiy.descriptionP2}
          imageSrc={streetPrimorskiy}
          imagePosition="right"
          gps={gps}
          address={streets.streetPrimorskiy.address}
          url={streets.streetPrimorskiy.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={streets.streetPrimorskiy.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={streets.streetPrimorskiy.warInfo}
        />
      </div>
    </div>
  );
}
