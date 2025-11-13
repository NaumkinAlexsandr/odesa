"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { useUpcomingEvents } from "@/hooks/useUpcomingEvents";
import EventsCard from "@/components/common/cards/EventsCard";
import { h1_georgia, p } from "@/fonts/fontSize";
import { allEvents } from "@/lib/translations/events/allEvents";
import { eventText } from "@/lib/translations/events/eventText";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function AllEvents() {
  const { currentLang, langPrefix } = useLanguage();
  const events = allEvents[currentLang as keyof typeof allEvents];
  const text = eventText[currentLang as keyof typeof eventText];

  const upcomingEvents = useUpcomingEvents(events);

  return (
    <div className="w-full pt-15">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row items-center justify-between">
          <span className={`${p} invisible font-semibold transition-colors`}>
            {text.tickets}
          </span>
          <h1 className={`${h1_georgia} `}>{text.titlePage}</h1>
          <span>
            <Link
              target="_blanck"
              href={`https://concert.ua/uk/odesa`}
              className={`${p} font-semibold transition-colors hover:text-blue-400`}
            >
              {text.tickets}
            </Link>
          </span>
        </div>

        <div className="flex flex-row flex-wrap items-end justify-around gap-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex-shrink-0">
              <EventsCard
                id={event.id}
                isoDate={event.isoDate}
                displayDate={event.displayDate}
                title={event.title}
                place={event.place}
                address={event.address}
                priceFrom={event.priceFrom}
                urlImg={event.urlImg}
                alt={event.alt}
                langPrefix={langPrefix}
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
