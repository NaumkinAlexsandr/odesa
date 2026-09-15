"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ContactAndLinks from "@/ui/ContactAndLinks";

// Импортируем стандартные иконки по умолчанию
import defaultGps from "@/img/icons/сardAttractions/gps.png";
import defaultCall from "@/img/icons/сardAttractions/call.png";
import defaultInfo from "@/img/icons/сardAttractions/information.png";
import defaultWar from "@/img/icons/сardAttractions/war.png";

interface CardProps {
  title: string;
  descriptionP1: string;
  descriptionP2?: string;
  moreInfo?: string;
  urlInfo?: string;
  warInfo?: string;
  warURl?: string;
  address?: string;
  url?: string;
  phoneNumber?: string;
  gps?: StaticImageData;
  call?: StaticImageData;
  info?: StaticImageData;
  war?: StaticImageData;
  imageSrc: StaticImageData;
  imagePosition: "left" | "right";
}

export default function AttractionsCard({
  title,
  descriptionP1,
  descriptionP2,
  moreInfo,
  urlInfo,
  warURl,
  warInfo,
  address,
  url,
  phoneNumber,
  gps,
  call,
  info,
  war,
  imageSrc,
  imagePosition,
}: CardProps) {
  const isImageRight = imagePosition === "right";
  const floatClass = isImageRight
    ? "md:float-right md:ml-4"
    : "md:float-left md:mr-4";

  return (
    <div className="clearfix my-2">
      <div className="bg-card overflow-hidden rounded-lg border border-zinc-300 p-4 shadow-lg">
        <div className={`${floatClass} mb-4 w-full md:w-1/2 lg:w-1/2`}>
          <Image
            src={imageSrc}
            alt={title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="block h-auto w-full rounded-lg object-cover"
          />
        </div>

        <div className="w-full">
          <h2 className={`${h1_georgia} text-foreground mb-2`}>{title}</h2>

          <Paragraph
            className={`${p} text-foreground h-auto`}
            text={descriptionP1}
          />

          {descriptionP2 && (
            <Paragraph
              className={`${p} text-foreground h-auto`}
              text={descriptionP2}
            />
          )}

          <div className="clear-both space-y-1 pt-2">
            {/* Рендерится, если есть адрес */}
            {address && url && (
              <ContactAndLinks
                icon={gps || defaultGps}
                alt="gps"
                linkName={address}
                href={url}
                linkText={address}
                target="_blank"
              />
            )}

            {/* Рендерится, если есть номер телефона */}
            {phoneNumber && (
              <ContactAndLinks
                icon={call || defaultCall}
                alt="call"
                linkName={phoneNumber}
                href={`tel:${phoneNumber}`}
                linkText={phoneNumber}
              />
            )}

            {/* Рендерится, если есть ссылка на подробную информацию */}
            {urlInfo && moreInfo && (
              <ContactAndLinks
                icon={info || defaultInfo}
                alt="info"
                linkName={urlInfo}
                href={urlInfo}
                linkText={moreInfo}
              />
            )}

            {/* Рендерится, если есть информация о разрушениях */}
            {warURl && warInfo && (
              <ContactAndLinks
                icon={war || defaultWar}
                alt="war"
                linkName={warInfo}
                href={warURl}
                linkText={warInfo}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
