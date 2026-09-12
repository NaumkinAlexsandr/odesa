import { Metadata } from "next";
import { articlesAll } from "@/lib/translations/news/articlesAll";
import LayoutSlider from "@/components/layout/sliders/LayoutSlider";
import LayoutImage from "@/components/layout/sliders/LayoutImage";
import { h1_georgia, h4_georgia } from "@/fonts/fontSize";
import { generateSlugs } from "@/utils/generateSlugs";

type Props = {
  params: Promise<{ lang: string; id: string }>;
};

export async function generateStaticParams() {
  return generateSlugs(articlesAll);
}

const notFoundTranslations = {
  ua: "404 | Стаття не знайдена",
  ru: "404 | Статья не найдена",
  en: "404 | Article not found",
};

// Динамическая генерация метаданных для каждой статьи
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { lang, id } = await props.params;
  const langKey = (lang as "ua" | "ru" | "en") || "ua";

  const article = articlesAll.find((a) => a.id === id);

  if (!article) {
    const notFoundText =
      notFoundTranslations[langKey] || notFoundTranslations.ua;
    return {
      title: `${notFoundText} — Пам'ятки Одеси`,
    };
  }

  const translation = article.translations[langKey] || article.translations.ua;
  const title = translation.title;
  const description = translation.paragraphs?.[0]
    ? translation.paragraphs[0].slice(0, 160)
    : `${title} — Новини Одеси`;

  // Безопасно получаем строку URL картинки
  const getImageUrl = (): string | undefined => {
    if (!article.articleImage && !article.urlImg) return undefined;

    // Если это импортированный StaticImageData (объект с .src)
    if (
      typeof article.articleImage === "object" &&
      article.articleImage !== null &&
      "src" in article.articleImage
    ) {
      return article.articleImage.src;
    }

    if (typeof article.articleImage === "string") return article.articleImage;
    if (typeof article.urlImg === "string") return article.urlImg;

    return undefined;
  };

  const imageUrl = getImageUrl();

  return {
    title: `${title} — Пам'ятки Одеси`,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function NewsArticlePage(props: Props) {
  const { lang, id } = await props.params;
  const langKey = (lang as "ua" | "ru" | "en") || "ua";

  const article = articlesAll.find((a) => a.id === id);

  if (!article) {
    const errorMessage =
      notFoundTranslations[langKey] || notFoundTranslations.ua;
    return (
      <div className="mx-auto max-w-[800px] p-4 pt-16 text-center">
        <h1 className="text-2xl font-bold">{errorMessage}</h1>
      </div>
    );
  }

  const translation = article.translations[langKey];
  const pageTitle = translation.title;
  const pageDate = translation.displayDate;

  return (
    <div className="pt-16">
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
