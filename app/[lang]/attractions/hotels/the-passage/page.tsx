import { Metadata } from "next";
import PassageClient from "./PassageClient";
import { passage } from "@/lib/translations/attractions/hotels/passage";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const data = passage[currentLang] || passage.ua;

  return {
    title: `${data.title} — Пам'ятки Одеси`,
    description: data.one
      ? data.one.slice(0, 160)
      : "Історичний готель та торговый комплекс Пасаж в Одесі.",
    openGraph: {
      title: data.title,
      description: data.one ? data.one.slice(0, 160) : "Готель Пасаж в Одесі",
      images: ["/images/attractions/hotels/passage/passage-6.jpg"],
    },
  };
}

export default function Page() {
  return <PassageClient />;
}
