import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrow_up from "@/public/images/icons/arrow-up-2.png";

export default function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);

  const SCROLL_THRESHOLD = 300;
  const opacity = `transition-opacity duration-300 hover:opacity-100 focus:ring-gray-500 focus:outline-none`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const size = "h-10 w-10 sm:h-12 sm:w-12";
  const style = `
    ${isVisible ? "opacity-60 visible" : "opacity-0 invisible pointer-events-none"} 
    shadow-2xl cursor-pointer ${opacity}
  `;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Прокрутить страницу наверх"
      className={`${size} ${style} fixed right-2 bottom-2 z-50 rounded-full border border-gray-400 p-1`}
      disabled={!isVisible}
    >
      <Image
        src={arrow_up}
        alt="arrow up"
        className="h-full w-full object-contain"
      />
    </button>
  );
}
