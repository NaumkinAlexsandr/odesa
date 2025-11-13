"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { ISliderHistoryProps } from "@/type/interface";

import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function SliderAuto({ slides }: ISliderHistoryProps) {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-full overflow-hidden rounded-xl">
        <Swiper
          className="h-full"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          effect="fade"
          speed={1500}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full object-cover transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
