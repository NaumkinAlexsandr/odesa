"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import Sidebar from "@/ui/Sidebar";
import { ISidebarSection } from "@/type/interface";
import { slidebarHistory } from "@/lib/translations/history/slidebarHistory";

export default function SidebarHystory() {
  const { currentLang } = useLanguage();

  const sectionName =
    slidebarHistory[currentLang as keyof typeof slidebarHistory];

  const historySections: ISidebarSection[] = [
    { id: "ancient_title_1", titleSection: sectionName.ancient_title_1 },
    { id: "ancient_title_2", titleSection: sectionName.ancient_title_2 },
    { id: "ancient_title_3", titleSection: sectionName.ancient_title_3 },
    { id: "ancient_title_4", titleSection: sectionName.ancient_title_4 },
    { id: "kotsyubiev_title_2", titleSection: sectionName.kotsyubiev_title_2 },
    { id: "hajibey_title_1", titleSection: sectionName.hajibey_title_1 },
    { id: "imperial_title_1", titleSection: sectionName.imperial_title_1 },
    // { id: "imperial_title_2", titleSection: sectionName.imperial_title_2 },
    { id: "revolution_title_1", titleSection: sectionName.revolution_title_1 },
    { id: "revolution_title_2", titleSection: sectionName.revolution_title_2 },
    { id: "revolution_title_3", titleSection: sectionName.revolution_title_3 },
    {
      id: "worldWarTwo_title_1",
      titleSection: sectionName.worldWarTwo_title_1,
    },
    { id: "ussr_title_1", titleSection: sectionName.ussr_title_1 },
    { id: "modern_ukr_title_1", titleSection: sectionName.modern_ukr_title_1 },
    { id: "modern_ukr_title_2", titleSection: sectionName.modern_ukr_title_2 },
    { id: "modern_ukr_title_3", titleSection: sectionName.modern_ukr_title_3 },
    { id: "modern_ukr_title_4", titleSection: sectionName.modern_ukr_title_4 },
    { id: "modern_ukr_title_5", titleSection: sectionName.modern_ukr_title_5 },
  ];

  return <Sidebar sections={historySections} title={sectionName.title} />;
}
