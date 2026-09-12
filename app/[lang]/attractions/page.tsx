import type { Metadata } from "next";
import { attractionsMetadata } from "@/lib/translations/metadata/attractionsMetadata";
import Attractions from "./Attractions";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const meta = attractionsMetadata[currentLang] || attractionsMetadata.ua;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function AttractionsPage() {
  return <Attractions />;
}
