"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useExchangeRate } from "@/hooks/useExchangeRate";
import {
  downloadExchange,
  titleExchange,
} from "@/lib/translations/exchange/exchange";
import { IExchange } from "@/type/interface";
import { countryInfo } from "@/lib/country/countryInfo";
import ArrowUp from "@/ui/ArrowUp";

export default function AllCurrency() {
  const params = useParams();
  const currentLang = (params?.lang as "ua" | "ru" | "en") || "ua";

  const { data, error, loading } = useExchangeRate("UAH");

  const title = titleExchange[currentLang] || titleExchange.ua;
  const download = downloadExchange[currentLang] || downloadExchange.ua;
  const country = countryInfo[currentLang] || countryInfo.ua;

  const calculateRates = (rate: number) => {
    if (rate === 0) return { buy: "N/A", sell: "N/A" };
    const buy = (1 / (rate * 0.99)).toFixed(2);
    const sell = (1 / (rate * 1.01)).toFixed(2);
    return { buy, sell };
  };

  const exchangeRows: IExchange[] = useMemo(() => {
    const countryValues = Object.values(country || {});
    return countryValues
      .map((info) => {
        const rate = data?.rates[info.currency] || 0;

        return {
          code: info.code,
          currency: info.currency,
          name: info.name,
          flag: info.flag,
          rates: calculateRates(rate),
        } as IExchange;
      })
      .filter((row) => row.rates.buy !== "N/A");
  }, [data, country]);

  if (loading) return <div className="pt-15">{download.loading}</div>;
  if (error)
    return (
      <div className="pt-15">
        {download.error}
        {error}
      </div>
    );
  if (!data) return <div className="pt-15">{download.data}</div>;

  return (
    <div className="pt-15">
      <table className="w-full overflow-hidden rounded-lg border border-gray-200 text-left text-sm shadow-md">
        <thead className="text-foreground border-b border-gray-400 bg-gray-50 text-xs uppercase">
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
            <tr key={currency.code} className="bg-background hover:bg-gray-200">
              <td className="text-foreground p-3 text-center font-medium">
                <div className="flex items-center gap-4">
                  {/* Контейнер ТОЛЬКО для флага */}
                  <div className="relative h-6 w-8 shrink-0">
                    <Image
                      src={currency.flag}
                      alt={`Flag for ${currency.currency}`}
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                  {/* Текст снаружи */}
                  <span className="hidden sm:inline-block">
                    {currency.name}
                  </span>
                </div>
              </td>
              <td className="text-muted px-3 py-2 text-center">
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
