"use client";
import { useLanguage } from "@/hooks/useLanguage";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  moskovskaya,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/hotels/moskovskaya";
import { getMoscowSlides } from "@/lib/translations/attractions/hotels/getMoscowSlides";
import one from "@/public/images/attractions/hotels/moskovskaya/moskovskaya-1.jpg";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function TheGreatMoscow() {
  const { currentLang } = useLanguage();

  const hotelMoscow = moskovskaya[currentLang as keyof typeof moskovskaya];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const sliderOne = getMoscowSlides(currentLang);

  return (
    <div className="w-full pt-15">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{hotelMoscow.title}</h1>

        <ImageWrapper src={one} alt={alt.one} caption={caption.one} />

        <div className="w-full">
          <Paragraph className={p} text={hotelMoscow.one} />
          <Paragraph className={p} text={hotelMoscow.two} />
          <Paragraph className={p} text={hotelMoscow.three} />
          <Paragraph className={p} text={hotelMoscow.four} />
        </div>

        <SliderHistory
          slides={sliderOne}
          swiperId="first-theatre"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={hotelMoscow.five} />
          <Paragraph className={p} text={hotelMoscow.six} />
          <Paragraph className={p} text={hotelMoscow.seven} />
          <Paragraph className={p} text={hotelMoscow.eight} />
          <Paragraph className={p} text={hotelMoscow.nine} />
          <Paragraph className={p} text={hotelMoscow.ten} />
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
