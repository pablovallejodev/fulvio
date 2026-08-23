import type { Metadata, Viewport } from "next";
import { LOCALES, pickLocale } from "@/i18n/config";
import { Mulish } from "next/font/google";
import { GENERATE_METADATA, LayoutProps } from "@/constants/seo/metadata";
import "@/styles/global.css";
import { Analytics } from "@vercel/analytics/next";
import { connection } from "next/server";

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
  await connection();
  
  const raw = (await params).lang;
  const lang = pickLocale(raw);

  return (
    <html lang={lang} className={mulish.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
