"use client";
import React, { useMemo } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useExchangeRate } from "@/hooks/useExchangeRate";
import {
  downloadExchange,
  titleExchange,
} from "@/lib/translations/exchange/exchange";
import { IExchange } from "@/type/interface";
import Image from "next/image";
import { countryInfo } from "@/lib/country/countryInfo";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function AllСurrency() {
  const { currentLang } = useLanguage();
  const { data, error, loading } = useExchangeRate("UAH");

  const title = titleExchange[currentLang as keyof typeof titleExchange];
  const download =
    downloadExchange[currentLang as keyof typeof downloadExchange];
  const country = countryInfo[currentLang as keyof typeof countryInfo];

  const calculateRates = (rate: number) => {
    if (rate === 0) return { buy: "N/A", sell: "N/A" };
    const buy = (1 / (rate * 0.99)).toFixed(2);
    const sell = (1 / (rate * 1.01)).toFixed(2);
    return { buy, sell };
  };

  const exchangeRows: IExchange[] = useMemo(() => {
    const countryValues = Object.values(country);
    return (
      countryValues
        // 'info' теперь является объектом { code: '...', name: '...', currency: '...', flag: '...' }
        .map((info) => {
          // Добавлена безопасная навигация data?.rates на случай, если data временно null/undefined
          const rate = data?.rates[info.currency] || 0;

          return {
            code: info.code,
            currency: info.currency,
            name: info.name,
            flag: info.flag,
            rates: calculateRates(rate),
          } as IExchange; // Добавлено приведение к IExchangeRow для большей ясности
        })
        .filter((row) => row.rates.buy !== "N/A")
    );
  }, [data, country]); // Зависимость 'data' и 'country'

  if (loading) return <div>{download.loading}</div>;
  if (error)
    return (
      <div>
        {download.error}
        {error}
      </div>
    );
  if (!data) return <div>{download.data}</div>;

  return (
    <div className="pt-15">
      <table className="w-full overflow-hidden rounded-lg border border-gray-200 text-left text-sm shadow-md">
        <thead className="border-b border-gray-400 bg-gray-50 text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="p-3 text-left font-bold">
              {title.country}
            </th>
            <th scope="col" className="p-3 text-center font-bold">
              {title.currency}
            </th>
            <th scope="col" className="p-3 text-center font-bold">
              {title.buy}
            </th>
            <th scope="col" className="p-3 text-center font-bold">
              {title.sell}
            </th>
          </tr>
        </thead>
        <tbody>
          {exchangeRows.map((currency) => (
            <tr key={currency.code} className="bg-white hover:bg-gray-50">
              <td className="p-3 text-center font-medium text-gray-900">
                <div className="flex items-center gap-4">
                  <Image
                    src={currency.flag}
                    alt={`Flag for ${currency.currency}`}
                    width={32}
                    height={24}
                    className="object-contain"
                  />
                  <span className="hidden sm:flex">{currency.name}</span>
                </div>
              </td>
              <td className="px-3 py-2 text-center text-gray-900">
                {currency.currency}
              </td>
              <td className="p-3 text-center text-green-700">
                {currency.rates.buy}
              </td>
              <td className="p-3 text-center text-red-700">
                {currency.rates.sell}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ArrowUp />
    </div>
  );
}
