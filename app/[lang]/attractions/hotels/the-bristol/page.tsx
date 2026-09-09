"use client";
import { useLanguage } from "@/hooks/useLanguage";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  bristol,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/hotels/bristol";

import one from "@/public/images/attractions/hotels/bristol/bristol.jpg";
import { getBristolSlides } from "@/lib/translations/attractions/hotels/getBristolSlides";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function TheBristol() {
  const { currentLang } = useLanguage();

  const hotelBristol = bristol[currentLang as keyof typeof bristol];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const sliderOne = getBristolSlides(currentLang);

  return (
    <div className="w-full pt-15">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{hotelBristol.title}</h1>

        <ImageWrapper src={one} alt={alt.one} caption={caption.one} />

        <div className="w-full">
          <Paragraph className={p} text={hotelBristol.one} />
          <Paragraph className={p} text={hotelBristol.two} />
          <Paragraph className={p} text={hotelBristol.three} />
          <Paragraph className={p} text={hotelBristol.four} />
        </div>

        <SliderHistory
          slides={sliderOne}
          swiperId="first-theatre"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={hotelBristol.five} />
          <Paragraph className={p} text={hotelBristol.six} />
          <Paragraph className={p} text={hotelBristol.seven} />
          <Paragraph className={p} text={hotelBristol.eight} />
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
