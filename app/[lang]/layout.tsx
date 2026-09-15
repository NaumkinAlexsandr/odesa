import type { Metadata } from "next";
import { caveat, greatVibes, georgia } from "@/fonts/_fonts";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/footer/Footer";
import { AppStoreProvider } from "@/store/app-store-provider";
import { getCleanLang } from "@/utils/getCleanLang";
import {
  metadataTranslations,
  allowedLangs,
  LangKey,
} from "@/lib/translations/metadata/";
import Header from "@/components/layout/header/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const currentLang = allowedLangs.includes(lang as LangKey)
    ? (lang as LangKey)
    : "ua";

  const current = metadataTranslations[currentLang];

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
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const currentLang = getCleanLang(lang);
  const currentTheme = "light";

  return (
    <html lang={currentLang} className="light" suppressHydrationWarning>
      <body
        className={`${georgia.variable} ${caveat.variable} ${greatVibes.variable} flex min-h-screen w-full flex-col overflow-x-hidden scroll-smooth font-sans antialiased`}
      >
        <AppStoreProvider theme={currentTheme} lang={currentLang}>
          <Header />
          <main className="layout-container w-full min-w-0 flex-1">
            {children}
          </main>
          <Footer />
        </AppStoreProvider>
      </body>
    </html>
  );
}
