import React from "react";

interface ICardAQIProps {
  numb?: number | string;
  unit?: string;
  indicator: string;
  icon?: string;
  sub?: string;
  cardClass: string;
}

export default function AQI({
  numb,
  unit,
  indicator,
  icon,
  sub,
  cardClass,
}: ICardAQIProps) {
  return (
    <div className="flex w-full flex-row items-center border-t border-gray-200">
      <div className="mx-2">
        <span className={`${cardClass} text-[26px]`}>
          {icon}
          <sub className="text-[16px]">{sub}</sub>
        </span>
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
