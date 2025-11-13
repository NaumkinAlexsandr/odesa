"use client";
import React from "react";
import Sidebar from "@/ui/Sidebar";
import { ISidebarSection } from "@/type/interface";
import { useLanguage } from "@/hooks/useLanguage";

import { slidebarHistory } from "@/lib/translations/history/slidebarHistory";
import { sectionTheaters } from "@/lib/translations/attractions/theaters";
import { sectionTemples } from "@/lib/translations/attractions/temples";
import { sectionParks } from "@/lib/translations/attractions/parks";
import { sectionHotels } from "@/lib/translations/attractions/hotels";
import { sectionMuseums } from "@/lib/translations/attractions/museums";
import { sectionLeisures } from "@/lib/translations/attractions/leisure";
import { sectionHouses } from "@/lib/translations/attractions/houses";

export default function SidebarAttractions() {
  const { currentLang } = useLanguage();

  const sectionName =
    slidebarHistory[currentLang as keyof typeof slidebarHistory];
  const titleTheaters =
    sectionTheaters[currentLang as keyof typeof sectionTheaters];
  const titleTemples =
    sectionTemples[currentLang as keyof typeof sectionTemples];
  const titleParks = sectionParks[currentLang as keyof typeof sectionParks];
  const titleHotels = sectionHotels[currentLang as keyof typeof sectionHotels];
  const titleMuseums =
    sectionMuseums[currentLang as keyof typeof sectionMuseums];
  const titleLeisures =
    sectionLeisures[currentLang as keyof typeof sectionLeisures];
  const titleHouses = sectionHouses[currentLang as keyof typeof sectionHouses];

  const historySections: ISidebarSection[] = [
    { id: "theaters", titleSection: titleTheaters.sectionName },
    { id: "hotels", titleSection: titleHotels.sectionName },
    { id: "museums", titleSection: titleMuseums.sectionName },
    { id: "temples", titleSection: titleTemples.sectionName },
    { id: "parks", titleSection: titleParks.sectionName },
    { id: "leisure", titleSection: titleLeisures.sectionName },
    { id: "houses", titleSection: titleHouses.sectionName },
  ];

  return <Sidebar sections={historySections} title={sectionName.title} />;
}
