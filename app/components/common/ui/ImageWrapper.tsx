"use client";
import React from "react";
import Image from "next/image";
import ImageCaption from "./ImageCaption";
import { IFloatDirection, IImagWrapper } from "@/type/interface";

export default function ImageWrapper({
  src,
  alt,
  caption,
  floatDirection = "float-left",
}: IImagWrapper & IFloatDirection) {
  const containerClasses = ` ${floatDirection} w-full p-3 md:w-1/2 lg:w-1/3`;

  return (
    <div className={containerClasses}>
      <div className="relative mx-auto max-w-full overflow-visible">
        <Image
          src={src}
          alt={alt}
          className="w-full rounded-xl object-cover"
          loading="lazy"
        />
        <ImageCaption captionText={caption} />
      </div>
    </div>
  );
}
