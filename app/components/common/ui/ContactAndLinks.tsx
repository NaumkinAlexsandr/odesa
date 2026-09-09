import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { p } from "@/fonts/fontSize";

interface IContactAndLinksProps {
  icon?: StaticImageData;
  alt?: string;
  href?: string;
  linkName?: string;
  linkText?: string;
  target?: string;
}

export default function ContactAndLinks({
  icon,
  alt,
  href,
  linkName,
  linkText,
  target,
}: IContactAndLinksProps) {
  return (
    <span className={`${p} mt-2 flex items-center`}>
      {icon && alt && <Image src={icon} alt={alt} className="mr-2 h-7 w-7" />}
      {linkName && linkText && (
        <Link target={target} href={`${href}`}>
          {linkText}
        </Link>
      )}
    </span>
  );
}
