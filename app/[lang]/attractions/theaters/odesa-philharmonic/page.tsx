"use client";
import { useLanguage } from "@/hooks/useLanguage";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import { odesaPhilharmonic } from "@/lib/translations/attractions/theaters/odesa-philharmonic";
import { getPhilharmonicSlides } from "@/lib/translations/attractions/theaters/getPhilharmonicSlides";
import ImageWrapper from "@/components/ui/ImageWrapper";

import philharmonic from "@/public/images/history/imperial/philharmonic.jpg";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function Philharmonic() {
  const { currentLang } = useLanguage();

  const OP = odesaPhilharmonic[currentLang as keyof typeof odesaPhilharmonic];
  const sliderOne = getPhilharmonicSlides(currentLang);
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return (
    <div className="w-full pt-15">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{OP.title}</h1>

        <ImageWrapper
          src={philharmonic}
          alt={alt.philharmonic}
          caption={caption.philharmonic}
        />

        <div className="w-full">
          <Paragraph className={p} text={OP.first} />
          <Paragraph className={p} text={OP.second} />
          <Paragraph className={p} text={OP.third} />
          <Paragraph className={p} text={OP.fourth} />
        </div>

        <SliderHistory
          slides={sliderOne}
          swiperId="first-theatre"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={OP.fifth} />
          <Paragraph className={p} text={OP.sixth} />
          <Paragraph className={p} text={OP.seventh} />
          <Paragraph className={p} text={OP.eighth} />
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
