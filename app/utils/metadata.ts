import type { Metadata } from "next";

interface ITranslationEntry {
  title: string;
  description: string;
}

export type TranslationMap = Record<string, ITranslationEntry>;

/**
 * Создает функцию generateMetadata для Next.js, которая автоматически обрабатывает локализацию
 * и обеспечивает безопасный резервный вариант.
 * @param translations - Объект с переводами для конкретной страницы.
 * @param defaultLang - Язык, который будет использоваться, если params.lang не совпадает.
 * @returns Готовая к экспорту асинхронная функция generateMetadata.
 */

export function createMetadataGenerator(
  translations: TranslationMap,
  defaultLang: string = "ua",
) {
  type LangKey = keyof typeof translations;
  const allowedLangs = Object.keys(translations);

  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ lang: string }>;
  }): Promise<Metadata> {
    const { lang } = await params;

    const currentLang = allowedLangs.includes(lang as LangKey)
      ? (lang as LangKey)
      : "ua";

    const current = translations[currentLang] as ITranslationEntry;

    return {
      title: {
        default: current.title,
        template: `%s | ${current.title}`,
      },
      description: current.description,
    };
  };
}
