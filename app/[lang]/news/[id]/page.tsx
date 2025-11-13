import { articlesAll } from "@/lib/translations/news/articlesAll";
import LayoutSlider from "@/components/common/layout/LayoutSlider";
import LayoutImage from "@/components/common/layout/LayoutImage";
import { h1_georgia, h4_georgia } from "@/fonts/fontSize";
import { generateSlugs } from "@/utils/generateSlugs";

export async function generateStaticParams() {
  return generateSlugs(articlesAll);
}

const notFoundTranslations = {
  ua: "404 | Стаття не знайдена",
  ru: "404 | Статья не найдена",
  en: "404 | Article not found",
};

export default async function NewsArticlePage(props: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await props.params;
  const langKey = lang as "ua" | "ru" | "en";

  const article = articlesAll.find((a) => a.id === id);

  if (!article) {
    const errorMessage = notFoundTranslations[langKey];
    return (
      <div className="mx-auto max-w-[800px] p-4 pt-15 text-center">
        <h1 className="text-2xl font-bold">{errorMessage}</h1>
      </div>
    );
  }

  const translation = article.translations[langKey];
  const pageTitle = translation.title;
  const pageDate = translation.displayDate;

  return (
    <div className="pt-15">
      <h1 className={`${h1_georgia}`}>{pageTitle}</h1>
      <p className={`${h4_georgia}`}>{pageDate}</p>
      {article.layoutType === "image" && article.articleImage ? (
        <LayoutImage
          image={article.articleImage}
          alt={translation.alt}
          translation={translation}
        />
      ) : article.layoutType === "sliderLeft" && article.slides ? (
        <LayoutSlider
          slides={article.slides}
          swiperId={`news-${id}-slider`}
          floatDirection={"float-left"}
          translation={translation}
          langKey={langKey}
        />
      ) : article.layoutType === "sliderRight" && article.slides ? (
        <LayoutSlider
          slides={article.slides}
          swiperId={`news-${id}-slider`}
          floatDirection={"float-right"}
          translation={translation}
          langKey={langKey}
        />
      ) : (
        <div className="w-full"></div>
      )}
    </div>
  );
}
