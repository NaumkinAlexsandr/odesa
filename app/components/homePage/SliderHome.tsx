import React from "react";
import SliderAuto from "@/components/common/sliders/SliderAuto";
import slide_1 from "@/public/images/homeSlide/1.png";
import slide_2 from "@/public/images/homeSlide/2.png";
import slide_3 from "@/public/images/homeSlide/3.png";
import slide_4 from "@/public/images/homeSlide/4.png";
import slide_5 from "@/public/images/homeSlide/5.png";

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
