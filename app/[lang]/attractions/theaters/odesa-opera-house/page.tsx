"use client";
import { useLanguage } from "@/hooks/useLanguage";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  odesaOperaHouse,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/theaters/odesa-opera-house";
import { getOperaSlides } from "@/lib/translations/attractions/theaters/getOperaSlides";
import secondTheatre from "@/public/images/attractions/theatre/opera/old_theatre.jpg";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function OdesaOperaHouse() {
  const { currentLang } = useLanguage();

  const OOH = odesaOperaHouse[currentLang as keyof typeof odesaOperaHouse];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const { sliderOne, sliderTwo, sliderThree } = getOperaSlides(currentLang);

  return (
    <div className="w-full pt-15">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{OOH.title}</h1>
        <SliderHistory slides={sliderOne} swiperId="first-theatre" />

        <div className="w-full">
          <Paragraph className={p} text={OOH.first} />
          <Paragraph className={p} text={OOH.second} />
          <Paragraph className={p} text={OOH.third} />
        </div>

        <ImageWrapper
          src={secondTheatre}
          alt={alt.old}
          caption={caption.old}
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={OOH.fourth} />
          <Paragraph className={p} text={OOH.fifth} />
          <Paragraph className={p} text={OOH.sixth} />
        </div>

        <SliderHistory slides={sliderTwo} swiperId="new-theatre" />

        <div className="w-full">
          <Paragraph className={p} text={OOH.seventh} />
          <Paragraph className={p} text={OOH.eighth} />
        </div>

        <SliderHistory slides={sliderThree} swiperId="inside-theatre" />

        <div className="w-full">
          <Paragraph className={p} text={OOH.ninth} />
          <Paragraph className={p} text={OOH.tenth} />
          <Paragraph className={p} text={OOH.eleventh} />
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
