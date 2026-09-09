import sun from "@/public/images/weather/weatherLogo/sun.png";
import fewClouds from "@/public/images/weather/weatherLogo/fewClouds.png";
import brokenClouds from "@/public/images/weather/weatherLogo/brokenClouds.png";
import scatteredClouds from "@/public/images/weather/weatherLogo/scatteredClouds.png";
import rain from "@/public/images/weather/weatherLogo/rain.png";
import heavyRain from "@/public/images/weather/weatherLogo/heavyRain.png";
import thunderstorm from "@/public/images/weather/weatherLogo/thunderstorm.png";
import heavyThunderstorm from "@/public/images/weather/weatherLogo/heavyThunderstorm.png";
import drizzle from "@/public/images/weather/weatherLogo/drizzle.png";
import dust from "@/public/images/weather/weatherLogo/dust.png";
import heavySnow from "@/public/images/weather/weatherLogo/heavySnow.png";
import rainSnow from "@/public/images/weather/weatherLogo/rainSnow.png";
import showerRain from "@/public/images/weather/weatherLogo/showerRain.png";
import smoke from "@/public/images/weather/weatherLogo/smoke.png";
import snow from "@/public/images/weather/weatherLogo/snow.png";
import squalls from "@/public/images/weather/weatherLogo/squalls.png";
import tornado from "@/public/images/weather/weatherLogo/tornado.png";
import sleetSnow from "@/public/images/weather/weatherLogo/sleetSnow.png";
import heavyRainSnow from "@/public/images/weather/weatherLogo/heavyRainSnow.png";
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
