import { Metadata } from "next";
import PhilharmonicClient from "./PhilharmonicClient";
import { odesaPhilharmonic } from "@/lib/translations/attractions/theaters/odesa-philharmonic";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const data = odesaPhilharmonic[currentLang] || odesaPhilharmonic.ua;

  return {
    title: `${data.title} — Пам'ятки Одеси`,
    description: data.first
      ? data.first.slice(0, 160)
      : "Одеська обласна філармонія ім. Давида Ойстраха.",
    openGraph: {
      title: data.title,
      description: data.first
        ? data.first.slice(0, 160)
        : "Одеська обласна філармонія",
      images: ["/img/history/imperial/philharmonic.webp"],
    },
  };
}

export default function Page() {
  return <PhilharmonicClient />;
}
