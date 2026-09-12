"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageCaption from "@/ui/ImageCaption";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IFloatDirection, ISliderHistoryProps } from "@/type/interface";
import { useLanguage } from "@/hooks/useLanguage";
import left from "@/img/icons/arrow-left-2.png";
import right from "@/img/icons/arrow-right-2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const translations = {
  ua: {
    expand: "читати далі »»»",
    collapse: "« згорнути",
    fullscreen: "На весь екран",
    close: "Закрити",
  },
  ru: {
    expand: "читать далее »»»",
    collapse: "« свернуть",
    fullscreen: "На весь экран",
    close: "Закрыть",
  },
  en: {
    expand: "read more »»»",
    collapse: "« show less",
    fullscreen: "Full screen",
    close: "Close",
  },
};

function CollapsibleCaption({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentLang } = useLanguage();

  const lang = (
    currentLang in translations ? currentLang : "ua"
  ) as keyof typeof translations;
  const t = translations[lang];

  const isLongText = text.length > 70;

  return (
    <div className="mt-1 text-center">
      <div className={!isExpanded && isLongText ? "line-clamp-2" : ""}>
        <ImageCaption captionText={text} />
      </div>
      {isLongText && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-0.5 cursor-pointer text-xs font-semibold opacity-75 transition-opacity hover:underline hover:opacity-100"
        >
          {isExpanded ? t.collapse : t.expand}
        </button>
      )}
    </div>
  );
}

export default function SliderHistory({
  slides,
  floatDirection = "float-left",
}: ISliderHistoryProps & IFloatDirection) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const [modalPrevEl, setModalPrevEl] = useState<HTMLButtonElement | null>(
    null,
  );
  const [modalNextEl, setModalNextEl] = useState<HTMLButtonElement | null>(
    null,
  );

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { currentLang } = useLanguage();
  const lang = (
    currentLang in translations ? currentLang : "ua"
  ) as keyof typeof translations;
  const t = translations[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  const responsiveFloat =
    floatDirection === "float-right"
      ? "float-none lg:float-right lg:ml-6 lg:mb-4"
      : "float-none lg:float-left lg:mr-6 lg:mb-4";

  const containerClasses = `relative ${responsiveFloat} my-4 mx-auto w-[300px] sm:w-[400px] md:w-[500px] lg:w-5/12 overflow-hidden p-2`;
  const navBtnClasses =
    "absolute top-1/2 z-10 -translate-y-1/2 p-1.5 opacity-80 transition-opacity duration-300 hover:opacity-100 disabled:opacity-20 cursor-pointer";

  return (
    <>
      <div className={containerClasses}>
        <div className="relative mx-auto w-[calc(100%-52px)] max-w-full min-w-0 overflow-hidden rounded-xl">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{ prevEl, nextEl }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            resizeObserver={true}
            className="w-full min-w-0 rounded-xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id || index} className="w-full min-w-0">
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsFullscreen(true);
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt || "История Одессы"}
                    width={600}
                    height={400}
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="h-auto w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                      setIsFullscreen(true);
                    }}
                    aria-label={t.fullscreen}
                    title={t.fullscreen}
                    className="absolute top-2 right-2 z-10 cursor-pointer rounded-md bg-black/60 p-1.5 text-white opacity-80 backdrop-blur-sm transition-all hover:bg-black/90 hover:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>
                </div>
                {slide.caption && <CollapsibleCaption text={slide.caption} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Стрелки основного слайдера — делаем темными через brightness-0 для светлого фона страницы */}
        <button
          ref={(node) => setPrevEl(node)}
          type="button"
          aria-label="Предыдущий слайд"
          className={`${navBtnClasses} left-0`}
        >
          <Image
            src={left}
            alt="Previous"
            width={28}
            height={28}
            className="h-7 w-7 object-contain brightness-0"
          />
        </button>

        <button
          ref={(node) => setNextEl(node)}
          type="button"
          aria-label="Следующий слайд"
          className={`${navBtnClasses} right-0`}
        >
          <Image
            src={right}
            alt="Next"
            width={28}
            height={28}
            className="h-7 w-7 object-contain brightness-0"
          />
        </button>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/10 p-4 backdrop-blur-md"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            aria-label={t.close}
            className="text-muted absolute top-4 right-4 z-50 cursor-pointer rounded-full p-2.5 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative flex h-[88vh] w-full max-w-4xl flex-col items-center justify-center px-8 md:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Стрелки модалки — чистый белый цвет поверх тёмно-серого bg-zinc-900/90 */}
            <button
              ref={(node) => setModalPrevEl(node)}
              type="button"
              aria-label="Предыдущий слайд"
              className="absolute top-1/2 left-0 z-20 -translate-y-1/2 cursor-pointer p-2 opacity-80 transition-all hover:scale-110 hover:opacity-100"
            >
              <Image
                src={left}
                alt="Previous"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </button>

            <button
              ref={(node) => setModalNextEl(node)}
              type="button"
              aria-label="Следующий слайд"
              className="absolute top-1/2 right-0 z-20 -translate-y-1/2 cursor-pointer p-2 opacity-80 transition-all hover:scale-110 hover:opacity-100"
            >
              <Image
                src={right}
                alt="Next"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </button>

            <Swiper
              modules={[Navigation, Pagination, A11y]}
              initialSlide={currentIndex}
              navigation={{ prevEl: modalPrevEl, nextEl: modalNextEl }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              className="h-full w-full [&_.swiper-pagination]:bottom-1 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet-active]:bg-white"
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={slide.id || index}
                  className="flex flex-col items-center justify-center pb-8"
                >
                  <div className="relative flex h-[68vh] w-full items-center justify-center">
                    <Image
                      src={slide.src}
                      alt={slide.alt || "Full screen image"}
                      fill
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="object-contain"
                      priority
                    />
                  </div>
                  {slide.caption && (
                    <div className="text-muted mx-auto mt-3 w-full max-w-2xl px-4 text-center text-sm md:text-base">
                      {slide.caption}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
