import type { Metadata } from "next";
import { createMetadataGenerator, TranslationMap } from "@/utils/metadata";

const translations: TranslationMap = {
  ua: {
    title: "Події міста",
    description: "Афіша подій, анонси та квитки на культурні заходи міста.",
  },
  ru: {
    title: "События города",
    description:
      "Афиша событий, анонсы и билеты на культурные мероприятия города.",
  },
  en: {
    title: "City Events",
    description:
      "Event listings, announcements, and tickets for cultural activities in the city.",
  },
};

export const generateMetadata = createMetadataGenerator(translations);

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
