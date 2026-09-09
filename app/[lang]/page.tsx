import SliderHome from "@/homePage/SliderHome";
import Exchange from "@/homePage/Exchange";
import WeatherDisplay from "@/homePage/Weather";
import EventAnnouncement from "@/components/homePage/EventAnnouncement";
import NewsAnnouncement from "@/components/homePage/NewsAnnouncement";
import DestructionAnnouncement from "@/components/homePage/DestructionAnnouncement";

export default async function Home() {
  const barCol =
    "p-2 hidden items-center justify-center md:flex md:w-[250px] lg:flex lg:w-[250px] ";

  const announcement = `flex w-full flex-col items-center justify-items-center gap-2`;

  return (
    <div className="flex w-full flex-col gap-y-2 pt-15">
      <SliderHome />

      <div className="flex w-full items-center justify-center gap-2">
        <div className={announcement}>
          <NewsAnnouncement />
          <EventAnnouncement />
        </div>

        <div className={`${barCol}`}>
          <WeatherDisplay />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2 p-2">
        <div className={`${announcement} w-full justify-self-center`}>
          <DestructionAnnouncement />
        </div>

        <div className={`${barCol}`}>
          <Exchange />
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
