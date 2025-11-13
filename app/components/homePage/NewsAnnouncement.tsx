"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { IContentArticle } from "@/type/content";

import ContentCard from "@/cards/ContentCard";
import { h3_georgia, p } from "@/fonts/fontSize";
import { newsText } from "@/lib/translations/news/newsText";
import { articlesAll } from "@/lib/translations/news/articlesAll";

export default function NewsAnnouncement() {
  const { currentLang, langPrefix } = useLanguage();
  const articles: IContentArticle[] = articlesAll.slice(0, 3);

  const text = newsText[currentLang as keyof typeof newsText];
  const langKey = currentLang as "ua" | "ru" | "en";

  return (
    <div className="flex w-full flex-col p-2">
      <h3 className={`mb-3 ${h3_georgia} `}>{text.titlePage}</h3>
      <div className="flex w-full flex-row items-end gap-2 overflow-x-auto">
        {articles.map((article) => (
          <div key={article.id} className="flex-shrink-0">
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

      <div className="relative mt-4 pt-3">
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple-600 via-blue-700 to-blue-300"></div>
        <Link
          href={`${langPrefix}/news`}
          className={`${p} font-semibold transition-colors hover:text-blue-600`}
        >
          {text.allNews}
        </Link>
      </div>
    </div>
  );
}
