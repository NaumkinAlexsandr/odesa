import type { Metadata } from "next";
import { currencyMetadata } from "@/lib/translations/metadata/currencyMetadata";
import AllCurrency from "./AllCurrency";
import { Props } from "@/type/interface";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const meta = currencyMetadata[currentLang] || currencyMetadata.ua;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function CurrencyPage() {
  return <AllCurrency />;
}
