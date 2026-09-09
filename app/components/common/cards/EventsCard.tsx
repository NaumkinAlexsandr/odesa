import React from "react";
import Image, { StaticImageData } from "next/image";
import { h4_georgia, h3_card, p } from "@/fonts/fontSize";

interface ICardEventsProps {
  id: string;
  isoDate: string;
  displayDate: string;
  title: string;
  place?: string;
  address: string;
  priceFrom: string;
  urlImg: StaticImageData;
  alt: string;
  langPrefix?: string;
}

export default function EventsCard({
  id,
  isoDate,
  displayDate,
  title,
  place,
  address,
  priceFrom,
  urlImg,
  alt,
  langPrefix,
}: ICardEventsProps) {
  const newsHref = `${langPrefix}/events/${id}`;

  return (
    <div className="group block h-auto max-w-[310px]">
      {/* <Link href={newsHref} passHref> */}
      <div id={id} className="flex flex-col">
        <h4 className={h4_georgia}>{displayDate}</h4>
        <h3 className={`${h3_card}`}>{title}</h3>
        <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
            src={urlImg}
            alt={alt}
          />
        </div>
        <p className={`${p}`}>{place}</p>
        <p className={`${h4_georgia}`}>{address}</p>
        <p className={`${h4_georgia}`}>{priceFrom}</p>
      </div>
      {/* </Link> */}
    </div>
  );
}
