"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
// import info from "@/images/icons/сardAttractions/information.png";
// import war from "@/images/icons/сardAttractions/war.png";
import monumentDuke from "@/images/attractions/monuments/duke/monumentDuke.jpg";
import stairsPotemkinskaya from "@/images/attractions/monuments/potemkinskaya/stairsPotemkinskaya.jpg";
import {
  monumentsTranslations,
  sectionMonuments,
} from "@/lib/translations/attractions/monuments/monuments";

export default function Monuments() {
  const { currentLang } = useLanguage();

  const monuments =
    monumentsTranslations[currentLang as keyof typeof monumentsTranslations];

  const titleMonuments =
    sectionMonuments[currentLang as keyof typeof sectionMonuments];

  return (
    <div id="monuments" className="scroll-mt-[65px]">
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={monuments.monumentDuke.title}
          descriptionP1={monuments.monumentDuke.descriptionP1}
          descriptionP2={monuments.monumentDuke.descriptionP2}
          imageSrc={monumentDuke}
          imagePosition="left"
          gps={gps}
          address={monuments.monumentDuke.address}
          url={monuments.monumentDuke.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={monuments.monumentDuke.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={monuments.monumentDuke.warInfo}
        />

        <AttractionsCard
          title={monuments.stairsPotemkinskaya.title}
          descriptionP1={monuments.stairsPotemkinskaya.descriptionP1}
          descriptionP2={monuments.stairsPotemkinskaya.descriptionP2}
          imageSrc={stairsPotemkinskaya}
          imagePosition="right"
          gps={gps}
          address={monuments.stairsPotemkinskaya.address}
          url={monuments.stairsPotemkinskaya.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={monuments.stairsPotemkinskaya.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={monuments.stairsPotemkinskaya.warInfo}
        />
      </div>
    </div>
  );
}
