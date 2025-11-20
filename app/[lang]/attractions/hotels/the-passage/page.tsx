"use client";
import { useLanguage } from "@/hooks/useLanguage";
import SliderHistory from "@/components/common/sliders/SliderHistory";
import { h1_georgia, p } from "@/fonts/fontSize";
import Paragraph from "@/ui/Paragraph";
import ImageWrapper from "@/ui/ImageWrapper";
import {
  passage,
  imgAlt,
  imgСaption,
} from "@/lib/translations/attractions/hotels/passage";

import six from "@/public/images/attractions/hotels/passage/passage-6.jpg";
import { getPassageSlides } from "@/lib/translations/attractions/hotels/getPassageSlides";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function ThePassage() {
  const { currentLang } = useLanguage();

  const hotelPassage = passage[currentLang as keyof typeof passage];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const sliderOne = getPassageSlides(currentLang);

  return (
    <div className="w-full pt-15">
      <div className="clearfix">
        <h1 className={`${h1_georgia} my-2`}>{hotelPassage.title}</h1>

        <ImageWrapper src={six} alt={alt.six} caption={caption.six} />

        <div className="w-full">
          <Paragraph className={p} text={hotelPassage.one} />
          <Paragraph className={p} text={hotelPassage.two} />
          <Paragraph className={p} text={hotelPassage.three} />
          <Paragraph className={p} text={hotelPassage.four} />
          <Paragraph className={p} text={hotelPassage.five} />
        </div>

        <SliderHistory
          slides={sliderOne}
          swiperId="first-theatre"
          floatDirection="float-right"
        />

        <div className="w-full">
          <Paragraph className={p} text={hotelPassage.six} />
          <Paragraph className={p} text={hotelPassage.seven} />
          <Paragraph className={p} text={hotelPassage.eight} />
          <Paragraph className={p} text={hotelPassage.nine} />
          <Paragraph className={p} text={hotelPassage.ten} />
          <Paragraph className={p} text={hotelPassage.eleven} />
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
