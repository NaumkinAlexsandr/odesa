"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ImageCaption from "./ImageCaption";
import { IFloatDirection, IImagWrapper } from "@/type/interface";
import { useLanguage } from "@/hooks/useLanguage";

const translations = {
  ua: {
    expand: "читати далі »»»",
    collapse: "« згорнути",
    fullscreen: "На весь екран",
    close: "Закрити",
    reset: "Скинути",
  },
  ru: {
    expand: "читать далее »»»",
    collapse: "« свернуть",
    fullscreen: "На весь экран",
    close: "Закрыть",
    reset: "Сбросить",
  },
  en: {
    expand: "read more »»»",
    collapse: "« show less",
    fullscreen: "Full screen",
    close: "Close",
    reset: "Reset",
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

export default function ImageWrapper({
  src,
  alt,
  caption,
  floatDirection = "float-left",
}: IImagWrapper & IFloatDirection) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const zoomContainerRef = useRef<HTMLDivElement>(null);

  const { currentLang } = useLanguage();
  const lang = (
    currentLang in translations ? currentLang : "ua"
  ) as keyof typeof translations;
  const t = translations[lang];

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Управление горячими клавишами и блокировка скролла body
  useEffect(() => {
    if (!isFullscreen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
        resetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isFullscreen]);

  // Непассивный обработчик зума колесиком мыши (убирает консольные ошибки браузера)
  useEffect(() => {
    const container = zoomContainerRef.current;
    if (!isFullscreen || !container) return;

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = 0.25;
      const delta = e.deltaY < 0 ? 1 + zoomFactor : 1 - zoomFactor;

      setScale((prevScale) => {
        const newScale = Math.min(Math.max(1, prevScale * delta), 6);
        if (newScale === 1) {
          setPosition({ x: 0, y: 0 });
        }
        return newScale;
      });
    };

    container.addEventListener("wheel", handleWheelNative, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheelNative);
    };
  }, [isFullscreen]);

  // Перетаскивание мыши
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Сенсорное перетаскивание (Mobile Touch)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || scale <= 1 || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Двойной клик / тап для масштабирования
  const handleDoubleClick = () => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2.5);
    }
  };

  const responsiveFloat =
    floatDirection === "float-right"
      ? "float-none lg:float-right lg:ml-6 lg:mb-4"
      : "float-none lg:float-left lg:mr-6 lg:mb-4";

  const containerClasses = `relative ${responsiveFloat} my-4 mx-auto w-[300px] sm:w-[400px] md:w-[500px] lg:w-5/12 overflow-hidden p-2`;

  return (
    <>
      <div className={containerClasses}>
        <div className="relative mx-auto max-w-full overflow-hidden rounded-xl">
          <div
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setIsFullscreen(true)}
          >
            <Image
              src={src}
              alt={alt}
              className="h-auto w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
              loading="lazy"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
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

          {caption && <CollapsibleCaption text={caption} />}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-white/10 p-4 backdrop-blur-md select-none"
          onClick={() => {
            setIsFullscreen(false);
            resetZoom();
          }}
        >
          {/* Панель управления */}
          <div
            className="relative z-50 flex w-full max-w-4xl items-center justify-between pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 rounded-lg bg-zinc-300 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setScale((s) => Math.min(s + 0.5, 6))}
                className="text-muted cursor-pointer rounded-md px-2.5 py-1 text-sm font-bold transition-colors hover:bg-white/20"
                title="Zoom In"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => {
                  const newS = Math.max(scale - 0.5, 1);
                  setScale(newS);
                  if (newS === 1) setPosition({ x: 0, y: 0 });
                }}
                className="text-muted cursor-pointer rounded-md px-2.5 py-1 text-sm font-bold transition-colors hover:bg-white/20"
                title="Zoom Out"
              >
                −
              </button>
              {scale > 1 && (
                <button
                  type="button"
                  onClick={resetZoom}
                  className="text-muted cursor-pointer rounded-md border-l border-white/20 px-2.5 py-1 text-xs font-medium transition-colors hover:bg-white/20"
                >
                  {t.reset} ({Math.round(scale * 100)}%)
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setIsFullscreen(false);
                resetZoom();
              }}
              aria-label={t.close}
              className="text-muted cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur-md transition-colors hover:bg-white/20"
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
          </div>

          {/* Область изображения */}
          <div
            ref={zoomContainerRef}
            className="relative flex h-[78vh] w-full max-w-5xl items-center justify-center overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={handleDoubleClick}
            onClick={(e) => e.stopPropagation()}
            style={{
              cursor:
                scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
            }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 0.15s ease-out",
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="pointer-events-none object-contain"
                priority
              />
            </div>
          </div>

          {/* Подпись к изображению */}
          {caption && (
            <div
              className="text-muted relative z-50 mx-auto w-full max-w-3xl pb-2 text-center text-[12px] md:text-[13px] lg:text-[14px]"
              onClick={(e) => e.stopPropagation()}
            >
              {caption}
            </div>
          )}
        </div>
      )}
    </>
  );
}
