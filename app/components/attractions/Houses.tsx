"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import houseWall from "@/img/attractions/houses/wall/houseWall.webp";
import houseFalc from "@/img/attractions/houses/falc/houseFalc.webp";
import palaceVorontsov from "@/img/attractions/houses/vorontsov/palaceVorontsov.webp";
import palaceShah from "@/img/attractions/houses/shah/palaceShah.webp";
import {
  housesTranslations,
  sectionHouses,
} from "@/lib/translations/attractions/houses/houses";

export default function Houses() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const houses = housesTranslations[currentLang] || housesTranslations.ua;
  const titleHouses = sectionHouses[currentLang] || sectionHouses.ua;

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
          address={houses.houseWall.address}
          url={houses.houseWall.urlGPS}
          moreInfo={houses.houseWall.moreInfo}
        />

        <AttractionsCard
          title={houses.houseFalc.title}
          descriptionP1={houses.houseFalc.descriptionP1}
          imageSrc={houseFalc}
          imagePosition="right"
          address={houses.houseFalc.address}
          url={houses.houseFalc.urlGPS}
          moreInfo={houses.houseFalc.moreInfo}
        />

        <AttractionsCard
          title={houses.palaceVorontsov.title}
          descriptionP1={houses.palaceVorontsov.descriptionP1}
          imageSrc={palaceVorontsov}
          imagePosition="left"
          address={houses.palaceVorontsov.address}
          url={houses.palaceVorontsov.urlGPS}
          moreInfo={houses.palaceVorontsov.moreInfo}
        />

        <AttractionsCard
          title={houses.palaceShah.title}
          descriptionP1={houses.palaceShah.descriptionP1}
          imageSrc={palaceShah}
          imagePosition="right"
          address={houses.palaceShah.address}
          url={houses.palaceShah.urlGPS}
          moreInfo={houses.palaceShah.moreInfo}
        />
      </div>
    </div>
  );
}
