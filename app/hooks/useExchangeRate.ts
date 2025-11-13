"use client";
import { useState, useEffect } from "react";

interface IRates {
  [key: string]: number;
}

interface IExchangeData {
  rates: IRates;
  base: string;
  date: string;
}

export function useExchangeRate(currency: string) {
  const [data, setData] = useState<IExchangeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = `https://api.exchangerate-api.com/v4/latest/${currency}`;

    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Сетевая ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedData: IExchangeData) => {
        setData(fetchedData);
      })
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [currency]);

  return { data, error, loading };
}
