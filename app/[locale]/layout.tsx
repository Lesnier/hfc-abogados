import type { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
import "./globals.css";

import {
  setRequestLocale,
  getMessages,
  getTranslations,
} from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
    creator: t("author"),
    publisher: t("author"),
    applicationName: t("siteName"),
    icons: {
      icon: "/favicon.ico",
    },

    // Open Graph
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.hfcabogados.ar",
      siteName: t("siteName"),
      locale: locale,
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: t("siteName"),
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.png"],
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Viewport y device
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },

    // Verificación y categorización
    category: "legal services",

    // Metadatos adicionales
    alternates: {
      canonical: "https://www.hfcabogados.ar",
      languages: {
        es: "/es",
        en: "/en",
        pt: "/pt",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang: { locale?: string | undefined } = locale ? { locale } : {};
  const messages = await getMessages(lang);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body
        className={` ${inriaSerif.className} antialiased w-[90%] md:w-[80%] md:w-[70%]`}
        style={{ margin: "30px auto" }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
