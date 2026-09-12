import { Metadata } from "next";
import OdesaOperaHouseClient from "./OdesaOperaHouseClient";
import { odesaOperaHouse } from "@/lib/translations/attractions/theaters/odesa-opera-house";

type Props = {
  params: Promise<{ lang: string }>;
};

// Динамическая генерация метаданных
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const data = odesaOperaHouse[currentLang] || odesaOperaHouse.ua;

  return {
    title: `${data.title} — Пам'ятки Одеси`,
    description: data.first
      ? data.first.slice(0, 160)
      : "Одеський національный академичний театр опери та балету.",
    openGraph: {
      title: data.title,
      description: data.first
        ? data.first.slice(0, 160)
        : "Одеський театр опери та балету",
      images: ["/images/attractions/theatre/opera/old_theatre.jpg"],
    },
  };
}

export default function Page() {
  return <OdesaOperaHouseClient />;
}
