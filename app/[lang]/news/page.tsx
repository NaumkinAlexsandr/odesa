"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { IContentArticle } from "@/type/content";

import { h1_georgia } from "@/fonts/fontSize";
import ContentCard from "@/cards/ContentCard";
import { articlesAll } from "@/lib/translations/news/articlesAll";
import { newsText } from "@/lib/translations/news/newsText";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function AllNews() {
  const { currentLang, langPrefix } = useLanguage();
  const articles: IContentArticle[] = articlesAll as IContentArticle[];

  const text = newsText[currentLang as keyof typeof newsText];
  const langKey = currentLang as "ua" | "ru" | "en";

  return (
    <div className="w-full pt-15">
      <div className="flex w-full flex-col">
        <h1 className={`${h1_georgia} mb-4`}>{text.titlePage}</h1>

        <div className="flex flex-row flex-wrap items-end justify-around gap-4">
          {articles.map((article) => (
            <div key={article.id}>
              <ContentCard
                id={article.id}
                title={article.translations[langKey].title}
                displayDate={article.translations[langKey].displayDate}
                urlImg={article.urlImg}
                alt={article.translations[langKey].title}
                isoDate={article.isoDate}
                layoutType={article.layoutType}
                langPrefix={langPrefix}
                baseSlug="news"
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
