import type { Metadata, Viewport } from "next";
import { LOCALES, pickLocale } from "@/i18n/config";
import { headers } from "next/headers";
import Script from "next/script";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { GENERATE_METADATA, LayoutProps } from "@/constants/seo/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: LayoutProps["params"];
}): Promise<Metadata> {
  return GENERATE_METADATA({ params, route: "" });
}

export const viewport: Viewport = {
  themeColor: "#0f1210",
  width: "device-width",
  initialScale: 1,
};

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export default async function LangLayout({ children, params }: LayoutProps) {
  const raw = (await params).lang;
  const lang = pickLocale(raw);
  const h = await headers();
  const nonce = h.get("x-nonce") ?? undefined;

  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Script
          src="/_vercel/insights/script.js"
          nonce={nonce}
          strategy="afterInteractive"
          data-endpoint="/_vercel/insights"
        />
        <Script
          src="/_vercel/speed-insights/script.js"
          nonce={nonce}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
