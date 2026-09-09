"use client";
import { weatherIcons } from "@/lib/weather/weatherIcons";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

const API_Key = "cdfaba94122082bb2e215c5851761c88";
const CITY_NAME = "Odessa";

interface ICityData {
  lat: number;
  lon: number;
}

interface IWeatherData {
  temp: number | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
  weather: string | undefined;
  weatherIcon: string | StaticImageData | undefined;
  snow: number | undefined;
  clouds: number | undefined;
  rain: number | undefined;
  co: number | undefined;
  nh3: number | undefined;
  no: number | undefined;
  no2: number | undefined;
  o3: number | undefined;
  pm2_5: number | undefined;
  pm10: number | undefined;
  so2: number | undefined;
  aqi: number | undefined;
  dt: number | undefined;
  lat: number | undefined;
  lon: number | undefined;
}

const handleFetchResponse = async (
  response: Response,
  errorMessage: string,
) => {
  if (!response.ok) {
    throw new Error(`${errorMessage} Сетевая ошибка: ${response.status}`);
  }
  return response.json();
};

export default function useWeather() {
  const [data, setData] = useState<IWeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=1&appid=${API_Key}`;
        const geoResponse = await fetch(geoApi);
        const geoData = await handleFetchResponse(
          geoResponse,
          "Error while receiving city coordinates.",
        );

        if (!geoData || geoData.length === 0) {
          throw new Error(`Coordinates for ${CITY_NAME} not found.`);
        }

        const cityData: ICityData = geoData[0];
        const { lat, lon } = cityData;

        const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
        const weatherResponse = await fetch(weatherApi);
        const weatherData = await handleFetchResponse(
          weatherResponse,
          "Error while receiving main weather data.",
        );

        const airQualityApi = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}`;
        const airQualityResponse = await fetch(airQualityApi);
        const airQualityData = await handleFetchResponse(
          airQualityResponse,
          "Error while receiving air quality data.",
        );

        const airPollution = airQualityData.list[0].components;
        const aqi = airQualityData.list[0].main.aqi;

        const rainVolume = weatherData.rain?.["1h"];
        const snowVolume = weatherData.snow?.["1h"];

        const finalData: IWeatherData = {
          temp: weatherData.main.temp,
          pressure: weatherData.main.pressure,
          humidity: weatherData.main.humidity,
          // weatherIcon: weatherData.weather[0].icon,
          clouds: weatherData.clouds.all,
          snow: snowVolume,
          rain: rainVolume,
          lat: lat,
          lon: lon,
          weather: weatherData.weather[0].description,
          weatherIcon:
            weatherIcons[weatherData.weather[0].id] || weatherIcons[800],
          co: airPollution.co,
          nh3: airPollution.nh3,
          no: airPollution.no,
          no2: airPollution.no2,
          o3: airPollution.o3,
          pm2_5: airPollution.pm2_5,
          pm10: airPollution.pm10,
          so2: airPollution.so2,
          aqi: aqi,
          dt: airQualityData.list[0].dt,
        };

        setData(finalData);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred.");
        }
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return { data, error, loading };
}
