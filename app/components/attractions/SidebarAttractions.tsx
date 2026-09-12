"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Sidebar from "@/ui/Sidebar";
import { ISidebarSection } from "@/type/interface";

import { slidebarHistory } from "@/lib/translations/history/slidebarHistory";
import { sectionTheaters } from "@/lib/translations/attractions/theaters/theaters";
import { sectionTemples } from "@/lib/translations/attractions/temples/temples";
import { sectionParks } from "@/lib/translations/attractions/parks/parks";
import { sectionHotels } from "@/lib/translations/attractions/hotels/hotels";
import { sectionMuseums } from "@/lib/translations/attractions/museums/museums";
import { sectionLeisures } from "@/lib/translations/attractions/leisure/leisure";
import { sectionHouses } from "@/lib/translations/attractions/houses/houses";
import right from "@/img/icons/arrow-right-2.png";

export default function SidebarAttractions() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const sectionName = slidebarHistory[currentLang] || slidebarHistory.ua;
  const titleTheaters = sectionTheaters[currentLang] || sectionTheaters.ua;
  const titleTemples = sectionTemples[currentLang] || sectionTemples.ua;
  const titleParks = sectionParks[currentLang] || sectionParks.ua;
  const titleHotels = sectionHotels[currentLang] || sectionHotels.ua;
  const titleMuseums = sectionMuseums[currentLang] || sectionMuseums.ua;
  const titleLeisures = sectionLeisures[currentLang] || sectionLeisures.ua;
  const titleHouses = sectionHouses[currentLang] || sectionHouses.ua;

  const attractionsSections: ISidebarSection[] = [
    { id: "theaters", titleSection: titleTheaters.sectionName },
    { id: "hotels", titleSection: titleHotels.sectionName },
    { id: "museums", titleSection: titleMuseums.sectionName },
    { id: "temples", titleSection: titleTemples.sectionName },
    { id: "parks", titleSection: titleParks.sectionName },
    { id: "leisure", titleSection: titleLeisures.sectionName },
    { id: "houses", titleSection: titleHouses.sectionName },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Десктопная версия */}
      <div className="mr-4 hidden lg:block lg:w-1/4">
        <Sidebar sections={attractionsSections} title={sectionName.title} />
      </div>

      {/* Мобильная версия */}
      <div className="lg:hidden">
        {/* Кнопка открытия */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 left-0 z-40 flex -translate-y-1/2 items-center justify-center rounded-r-full border border-l-0 border-zinc-200 bg-white/90 p-2 shadow-lg backdrop-blur-md transition-all hover:bg-white hover:px-3 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:hover:bg-zinc-900"
          aria-label={sectionName.title}
          title={sectionName.title}
        >
          <Image
            src={right}
            alt={sectionName.title || "Next"}
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
        </button>

        {/* Затемнение фона */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Выезжающая панель */}
        <div
          className={`fixed top-0 left-0 z-[100] h-full w-[290px] bg-white p-4 shadow-2xl transition-transform duration-300 ease-in-out dark:bg-zinc-900 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Шапка панели */}
          <div className="mb-3 flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {sectionName.title}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Закрыть"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Растянутый контейнер списка */}
          <div
            className="h-[calc(100vh-80px)] w-full overflow-y-auto [&_nav]:w-full [&_ul]:w-full [&>div]:w-full"
            onClick={handleNavClick}
          >
            <Sidebar sections={attractionsSections} title="" />
          </div>
        </div>
      </div>
    </>
  );
}
