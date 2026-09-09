"use client";
import React from "react";
import Image from "next/image";
import useWeather from "@/hooks/useWeather";
import { useLanguage } from "@/hooks/useLanguage";
import { airQuality } from "@/lib/weather/airQuality";
import { weatherIndicators } from "@/lib/weather/weatherIndicators";
import WeatherCard from "@/components/common/cards/WeatherCard";

import pressure from "@/public/images/weather/weatherIcon/pressure.png";
import humidity from "@/public/images/weather/weatherIcon/humidity.png";
import clouds from "@/public/images/weather/weatherIcon/clouds.png";
import rain from "@/public/images/weather/weatherIcon/rain.png";
import snow from "@/public/images/weather/weatherIcon/snow.png";
import temp from "@/public/images/weather/weatherIcon/temp.png";
import { p } from "@/fonts/fontSize";
import AQI from "../common/cards/AQI";

export default function WeatherDisplay() {
  // Вызов хука и получение данных
  const { data, loading, error } = useWeather();
  const { currentLang } = useLanguage();

  const air = airQuality[currentLang as keyof typeof airQuality];
  const weather =
    weatherIndicators[currentLang as keyof typeof weatherIndicators];

  if (loading) {
    return (
      <div>
        <p className={p}>{air.loading} </p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p className={`${p} text-red-500`}>
          {air.error} **{error}**
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p className={p}>{air.nodata}</p>
        <p className={`${p} text-red-500`}> {air.nodata} </p>
      </div>
    );
  }

  const aqiIndex = data.aqi ? air[data.aqi as keyof typeof air] : "Error";

  const blue = `rounded-4xl border border-blue-500 bg-blue-200 text-blue-500`;
  const green = `rounded-4xl border border-green-500 bg-green-200 text-green-500`;
  const orange = `rounded-4xl border border-orange-500 bg-orange-200 text-orange-500`;
  const red = `rounded-4xl border border-red-500 bg-red-200 text-red-500`;
  const violet = `rounded-4xl border border-fuchsia-500 bg-fuchsia-200 text-fuchsia-500`;
  const purple = `rounded-4xl border border-violet-500 bg-violet-200 text-violet-500`;

  const blueText = `text-blue-500`;
  const greenText = `text-green-500`;
  const orangeText = `text-orange-500`;
  const redText = `text-red-500`;
  const violetText = `text-fuchsia-500`;
  const purpleText = `text-violet-500`;

  const getAqiClass = (aqiValue: number | undefined) => {
    switch (aqiValue) {
      case 1:
        return blue;
      case 2:
        return green;
      case 3:
        return orange;
      case 4:
        return red;
      case 5:
        return violet;
      case 6:
        return purple;
      default:
        return "border border-gray-300 bg-gray-100";
    }
  };

  const getPollutantClass = (pollutant: string, value: number | undefined) => {
    if (value === undefined || value === null) {
      return "text-gray-900";
    }

    switch (pollutant) {
      case "co":
        if (value <= 150) return blueText;
        if (value <= 250) return greenText;
        if (value <= 350) return orangeText;
        if (value <= 450) return redText;
        if (value <= 550) return violetText;
        return purpleText;

      case "nh3":
        if (value <= 20) return blueText;
        if (value <= 50) return greenText;
        if (value <= 100) return orangeText;
        if (value <= 150) return redText;
        if (value <= 250) return violetText;
        return purpleText;

      case "no":
        if (value <= 20) return blueText;
        if (value <= 50) return greenText;
        if (value <= 100) return orangeText;
        if (value <= 150) return redText;
        if (value <= 250) return violetText;
        return purpleText;

      case "no2":
        if (value <= 20) return blueText;
        if (value <= 50) return greenText;
        if (value <= 100) return orangeText;
        if (value <= 150) return redText;
        if (value <= 250) return violetText;
        return purpleText;

      case "o3":
        if (value < 60) return blueText;
        if (value < 100) return greenText;
        if (value < 140) return orangeText;
        if (value < 180) return redText;
        if (value < 240) return violetText;
        return purpleText;

      case "pm2_5":
        if (value < 10) return blueText;
        if (value < 25) return greenText;
        if (value < 50) return orangeText;
        if (value < 75) return redText;
        if (value < 100) return violetText;
        return purpleText;

      case "pm10":
        if (value < 10) return blueText;
        if (value < 25) return greenText;
        if (value < 50) return orangeText;
        if (value < 75) return redText;
        if (value < 100) return violetText;
        return purpleText;

      case "so2":
        if (value <= 20) return blueText;
        if (value <= 50) return greenText;
        if (value <= 100) return orangeText;
        if (value <= 150) return redText;
        if (value <= 250) return violetText;
        return purpleText;

      default:
        return "text-gray-900";
    }
  };

  const aqiClass = getAqiClass(data.aqi);
  return (
    <>
      <div className="flex w-[225px] flex-col gap-3 rounded-lg border border-gray-100 bg-white p-1 text-gray-900 shadow-md">
        {/* Добавил text-gray-900 сюда */}
        <div className="flex flex-col gap-1 rounded-lg border border-gray-200 p-1">
          <div>
            {data.weatherIcon && (
              <Image src={data.weatherIcon} alt="Погодная иконка" />
            )}

            <div
              className={`flex h-[45px] w-full items-center justify-center p-1`}
            >
              <Image
                className="h-[40px] w-[40px]"
                src={temp}
                alt="Погодная иконка"
              />

              <span className="text-[40px] font-extrabold text-gray-900">
                {/* Добавил явный цвет и жирность */}
                {data.temp ? `${Math.round(data.temp)} °C` : "N/A"}
              </span>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-1">
            <WeatherCard
              url={pressure}
              alt="pressure"
              numb={data.pressure}
              unit={weather.unit_2}
              indicator={weather.pressure}
            />

            <WeatherCard
              url={humidity}
              alt="humidity"
              numb={data.humidity}
              unit={weather.unit_3}
              indicator={weather.humidity}
            />

            <WeatherCard
              url={clouds}
              alt="clouds"
              numb={data.clouds}
              unit={weather.unit_3}
              indicator={weather.clouds}
            />

            {data.rain && (
              <WeatherCard
                url={rain}
                alt="rain"
                numb={data.rain}
                unit={weather.unit_4}
                indicator={weather.rain}
              />
            )}

            {data.snow && (
              <WeatherCard
                url={snow}
                alt="snow"
                numb={data.snow}
                unit={weather.unit_4}
                indicator={weather.snow}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-gray-200 p-1">
          <div className="flex justify-around p-1">
            <div
              className={`${aqiClass} flex h-[60px] w-[60px] items-center justify-center shadow-md`}
            >
              <span className="text-3xl text-white">AQI</span>
              {/* Убедимся, что AQI белый/контрастный на цветном фоне */}
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-[14px] text-gray-700">
                {aqiIndex}
              </p>
              {/* Явный цвет */}
              <p className="text-center text-[14px] font-bold text-gray-900">
                {air.quality}
              </p>
              {/* Явный цвет */}
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-1">
            <AQI
              numb={data.co}
              unit={air.unit}
              indicator={air.co}
              icon="CO"
              cardClass={getPollutantClass("co", data.co)}
            />

            <AQI
              numb={data.nh3}
              unit={air.unit}
              indicator={air.nh3}
              icon="NH"
              sub="3"
              cardClass={getPollutantClass("nh3", data.nh3)}
            />

            <AQI
              numb={data.no}
              unit={air.unit}
              indicator={air.no}
              icon="NO"
              sub=""
              cardClass={getPollutantClass("no", data.no)}
            />

            <AQI
              numb={data.no2}
              unit={air.unit}
              indicator={air.no2}
              icon="NO"
              sub="2"
              cardClass={getPollutantClass("no2", data.no2)}
            />

            <AQI
              numb={data.o3}
              unit={air.unit}
              indicator={air.o3}
              icon="O"
              sub="3"
              cardClass={getPollutantClass("o3", data.o3)}
            />

            <AQI
              numb={data.pm2_5}
              unit={air.unit}
              indicator={air.pm2_5}
              icon="PM"
              sub="2.5"
              cardClass={getPollutantClass("pm2_5", data.pm2_5)}
            />

            <AQI
              numb={data.pm10}
              unit={air.unit}
              indicator={air.pm10}
              icon="PM"
              sub="10"
              cardClass={getPollutantClass("pm10", data.pm10)}
            />

            <AQI
              numb={data.so2}
              unit={air.unit}
              indicator={air.so2}
              icon="SO"
              sub="2"
              cardClass={getPollutantClass("so2", data.so2)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
