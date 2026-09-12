import { Metadata } from "next";
import { newsText } from "@/lib/translations/news/newsText";
import AllNewsClient from "./AllNewsClient";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const text = newsText[currentLang as keyof typeof newsText] || newsText.ua;

  return {
    title: `${text.titlePage} — Пам'ятки Одеси`,
    description: text.titlePage
      ? `${text.titlePage} — Новини та події Одеси`
      : "Останні новини Одеси.",
    openGraph: {
      title: text.titlePage,
      description: `${text.titlePage} — Новини та події Одеси`,
    },
  };
}

export default function Page() {
  return <AllNewsClient />;
}
