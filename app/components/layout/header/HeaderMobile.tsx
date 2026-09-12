"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { header } from "@/lib/translations/header/header";
import LangSwitcher from "./LangSwitcher";
import CardLogo from "./CardLogo";
import Greeting from "./Greeting";
import { navigationLinks } from "./navigationLinks";
import menuOpen from "@/img/icons/menu/menuMix.png";
import menuClose from "@/img/icons/menu/menuPoint.png";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang, langPrefix, isActive, createLocalizedPath } =
    useLanguage();

  const translatedButtons =
    header[currentLang as keyof typeof header]?.headerBtn || {};

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div id="mobile" className="relative w-full p-2">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <CardLogo />
        </div>

        <div>
          <Greeting />
        </div>

        <div className="flex flex-row items-center gap-2">
          <LangSwitcher
            currentLang={currentLang}
            createLocalizedPath={createLocalizedPath}
          />

          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Image
              className="h-10 w-10 rotate-180 object-contain"
              src={isMenuOpen ? menuOpen : menuClose}
              alt=""
              priority
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`absolute top-full left-0 z-40 w-full overflow-hidden bg-white shadow-lg transition-all duration-200 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="w-full p-2">
          <div className="flex w-full flex-col p-2">
            {navigationLinks.map((link) => {
              const active = isActive(link.path);
              const label = translatedButtons[link.key] || link.key;

              return (
                <Link
                  key={link.path}
                  href={`${langPrefix}${link.path}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative w-full p-1.5 text-black transition-colors duration-150 hover:text-zinc-700 ${
                    active ? "font-bold text-zinc-800" : ""
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-11/12 -translate-x-1/2 bg-zinc-700" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
