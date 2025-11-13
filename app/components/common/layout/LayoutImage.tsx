import React from "react";
import Image, { StaticImageData } from "next/image";
import { IContentTranslation } from "@/type/content";
import { renderContentBlocks } from "@/utils/contentRenderer";

interface ILayoutImageProps {
  image: StaticImageData;
  alt: string;
  translation: IContentTranslation;
}

export default function LayoutImage({
  image,
  alt,
  translation,
}: ILayoutImageProps) {
  const paragraphs = renderContentBlocks(translation);

  return (
    <div className="my-2 w-full">
      <div className="relative mb-6 flex justify-center">
        <Image
          src={image}
          alt={alt}
          className="h-auto w-lg rounded-lg object-cover shadow-md"
          loading="eager"
        />
      </div>

      <div>{paragraphs}</div>
    </div>
  );
}
