import type { Metadata, Viewport } from "next";
import { LOCALES, pickLocale } from "@/i18n/config";
import { headers } from "next/headers";
import Script from "next/script";
import { Mulish } from "next/font/google";
import { GENERATE_METADATA, LayoutProps } from "@/constants/seo/metadata";
import "@/styles/global.css";

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

const mulish = Mulish({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-mulish",
  display: "swap",
});

export default async function LangLayout({ children, params }: LayoutProps) {
  const raw = (await params).lang;
  const lang = pickLocale(raw);
  const h = await headers();
  const nonce = h.get("x-nonce") ?? undefined;

  return (
    <html lang={lang} className={mulish.variable}>
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
