import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { h4_georgia, h3_card } from "@/fonts/fontSize";

interface ICardContentProps {
  id: string;
  isoDate: string;
  layoutType: string;
  title: string;
  displayDate: string;
  urlImg: StaticImageData;
  alt: string;
  langPrefix: string;
  baseSlug: string;
}

export default function ContentCard({
  id,
  title,
  displayDate,
  urlImg,
  alt,
  langPrefix,
  baseSlug,
}: ICardContentProps) {
  const contentHref = `${langPrefix}/${baseSlug}/${id}`;
  return (
    <Link
      href={contentHref}
      passHref
      className="group block h-auto max-w-[310px]"
    >
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
      </div>
    </Link>
  );
}
