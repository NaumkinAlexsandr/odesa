import React from "react";
import Image, { StaticImageData } from "next/image";

interface ICardWeatherProps {
  url: StaticImageData;
  alt: string;
  numb?: number | string;
  unit?: string;
  indicator: string;
}

export default function WeatherCard({
  url,
  alt,
  numb,
  unit,
  indicator,
}: ICardWeatherProps) {
  return (
    <div className="flex w-full flex-row items-center border-t border-gray-200">
      <div className="mx-2">
        <Image src={url} alt={alt} width={40} height={40} />
      </div>
      <div>
        <p className="text-[13px]">
          {numb} {` ${unit}`}
        </p>
        <p className="text-[13px] font-bold">{indicator}</p>
      </div>
    </div>
  );
}
