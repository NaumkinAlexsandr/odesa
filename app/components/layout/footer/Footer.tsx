"use client";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { copyright } from "@/lib/translations/copyright";
import { useAppStore } from "@/store/app-store-provider";
import Image from "next/image";

export const Footer = () => {
  const lang = useAppStore((state) => state.lang);

  const currentLang =
    lang === "ru" || lang === "en" || lang === "ua" ? lang : "ua";
  const t = copyright[currentLang];
  const portfolio = usePortfolioData();

  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearDisplay =
    currentYear === startYear ? `${startYear}` : `${startYear}–${currentYear}`;

  const handleOpenResume = () => {
    if (portfolio?.resume) {
      window.open(portfolio.resume, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="bg-background border-t py-4">
      <div className="layout-container text-muted text-center">
        <p className="mb-1 text-[11px] font-medium">
          {t.copyrightSymbol} {yearDisplay} {t.reservedText}
        </p>

        <button
          className="mb-1 cursor-pointer transition-transform hover:scale-105"
          onClick={handleOpenResume}
          aria-label="Brand Portfolio"
        >
          <div className="relative mx-auto h-9 w-25">
            <Image
              src="https://raw.githubusercontent.com/NaumkinAlexsandr/resources/main/images/brand/brand-bg.webp"
              alt="NAUM Brand"
              fill
              sizes="100px"
              className="object-contain"
            />
          </div>
        </button>

        <p className="mx-auto max-w-xl text-[10px] leading-relaxed opacity-80">
          {t.info}
        </p>
      </div>
    </footer>
  );
};
