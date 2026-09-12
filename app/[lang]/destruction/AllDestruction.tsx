"use client";

import React from "react";
import { useParams } from "next/navigation";
import { IContentArticle } from "@/type/content";
import { h1_georgia } from "@/fonts/fontSize";
import ContentCard from "@/cards/ContentCard";
import { destructionAll } from "@/lib/translations/destruction/destAll";
import { destText } from "@/lib/translations/destruction/destText";
import ArrowUp from "@/ui/ArrowUp";

export default function AllDestruction() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";
  const langPrefix = `/${currentLang}`;

  const articles: IContentArticle[] = destructionAll;
  const text = destText[currentLang] || destText.ua;

  return (
    <div className="w-full pt-15 pb-10">
      <div className="flex w-full flex-col">
        <h1 className={`${h1_georgia} mb-4`}>{text.titlePage}</h1>

        <div className="flex flex-row flex-wrap items-end justify-around gap-4">
          {articles.map((article) => {
            const translation =
              article.translations[currentLang] || article.translations.ua;

            return (
              <div key={article.id}>
                <ContentCard
                  id={article.id}
                  title={translation.title}
                  displayDate={translation.displayDate}
                  urlImg={article.urlImg}
                  alt={translation.title}
                  isoDate={article.isoDate}
                  layoutType={article.layoutType}
                  langPrefix={langPrefix}
                  baseSlug="destruction"
                />
              </div>
            );
          })}
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
