import { Metadata } from "next";
import BristolClient from "./BristolClient";
import { bristol } from "@/lib/translations/attractions/hotels/bristol";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const data = bristol[currentLang] || bristol.ua;

  return {
    title: `${data.title} — Пам'ятки Одеси`,
    description: data.one
      ? data.one.slice(0, 160)
      : "Історичний готель Бристоль в Одесі.",
    openGraph: {
      title: data.title,
      description: data.one
        ? data.one.slice(0, 160)
        : "Готель Бристоль в Одесі",
      images: ["/images/attractions/hotels/bristol/bristol.jpg"],
    },
  };
}

export default function Page() {
  return <BristolClient />;
}
