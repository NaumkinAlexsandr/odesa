import { Metadata } from "next";
import GreatMoscowClient from "./GreatMoscowClient";
import { moskovskaya } from "@/lib/translations/attractions/hotels/moskovskaya";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const data = moskovskaya[currentLang] || moskovskaya.ua;

  return {
    title: `${data.title} — Пам'ятки Одеси`,
    description: data.one
      ? data.one.slice(0, 160)
      : "Історичний готель Велика Московська в Одесі.",
    openGraph: {
      title: data.title,
      description: data.one
        ? data.one.slice(0, 160)
        : "Готель Велика Московська в Одесі",
      images: ["/images/attractions/hotels/moskovskaya/moskovskaya-1.jpg"],
    },
  };
}

export default function Page() {
  return <GreatMoscowClient />;
}
