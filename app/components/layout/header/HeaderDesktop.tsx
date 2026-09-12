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
    header[currentLang as keyof typeof header]?.headerBtn || {};

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-2">
        <div className="flex items-center gap-x-6">
          <CardLogo />
          <nav
            className="flex items-center gap-x-2"
            aria-label="Main Navigation"
          >
            {navigationLinks.map((link) => {
              const active = isActive(link.path);
              const label = translatedButtons[link.key] || link.key;

              return (
                <Link
                  key={link.path}
                  href={`${langPrefix}${link.path}`}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-8 items-center p-1.5 text-black transition-colors duration-150 hover:text-zinc-700 ${
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
          </nav>
        </div>

        <div className="flex items-center">
          <LangSwitcher
            currentLang={currentLang}
            createLocalizedPath={createLocalizedPath}
          />
        </div>
      </div>
    </header>
  );
}
