import type { Metadata } from "next";
import { caveat, greatVibes, georgia } from "@/fonts/_fonts";
import "@/styles/globals.css";
import Header from "@/header/Header";

const translations = {
  ua: {
    title: "Місто Одеса - Головна",
    description: "Глобальний опис для всього сайту.",
  },
  ru: {
    title: "Город Одесса - Главная",
    description: "Глобальное описание для всего сайта.",
  },
  en: {
    title: "City of Odessa - Home",
    description: "Global description for the entire site.",
  },
};

type LangKey = keyof typeof translations;
const allowedLangs = Object.keys(translations) as LangKey[];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const currentLang = allowedLangs.includes(lang as LangKey)
    ? (lang as LangKey)
    : "ua";

  const current = translations[currentLang];

  return {
    title: {
      default: current.title,
      template: `%s`,
    },
    description: current.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} className="light" suppressHydrationWarning>
      <body
        className={` ${georgia.variable} ${caveat.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        <Header />
        <main className="mx-auto max-w-7xl px-4">{children}</main>
      </body>
    </html>
  );
}
