import type { Metadata } from "next";
import AllEvents from "./AllEvents";
import { eventsMetadata } from "@/lib/translations/metadata/eventsMetadata";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const meta = eventsMetadata[currentLang] || eventsMetadata.ua;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function EventsPage() {
  return <AllEvents />;
}
