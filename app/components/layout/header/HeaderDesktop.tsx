"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { header } from "@/lib/translations/header/header";
import LangSwitcher from "./LangSwitcher";
import CardLogo from "./CardLogo";
import { navigationLinks } from "./navigationLinks";

export default function HeaderDesktop() {
  const { currentLang, langPrefix, isActive, createLocalizedPath } =
    useLanguage();

  const translatedButtons =
    header[currentLang as keyof typeof header].headerBtn;

  const desktopLink =
    "relative h-8 w-auto p-1.5 text-black transition-colors duration-150 ease-in-out hover:text-zinc-700";

  const activeDesktopLink = "font-bold text-zinc-800";
  const activeDesktopIndicator =
    "absolute bottom-0 left-1/2 h-0.5 w-11/12 -translate-x-1/2 bg-zinc-700";

  const NavLink = ({ path, label }: { path: string; label: string }) => {
    const active = isActive(path);
    return (
      <Link
        href={`${langPrefix}${path}`}
        className={`${desktopLink} ${active ? activeDesktopLink : ""}`}
      >
        {label}
        {active && <span className={activeDesktopIndicator}></span>}
      </Link>
    );
  };

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-2">
      <div className="flex items-center">
        <CardLogo />
        <nav className="flex gap-x-2">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              path={link.path}
              label={
                translatedButtons[link.key as keyof typeof translatedButtons]
              }
            />
          ))}
        </nav>
      </div>
      <div className="flex items-center">
        <LangSwitcher
          currentLang={currentLang}
          createLocalizedPath={createLocalizedPath}
        />
      </div>
    </div>
  );
}
