import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destructionAll } from "@/lib/translations/destruction/destAll";
import LayoutSlider from "@/components/layout/sliders/LayoutSlider";
import LayoutImage from "@/components/layout/sliders/LayoutImage";
import { h1_georgia, h4_georgia } from "@/fonts/fontSize";
import { generateSlugs } from "@/utils/generateSlugs";

export async function generateStaticParams() {
  return generateSlugs(destructionAll);
}

// 1. Динамические метаданные (меняют название вкладки браузера для каждой статьи)
export async function generateMetadata(props: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await props.params;
  const langKey = (lang || "ua") as "ua" | "ru" | "en";
  const article = destructionAll.find((a) => a.id === id);

  if (!article) {
    return { title: "404" };
  }

  const translation = article.translations[langKey] || article.translations.ua;

  return {
    title: translation.title,
    description: translation.title,
  };
}

// 2. Компонент страницы статьи
export default async function DestructionArticlePage(props: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await props.params;
  const langKey = (lang || "ua") as "ua" | "ru" | "en";

  const article = destructionAll.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const translation = article.translations[langKey] || article.translations.ua;
  const pageTitle = translation.title;
  const pageDate = translation.displayDate;

  return (
    <div className="pt-15">
      <h1 className={`${h1_georgia}`}>{pageTitle}</h1>
      <p className={`${h4_georgia}`}>{pageDate}</p>

      {article.layoutType === "image" && article.articleImage && (
        <LayoutImage
          image={article.articleImage}
          alt={translation.alt}
          translation={translation}
        />
      )}

      {article.layoutType === "sliderLeft" && article.slides && (
        <LayoutSlider
          slides={article.slides}
          swiperId={`news-${id}-slider`}
          floatDirection="float-left"
          translation={translation}
          langKey={langKey}
        />
      )}

      {article.layoutType === "sliderRight" && article.slides && (
        <LayoutSlider
          slides={article.slides}
          swiperId={`news-${id}-slider`}
          floatDirection="float-right"
          translation={translation}
          langKey={langKey}
        />
      )}
    </div>
  );
}
