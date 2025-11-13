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
/*
 <div className="flex w-[105px] flex-col items-center justify-center rounded-md border p-1">
      <Image src={url} alt={alt} width={40} height={40} />
      <span className="mt-1 text-center text-[14px]">
        {numb}
        {` ${unit}`}
      </span>

      <span className="text-center text-[14px] font-bold">{indicator}</span>
    </div>
*/
/*
    <div className="flex flex-row items-center rounded-md border p-1">
      <div>
        <Image src={url} alt={alt} width={40} height={40} />
      </div>
      <div className="ml-1">
        <p className="text-[13px]">
          {numb} {` ${unit}`}
        </p>
        <p className="text-[13px] font-bold">{indicator}</p>
      </div>
    </div>

    */
