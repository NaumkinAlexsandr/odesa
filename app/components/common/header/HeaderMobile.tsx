"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { header } from "@/lib/translations/header/header";
import LangSwitcher from "./LangSwitcher";
import CardLogo from "./CardLogo";
import { navigationLinks } from "./navigationLinks";
import menuOpen from "@/public/images/icons/menu/menuMix.png";
import menuClose from "@/public/images/icons/menu/menuPoint.png";
import Greeting from "./Greeting";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang, langPrefix, isActive, createLocalizedPath } =
    useLanguage();

  const translatedButtons =
    header[currentLang as keyof typeof header].headerBtn;

  const mobileLink =
    "relative w-full p-1.5 text-black transition-colors duration-150 ease-in-out hover:text-zinc-700";

  const activeMobileLink = "font-bold text-zinc-800";
  const activeMobileIndicator =
    "absolute bottom-0 left-1/2 h-0.5 w-11/12 -translate-x-1/2 bg-zinc-700";

  const NavLink = ({ path, label }: { path: string; label: string }) => {
    const active = isActive(path);
    return (
      <Link
        href={`${langPrefix}${path}`}
        className={`${mobileLink} ${active ? activeMobileLink : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {label} {active && <span className={activeMobileIndicator}></span>}
      </Link>
    );
  };

  const renderNavLinks = () => (
    <nav className="w-full">
      <div className="flex w-full flex-col p-2">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.path}
            path={link.path}
            label={
              translatedButtons[link.key as keyof typeof translatedButtons]
            }
          />
        ))}
      </div>
    </nav>
  );

  const toggleLangMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div id="mobile" className="relative w-full p-2">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <CardLogo />
        </div>
        <div className="">
          <Greeting />
        </div>

        <div className="flex flex-row items-center">
          <button className="h-10 w-10" onClick={toggleLangMenu}>
            <Image
              className="h-10 w-10 rotate-180"
              src={isMenuOpen ? menuOpen : menuClose}
              alt={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            />
          </button>

          <div
            id="mobile-menu"
            className={`absolute top-full left-0 z-40 w-full overflow-hidden bg-white shadow-lg ${
              isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <div
              className={`${isMenuOpen ? "flex justify-between p-2" : "p-0"}`}
            >
              <div>{renderNavLinks()}</div>
              <div>
                <LangSwitcher
                  currentLang={currentLang}
                  createLocalizedPath={createLocalizedPath}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
