import type { Metadata } from "next";
import { historyMetadata } from "@/lib/translations/metadata/historyMetadata";
import History from "./History";
import { Props } from "@/type/interface";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const meta = historyMetadata[currentLang] || historyMetadata.ua;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function HistoryPage() {
  return <History />;
}
