"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import ImageCaption from "@/components/common/ui/ImageCaption";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IFloatDirection, ISliderProps } from "@/type/interface";
import { Swiper as SwiperCore } from "swiper/types";
import left from "@/public/images/icons/arrow-left-2.png";
import right from "@/public/images/icons/arrow-right-2.png";
import { IContentSlide, ILangProps } from "@/type/content";

import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function SliderContent({
  slides,
  swiperId,
  floatDirection = "float-left",
  langKey,
}: ISliderProps & IFloatDirection & { langKey: "ua" | "ru" | "en" }) {
  const swiperRef = useRef<SwiperCore | null>(null);

  const prevElId = `#${swiperId}-prev`;
  const nextElId = `#${swiperId}-next`;

  useEffect(() => {
    const swiper = swiperRef.current;

    if (
      swiper &&
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevElId;
      swiper.params.navigation.nextEl = nextElId;

      if (swiper.navigation) {
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [prevElId, nextElId]);

  const containerClasses = `relative ${floatDirection} mx-6 w-[100%] p-2 md:w-1/2 lg:w-1/2`;
  const opacity = `opacity-50 transition-opacity duration-300 hover:opacity-100`;

  return (
    <div className={containerClasses}>
      <div
        className="relative mx-auto overflow-hidden rounded-xl"
        style={{ width: "calc(100% - 60px)" }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            prevEl: prevElId,
            nextEl: nextElId,
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
        >
          {slides.map((slide: IContentSlide, index) => {
            const slideTranslation = slide.translations[langKey] as
              | ILangProps
              | undefined;

            let altText: string = "image";
            if (slideTranslation && slideTranslation.alt) {
              if (typeof slideTranslation.alt === "string") {
                altText = slideTranslation.alt;
              } else if (
                Array.isArray(slideTranslation.alt) &&
                slideTranslation.alt.length > 0
              ) {
                altText = slideTranslation.alt[0];
              }
            }

            let captionText: string | null = null;
            if (slideTranslation && slideTranslation.caption) {
              if (typeof slideTranslation.caption === "string") {
                captionText = slideTranslation.caption;
              } else if (
                Array.isArray(slideTranslation.caption) &&
                slideTranslation.caption.length > 0
              ) {
                captionText = slideTranslation.caption.join(" ");
              }
            }

            if (!captionText) {
              captionText = altText;
            }

            return (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={slide.src}
                    alt={altText}
                    className="w-full object-contain transition-transform duration-500 ease-in-out hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                {captionText && <ImageCaption captionText={captionText} />}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div
        id={swiperId + "-prev"}
        className={`absolute top-1/2 -left-1.5 z-5 -translate-y-1/2 cursor-pointer p-2 ${opacity}`}
      >
        <Image
          src={left}
          alt={"arrow-prev"}
          className="w-[32px] object-cover"
          loading="lazy"
        />
      </div>

      <div
        id={swiperId + "-next"}
        className={`absolute top-1/2 -right-1.5 z-5 -translate-y-1/2 cursor-pointer p-2 ${opacity}`}
      >
        <Image
          src={right}
          alt={"arrow-next"}
          className="w-[32px] object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
