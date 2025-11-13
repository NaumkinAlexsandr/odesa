"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import translate from "@/images/icons/lang/translate.png";
import uaInactive from "@/images/icons/lang/ukraine-white.png";
import uaActive from "@/images/icons/lang/ukraine.png";
import enInactive from "@/images/icons/lang/united-kingdom-white.png";
import enActive from "@/images/icons/lang/united-kingdom.png";
import ruInactive from "@/images/icons/lang/russia-white.png";
import ruActive from "@/images/icons/lang/russia.png";

const flagImages = {
  ua: { inactive: uaInactive, active: uaActive },
  en: { inactive: enInactive, active: enActive },
  ru: { inactive: ruInactive, active: ruActive },
};
const languages = ["ua", "ru", "en"];

interface LangSwitcherProps {
  currentLang: string;
  createLocalizedPath: (targetLang: string) => string;
}

export default function LangSwitcher({
  currentLang,
  createLocalizedPath,
}: LangSwitcherProps) {
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setLangMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <button className="h-8 w-8" onClick={toggleLangMenu}>
        <Image src={translate} alt="translate" />
      </button>
      {isLangMenuOpen && (
        <div className="absolute top-15 flex flex-col">
          {languages.map((lang) => (
            <Link href={createLocalizedPath(lang)} key={lang}>
              <button className="h-8 w-8">
                <Image
                  src={
                    currentLang === lang
                      ? flagImages[lang as "ua" | "en" | "ru"].active
                      : flagImages[lang as "ua" | "en" | "ru"].inactive
                  }
                  alt={`${lang} flag`}
                />
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
