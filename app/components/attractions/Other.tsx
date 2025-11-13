"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
// import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
import war from "@/images/icons/сardAttractions/war.png";
import bridgeMother from "@/images/attractions/bridgeMother.jpg";
import port from "@/images/attractions/port.jpg";
import privoz from "@/images/attractions/privozTwo.jpg";
import catacombs from "@/images/attractions/catacombs.jpg";
import {
  otherTranslations,
  sectionOther,
} from "@/lib/translations/attractions/other";

export default function Other() {
  const { currentLang, langPrefix } = useLanguage();

  const other =
    otherTranslations[currentLang as keyof typeof otherTranslations];

  const titleOther = sectionOther[currentLang as keyof typeof sectionOther];

  return (
    <div id="other" className="scroll-mt-[65px]">
      {/* <h2 className="mt-8 mb-4 text-center text-2xl font-bold">
        {other.bridgeMother.category}
      </h2> */}
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={other.bridgeMother.title}
          descriptionP1={other.bridgeMother.descriptionP1}
          imageSrc={bridgeMother}
          imagePosition="left"
          gps={gps}
          address={other.bridgeMother.address}
          url={other.bridgeMother.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          // moreInfo={other.bridgeMother.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={other.bridgeMother.warInfo}
        />

        <AttractionsCard
          title={other.port.title}
          descriptionP1={other.port.descriptionP1}
          imageSrc={port}
          imagePosition="right"
          gps={gps}
          address={other.port.address}
          url={other.port.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          // moreInfo={other.port.moreInfo}
          war={war}
          warURl={`${langPrefix}/destruction/strike-on-marine-terminal-and-hotel-odesa`}
          warInfo={other.port.warInfo}
        />

        <AttractionsCard
          title={other.privoz.title}
          descriptionP1={other.privoz.descriptionP1}
          imageSrc={privoz}
          imagePosition="left"
          gps={gps}
          address={other.privoz.address}
          url={other.privoz.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          // moreInfo={other.privoz.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={other.privoz.warInfo}
        />

        <AttractionsCard
          title={other.catacombs.title}
          descriptionP1={other.catacombs.descriptionP1}
          descriptionP2={other.catacombs.descriptionP2}
          imageSrc={catacombs}
          imagePosition="right"
          gps={gps}
          address={other.catacombs.address}
          url={other.catacombs.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          // moreInfo={other.catacombs.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={other.catacombs.warInfo}
        />
      </div>
    </div>
  );
}
