import React from "react";
import SliderContent from "../sliders/SliderContent";
import { IContentTranslation } from "@/type/content";
import { ISliderProps, IFloatDirection } from "@/type/interface";
import { renderContentBlocks } from "@/utils/contentRenderer";

interface ILayoutSliderProps extends ISliderProps, IFloatDirection {
  translation: IContentTranslation;
  langKey: "ua" | "ru" | "en";
}

export default function LayoutSlider({
  slides,
  swiperId,
  floatDirection,
  translation,
  langKey,
}: ILayoutSliderProps) {
  const contentBlocks = renderContentBlocks(translation);

  return (
    <div className="my-2 w-full">
      <div className="clearfix">
        <SliderContent
          slides={slides}
          swiperId={swiperId}
          floatDirection={floatDirection}
          translation={translation}
          langKey={langKey}
        />
        {contentBlocks}
      </div>
      <div className="clear-both"></div>
    </div>
  );
}
