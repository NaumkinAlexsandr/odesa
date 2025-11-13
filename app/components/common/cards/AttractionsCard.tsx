import React from "react";
import Image, { StaticImageData } from "next/image";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ContactAndLinks from "../ui/ContactAndLinks";

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
      <div className="overflow-hidden rounded-lg border border-zinc-300 bg-white p-4 shadow-lg">
        <div className={`${floatClass} mb-4 w-full md:w-1/2 lg:w-1/2`}>
          <Image
            src={imageSrc}
            alt={title}
            className="block h-auto w-full rounded-lg object-cover"
          />
        </div>

        <div className="w-full">
          <h1 className={`${h1_georgia} mb-2`}>{title}</h1>

          <Paragraph
            className={`${p} h-auto text-gray-700`}
            text={descriptionP1}
          />

          {descriptionP2 && (
            <Paragraph
              className={`${p} h-auto text-gray-700`}
              text={descriptionP2}
            />
          )}

          <div className="clear-both">
            <ContactAndLinks
              icon={gps}
              alt={"gps"}
              linkName={address}
              href={`${url}`}
              linkText={address}
              target={"_blank"}
            />

            <ContactAndLinks
              icon={call}
              alt={"call"}
              linkName={phoneNumber}
              href={`tel:${phoneNumber}`}
              linkText={phoneNumber}
            />

            <ContactAndLinks
              icon={info}
              alt={"info"}
              linkName={urlInfo}
              href={`${urlInfo}`}
              linkText={moreInfo}
            />

            <ContactAndLinks
              icon={war}
              alt={"war"}
              linkName={warInfo}
              href={`${warURl}`}
              linkText={warInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
