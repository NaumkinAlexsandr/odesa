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
      {/* Десктопная версия: заменено lg:w-1/4 на w-full */}
      <div className="hidden lg:block lg:w-full">
        <Sidebar sections={attractionsSections} title={sectionName.title} />
      </div>

      {/* Мобильная версия */}
      <div className="lg:hidden">
        {/* Кнопка открытия: сделали компактнее, чтобы не перекрывать текст */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 left-0 z-30 flex -translate-y-1/2 items-center justify-center rounded-r-xl border border-l-0 border-zinc-200 bg-white/80 p-1.5 shadow-md backdrop-blur-sm transition-transform active:scale-90 dark:border-zinc-800 dark:bg-zinc-900/80"
          aria-label={sectionName.title}
          title={sectionName.title}
        >
          <Image
            src={right}
            alt={sectionName.title || "Next"}
            width={20}
            height={20}
            className="h-5 w-5 object-contain opacity-75"
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
        {/* Выезжающая панель */}
        <div
          className={`fixed top-0 left-0 z-[100] flex h-full w-[280px] flex-col bg-white p-4 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Шапка панели */}
          <div className="mb-3 flex items-center justify-between border-b border-zinc-200 pb-3">
            <span className="text-base font-bold text-zinc-900">
              {sectionName.title}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100"
              aria-label="Закрыть"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

          {/* Контейнер списка со скроллом */}
          <div className="flex-1 overflow-y-auto" onClick={handleNavClick}>
            <Sidebar sections={attractionsSections} title="" />
          </div>
        </div>
      </div>
    </>
  );
}
