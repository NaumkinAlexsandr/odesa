import { p, h1_caveat, h2_caveat } from "@/fonts/fontSize";
import React from "react";

interface IHistorySectionProps {
  id_h1?: string;
  id_h2?: string;
  title_h1?: string;
  title?: string;
  paragraphs: string[];
}

export default function SectionWrapper({
  id_h1,
  id_h2,
  title_h1,
  title,
  paragraphs,
}: IHistorySectionProps) {
  return (
    <div className="w-full">
      <h1 id={id_h1} className={`${h1_caveat} my-2 scroll-mt-[65px]`}>
        {title_h1}
      </h1>

      <h2 id={id_h2} className={`${h2_caveat} my-2 scroll-mt-[65px]`}>
        {title}
      </h2>

      {paragraphs.map((text, index) => (
        <p key={index} className={p}>
          <span className="ml-8">{text}</span>
        </p>
      ))}
    </div>
  );
}
