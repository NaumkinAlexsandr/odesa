import type { Metadata } from "next";
import { homeMetadata } from "@/lib/translations/metadata/homeMetadata";
import SliderHome from "@/homePage/SliderHome";
import Exchange from "@/homePage/Exchange";
import WeatherDisplay from "@/homePage/Weather";
import EventAnnouncement from "@/components/homePage/EventAnnouncement";
import NewsAnnouncement from "@/components/homePage/NewsAnnouncement";
import DestructionAnnouncement from "@/components/homePage/DestructionAnnouncement";
import { Props } from "@/type/interface";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang as "ua" | "ru" | "en") || "ua";
  const meta = homeMetadata[currentLang] || homeMetadata.ua;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Home() {
  const barCol =
    "p-2 hidden items-center justify-center md:flex md:w-[250px] shrink-0";
  const announcement = "flex w-full min-w-0 flex-col items-center gap-2";

  return (
    // Заменили pt-15 на pt-16 и добавили overflow-hidden
    <div className="flex w-full max-w-full flex-col gap-y-4 overflow-x-hidden pt-16">
      <SliderHome />

      <div className="flex w-full items-start justify-center gap-2 px-2">
        <div className={announcement}>
          <NewsAnnouncement />
          <EventAnnouncement />
        </div>

        <div className={barCol}>
          <WeatherDisplay />
        </div>
      </div>

      <div className="flex w-full items-start justify-center gap-2 p-2">
        <div className={announcement}>
          <DestructionAnnouncement />
        </div>

        <div className={barCol}>
          <Exchange />
        </div>
      </div>
    </div>
  );
}
