"use client";

import React from "react";
import { useParams } from "next/navigation";
import AttractionsCard from "@/components/common/cards/AttractionsCard";
import passage from "@/img/attractions/hotels/passage/passage-5.webp";
import moskovskaya from "@/img/attractions/hotels/moskovskaya/moskovskaya-1.webp";
import bristol from "@/img/attractions/hotels/bristol/bristol-2.webp";
import {
  hotelTranslations,
  sectionHotels,
} from "@/lib/translations/attractions/hotels/hotels";

export default function Hotels() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const hotels = hotelTranslations[currentLang] || hotelTranslations.ua;
  const titleHotels = sectionHotels[currentLang] || sectionHotels.ua;

  return (
    <div id="hotels" className="scroll-mt-[65px]">
      <h2 className="my-1 text-center text-2xl font-bold">
        {titleHotels.sectionName}
      </h2>
      <div className="flex flex-col space-y-4">
        <AttractionsCard
          title={hotels.passage.title}
          descriptionP1={hotels.passage.descriptionP1}
          imageSrc={passage}
          imagePosition="left"
          address={hotels.passage.address}
          phoneNumber={hotels.passage.phoneNumber}
          url={hotels.passage.urlGPS}
          urlInfo={`/${currentLang}/attractions/hotels/the-passage`}
          moreInfo={hotels.passage.moreInfo}
        />

        <AttractionsCard
          title={hotels.moskovskaya.title}
          descriptionP1={hotels.moskovskaya.descriptionP1}
          imageSrc={moskovskaya}
          imagePosition="right"
          address={hotels.moskovskaya.address}
          url={hotels.moskovskaya.urlGPS}
          urlInfo={`/${currentLang}/attractions/hotels/the-great-moscow`}
          moreInfo={hotels.moskovskaya.moreInfo}
        />

        <AttractionsCard
          title={hotels.bristol.title}
          descriptionP1={hotels.bristol.descriptionP1}
          imageSrc={bristol}
          imagePosition="left"
          address={hotels.bristol.address}
          phoneNumber={hotels.bristol.phoneNumber}
          url={hotels.bristol.urlGPS}
          urlInfo={`/${currentLang}/attractions/hotels/the-bristol`}
          moreInfo={hotels.bristol.moreInfo}
          warURl={`/${currentLang}/destruction/bristol-hotel-strike`}
          warInfo={hotels.bristol.warInfo}
        />
      </div>
    </div>
  );
}
