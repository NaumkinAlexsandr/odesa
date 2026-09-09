import React from "react";
import SliderAuto from "@/sliders/SliderAuto";
import slide_1 from "@/img/homeSlide/1.webp";
import slide_2 from "@/img/homeSlide/2.webp";
import slide_3 from "@/img/homeSlide/3.webp";
import slide_4 from "@/img/homeSlide/4.webp";
import slide_5 from "@/img/homeSlide/5.webp";

export default function SliderHome() {
  const slides = [
    { src: slide_1, alt: "Slide 1" },
    { src: slide_2, alt: "Slide 2" },
    { src: slide_3, alt: "Slide 3" },
    { src: slide_4, alt: "Slide 4" },
    { src: slide_5, alt: "Slide 5" },
  ];

  return (
    <div className="grid grid-cols-1">
      <SliderAuto slides={slides} swiperId="slides" />
    </div>
  );
}
