import { IContentArticle } from "@/type/content";

/**
 * Генерирует статические параметры (slugs) для Next.js App Router
 * для использования с функцией generateStaticParams.
 * * Создает комбинации { lang, id } для каждого элемента в предоставленном массиве.
 * * @param data Массив статей или данных (например, articlesAll, destructionAll).
 * @returns Массив объектов параметров для статической генерации.
 */

export function generateSlugs(data: IContentArticle[]) {
  // Языки, которые вы поддерживаете в роуте [lang]
  const langs = ["ua", "ru", "en"];

  // Создаем массив всех возможных комбинаций {lang, id}
  return data.flatMap((article) =>
    langs.map((lang) => ({
      lang: lang,
      id: article.id,
    })),
  );
}
