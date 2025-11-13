"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import gps from "@/images/icons/сardAttractions/gps.png";
// import call from "@/images/icons/сardAttractions/call.png";
// import info from "@/images/icons/сardAttractions/information.png";
// import war from "@/images/icons/сardAttractions/war.png";
import houseWall from "@/images/attractions/houseWall.jpg";
import houseFalc from "@/images/attractions/houseFalc.jpg";
import palaceVorontsov from "@/images/attractions/palaceVorontsov.jpg";
import palaceShah from "@/images/attractions/palaceShah.jpg";
import {
  housesTranslations,
  sectionHouses,
} from "@/lib/translations/attractions/houses";

export default function Houses() {
  const { currentLang } = useLanguage();

  const houses =
    housesTranslations[currentLang as keyof typeof housesTranslations];

  const titleHouses = sectionHouses[currentLang as keyof typeof sectionHouses];

  return (
    <div id="houses" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleHouses.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={houses.houseWall.title}
          descriptionP1={houses.houseWall.descriptionP1}
          imageSrc={houseWall}
          imagePosition="left"
          gps={gps}
          address={houses.houseWall.address}
          url={houses.houseWall.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          moreInfo={houses.houseWall.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={houses.houseWall.warInfo}
        />

        <AttractionsCard
          title={houses.houseFalc.title}
          descriptionP1={houses.houseFalc.descriptionP1}
          imageSrc={houseFalc}
          imagePosition="right"
          gps={gps}
          address={houses.houseFalc.address}
          url={houses.houseFalc.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          moreInfo={houses.houseFalc.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={houses.houseFalc.warInfo}
        />

        <AttractionsCard
          title={houses.palaceVorontsov.title}
          descriptionP1={houses.palaceVorontsov.descriptionP1}
          imageSrc={palaceVorontsov}
          imagePosition="left"
          gps={gps}
          address={houses.palaceVorontsov.address}
          url={houses.palaceVorontsov.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          moreInfo={houses.palaceVorontsov.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={houses.palaceVorontsov.warInfo}
        />

        <AttractionsCard
          title={houses.palaceShah.title}
          descriptionP1={houses.palaceShah.descriptionP1}
          imageSrc={palaceShah}
          imagePosition="right"
          gps={gps}
          address={houses.palaceShah.address}
          url={houses.palaceShah.urlGPS}
          // urlInfo={`${langPrefix}/history`}
          moreInfo={houses.palaceShah.moreInfo}
          // war={war}
          // warURl={`${langPrefix}/destruction/philharmonic-hall-strike`}
          // warInfo={houses.palaceShah.warInfo}
        />
      </div>
    </div>
  );
}
