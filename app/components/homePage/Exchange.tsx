"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { useExchangeRate } from "@/hooks/useExchangeRate";
import { countryFlag } from "@/lib/country/countryFlag"; // Путь к вашему файлу
import {
  titleExchange,
  downloadExchange,
} from "@/lib/translations/exchange/exchange";
import { IExchange } from "@/type/interface";

export default function Exchange() {
  const { data, error, loading } = useExchangeRate("UAH");
  const { currentLang, langPrefix } = useLanguage();

  const title = titleExchange[currentLang as keyof typeof titleExchange];
  const download =
    downloadExchange[currentLang as keyof typeof downloadExchange];

  if (loading) return <div>{download.loading}</div>;
  if (error)
    return (
      <div>
        {download.error}
        {error}
      </div>
    );
  if (!data) return <div>{download.data}</div>;

  const calculateRates = (rate: number) => {
    if (rate === 0) return { buy: "N/A", sell: "N/A" };
    const buy = (1 / (rate * 0.99)).toFixed(2);
    const sell = (1 / (rate * 1.01)).toFixed(2);
    return { buy, sell };
  };

  const exchangeRows: IExchange[] = [
    {
      currency: "EUR",
      flag: countryFlag.EURO,
      rates: calculateRates(data.rates.EUR || 0),
    },
    {
      currency: "USD",
      flag: countryFlag.US,
      rates: calculateRates(data.rates.USD || 0),
    },
    {
      currency: "GBP",
      flag: countryFlag.GB,
      rates: calculateRates(data.rates.GBP || 0),
    },
    {
      currency: "PLN",
      flag: countryFlag.PL,
      rates: calculateRates(data.rates.PLN || 0),
    },
  ];

  const sellStyle = `px-3 py-2 text-right text-green-700`;
  const buyStyle = `px-3 py-2 text-right text-red-700`;

  return (
    <>
      <table className="overflow-hidden rounded-lg border border-gray-200 text-left text-sm shadow-md">
        <thead className="border-b border-gray-400 bg-gray-50 text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-3 py-3 font-semibold">
              {title.currency}
            </th>
            <th scope="col" className="px-3 py-3 text-right font-semibold">
              {title.buy}
            </th>
            <th scope="col" className="px-3 py-3 text-right font-semibold">
              {title.sell}
            </th>
          </tr>
        </thead>
        <tbody>
          {exchangeRows.map((currency) => (
            <tr key={currency.currency} className="bg-white hover:bg-gray-50">
              <td className="px-3 py-2 font-medium whitespace-nowrap text-gray-900">
                <div className="flex items-center justify-center">
                  <Image
                    src={currency.flag}
                    alt={`Flag ${currency.currency}`}
                    width={32}
                    height={32}
                  />
                  <span className="ml-2">{currency.currency}</span>
                </div>
              </td>
              <td className={sellStyle}>{currency.rates.sell}</td>
              <td className={buyStyle}>{currency.rates.buy}</td>
            </tr>
          ))}
          <tr className="bg-white hover:bg-gray-50">
            <td
              colSpan={3}
              className="px-3 py-2 font-medium whitespace-nowrap text-gray-900"
            >
              <Link href={`${langPrefix}/currency`}>{title.more}</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
