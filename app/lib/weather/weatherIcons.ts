import sun from "@/img/weather/weatherLogo/sun.webp";
import fewClouds from "@/img/weather/weatherLogo/fewClouds.webp";
import brokenClouds from "@/img/weather/weatherLogo/brokenClouds.webp";
import scatteredClouds from "@/img/weather/weatherLogo/scatteredClouds.webp";
import rain from "@/img/weather/weatherLogo/rain.webp";
import heavyRain from "@/img/weather/weatherLogo/heavyRain.webp";
import thunderstorm from "@/img/weather/weatherLogo/thunderstorm.webp";
import heavyThunderstorm from "@/img/weather/weatherLogo/heavyThunderstorm.webp";
import drizzle from "@/img/weather/weatherLogo/drizzle.webp";
import dust from "@/img/weather/weatherLogo/dust.webp";
import heavySnow from "@/img/weather/weatherLogo/heavySnow.webp";
import rainSnow from "@/img/weather/weatherLogo/rainSnow.webp";
import showerRain from "@/img/weather/weatherLogo/showerRain.webp";
import smoke from "@/img/weather/weatherLogo/smoke.webp";
import snow from "@/img/weather/weatherLogo/snow.webp";
import squalls from "@/img/weather/weatherLogo/squalls.webp";
import tornado from "@/img/weather/weatherLogo/tornado.webp";
import sleetSnow from "@/img/weather/weatherLogo/sleetSnow.webp";
import heavyRainSnow from "@/img/weather/weatherLogo/heavyRainSnow.webp";
import { StaticImageData } from "next/image";

type WeatherIconMap = {
  [key: number]: StaticImageData;
};

export const weatherIcons: WeatherIconMap = {
  200: heavyThunderstorm,
  201: heavyThunderstorm,
  202: heavyThunderstorm,
  210: thunderstorm,
  211: thunderstorm,
  212: thunderstorm,
  221: thunderstorm,
  230: heavyThunderstorm,
  231: heavyThunderstorm,
  232: heavyThunderstorm,
  300: drizzle,
  301: drizzle,
  302: drizzle,
  310: drizzle,
  311: drizzle,
  312: heavyRain,
  313: heavyRain,
  314: heavyRain,
  321: showerRain,
  500: rain,
  501: rain,
  502: heavyRain,
  503: rain,
  504: rain,
  511: rainSnow,
  520: heavyRain,
  521: heavyRain,
  522: showerRain,
  531: showerRain,
  600: snow,
  601: snow,
  602: heavySnow,
  611: sleetSnow,
  612: sleetSnow,
  613: sleetSnow,
  615: rainSnow,
  616: rainSnow,
  620: rainSnow,
  621: heavyRainSnow,
  622: heavyRainSnow,
  701: smoke,
  711: smoke,
  721: smoke,
  731: dust,
  741: smoke,
  751: dust,
  761: dust,
  762: dust,
  771: squalls,
  781: tornado,
  800: sun,
  801: fewClouds,
  802: scatteredClouds,
  803: brokenClouds,
  804: brokenClouds,
};
