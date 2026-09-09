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

interface ExtendedSliderProps extends Omit<ISliderHistoryProps, "swiperId"> {
  swiperId: string; 
}

export default function SliderAuto({ slides }: ExtendedSliderProps) {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-full overflow-hidden rounded-xl">
        <Swiper
          className="h-full w-full"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
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
              <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-[300px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}