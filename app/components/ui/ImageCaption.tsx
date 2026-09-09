import { img_caption } from "@/fonts/fontSize";
import React from "react";

interface ImageCaptionProps {
  captionText?: string;
}

export default function ImageCaption({ captionText }: ImageCaptionProps) {
  if (!captionText) {
    return null;
  }

  return (
    <div className="m-2 rounded-b-lg text-center">
      <h3 className={`${img_caption}`}>{captionText}</h3>
    </div>
  );
}
