import type { Metadata } from "next";
import { destructionMetadata } from "@/lib/translations/metadata/destructionMetadata";
import AllDestruction from "./AllDestruction";
import { Props } from "@/type/interface";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const meta = destructionMetadata[currentLang] || destructionMetadata.ua;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function DestructionPage() {
  return <AllDestruction />;
}
