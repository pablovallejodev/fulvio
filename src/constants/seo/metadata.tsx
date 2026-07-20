import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  HREFLANG,
  LOCALES,
  OG_LOCALE,
  pickLocale,
} from "@/i18n/config";
import { ROUTES, SITE } from "../routes/routes";
import { COPY } from "./copy-metadata";

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

type RoutesType = (typeof ROUTES)[number];

export async function GENERATE_METADATA({
  params,
  route,
}: {
  params: LayoutProps["params"];
  route: RoutesType;
}): Promise<Metadata> {
  const raw = (await params).lang;
  const lang = pickLocale(raw);
  const copy = COPY[route][lang];
  const alternateLocales = LOCALES.filter((locale) => locale !== lang).map(
    (locale) => OG_LOCALE[locale],
  );
  const canonicalUrl = `${SITE}/${lang}${route}`;

  return {
    metadataBase: new URL(SITE),
    title: { default: copy.title, template: "%s · Fulvio Coach" },
    description: copy.description,
    keywords: copy.keywords,
    applicationName: "Fulvio Coach",
    authors: [{ name: "Fulvio Scian" }],
    creator: "Fulvio Scian",
    publisher: "Fulvio Coach",
    category: "sports",
    alternates: {
      canonical: `/${lang}${route}`,
      languages: {
        ...Object.fromEntries(
          LOCALES.map((locale) => [HREFLANG[locale], `${SITE}/${locale}${route}`]),
        ),
        "x-default": `${SITE}/${DEFAULT_LOCALE}${route}`,
      },
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Fulvio Coach",
      locale: OG_LOCALE[lang],
      alternateLocale: alternateLocales,
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: `/${lang}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [`/${lang}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "TH-83",
      "geo.placename": "Phuket",
    },
  };
}
