"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
import war from "@/images/icons/сardAttractions/war.png";
import passage from "@/images/attractions/passage.jpg";
import moskovskaya from "@/images/attractions/moskovskaya.jpg";
import bristol from "@/images/attractions/bristol.jpg";
import {
  hotelTranslations,
  sectionHotels,
} from "@/lib/translations/attractions/hotels";

export default function Hotels() {
  const { currentLang, langPrefix } = useLanguage();

  const hotels =
    hotelTranslations[currentLang as keyof typeof hotelTranslations];

  const titleHotels = sectionHotels[currentLang as keyof typeof sectionHotels];

  return (
    <div id="hotels" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleHotels.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={hotels.passage.title}
          descriptionP1={hotels.passage.descriptionP1}
          // descriptionP2={hotels.passage.descriptionP2}
          imageSrc={passage}
          imagePosition="left"
          gps={gps}
          address={hotels.passage.address}
          call={call}
          phoneNumber={hotels.passage.phoneNumber}
          url={hotels.passage.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          // moreInfo={hotels.passage.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={hotels.passage.warInfo}
        />

        <AttractionsCard
          title={hotels.moskovskaya.title}
          descriptionP1={hotels.moskovskaya.descriptionP1}
          // descriptionP2={hotels.moskovskaya.descriptionP2}
          imageSrc={moskovskaya}
          imagePosition="right"
          gps={gps}
          address={hotels.moskovskaya.address}
          url={hotels.moskovskaya.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          // moreInfo={hotels.moskovskaya.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={hotels.moskovskaya.warInfo}
        />

        <AttractionsCard
          title={hotels.bristol.title}
          descriptionP1={hotels.bristol.descriptionP1}
          // descriptionP2={hotels.bristol.descriptionP2}
          imageSrc={bristol}
          imagePosition="left"
          gps={gps}
          address={hotels.bristol.address}
          call={call}
          phoneNumber={hotels.bristol.phoneNumber}
          url={hotels.bristol.urlGPS}
          // info={info}
          // urlInfo={`${langPrefix}/attractions/theaters/odesa-philharmonic`}
          // moreInfo={hotels.bristol.moreInfo}
          war={war}
          warURl={`${langPrefix}/destruction/bristol-hotel-strike`}
          warInfo={hotels.bristol.warInfo}
        />
      </div>
    </div>
  );
}
