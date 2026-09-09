"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { useUpcomingEvents } from "@/hooks/useUpcomingEvents";

import EventsCard from "@/cards/EventsCard";
import { h3_georgia, p } from "@/fonts/fontSize";
import { allEvents } from "@/lib/translations/events/allEvents";
import { eventText } from "@/lib/translations/events/eventText";

export default function EventAnnouncement() {
  const { currentLang, langPrefix } = useLanguage();
  const events = allEvents[currentLang as keyof typeof allEvents];
  const text = eventText[currentLang as keyof typeof eventText];

  const upcomingEvents = useUpcomingEvents(events, 3);

  return (
    <div className="flex w-full flex-col p-2">
      <h3 className={`mb-3 ${h3_georgia} `}>{text.titlePage}</h3>
      <div className="flex w-full flex-row items-end gap-2 overflow-x-auto">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <div key={event.id} className="flex-shrink-0">
              <EventsCard
                id={event.id}
                isoDate={event.isoDate}
                displayDate={event.displayDate}
                title={event.title}
                // place={event.place}
                address={event.address}
                priceFrom={event.priceFrom}
                urlImg={event.urlImg}
                alt={event.alt}
                langPrefix={langPrefix}
              />
            </div>
          ))
        ) : (
          <p className={`${p}`}>
            {currentLang === "ua"
              ? "На жаль, наразі немає найближчих подій."
              : currentLang === "ru"
                ? "К сожалению, в настоящее время нет ближайших событий."
                : "Unfortunately, there are no upcoming events at the moment."}
          </p>
        )}
      </div>

      <div className="relative mt-4 pt-3">
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple-600 via-blue-700 to-blue-300"></div>
        <Link
          href={`${langPrefix}/events`}
          className={`${p} font-semibold transition-colors hover:text-blue-600`}
        >
          {text.allEvents}
        </Link>
      </div>
    </div>
  );
}
