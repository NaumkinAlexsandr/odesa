"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
// import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
// import war from "@/images/icons/сardAttractions/war.png";
import parkCity from "@/images/attractions/parks/parkCity.jpg";
import parkShevchenko from "@/images/attractions/parks/parkShevchenko.jpg";
import {
  parksTranslations,
  sectionParks,
} from "@/lib/translations/attractions/parks/parks";

export default function Parks() {
  const { currentLang } = useLanguage();

  const parks =
    parksTranslations[currentLang as keyof typeof parksTranslations];

  const titleParks = sectionParks[currentLang as keyof typeof sectionParks];

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
          gps={gps}
          address={parks.parkCity.address}
          url={parks.parkCity.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={parks.parkCity.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={parks.parkCity.warInfo}
        />

        <AttractionsCard
          title={parks.parkShevchenko.title}
          descriptionP1={parks.parkShevchenko.descriptionP1}
          descriptionP2={parks.parkShevchenko.descriptionP2}
          imageSrc={parkShevchenko}
          imagePosition="right"
          gps={gps}
          address={parks.parkShevchenko.address}
          url={parks.parkShevchenko.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          // moreInfo={parks.parkShevchenko.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={parks.parkShevchenko.warInfo}
        />
      </div>
    </div>
  );
}
