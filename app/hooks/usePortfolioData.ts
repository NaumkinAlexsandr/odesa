import { useState, useEffect } from "react";

export const usePortfolioData = () => {
  const [data, setData] = useState<{ resume: string } | null>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NaumkinAlexsandr/resources/main/config/portfolio.json",
    )
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Ошибка загрузки конфига:", err));
  }, []);

  return data;
};
