export const LOCALES = ["en", "es", "it", "th", "zh", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  it: "IT",
  th: "TH",
  zh: "ZH",
  ru: "RU",
};

export const LOCALE_FULL_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
  th: "ไทย",
  zh: "简体中文",
  ru: "Русский",
};

export const HREFLANG: Record<Locale, string> = {
  en: "en",
  es: "es",
  it: "it",
  th: "th",
  zh: "zh-CN",
  ru: "ru",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  th: "th_TH",
  zh: "zh_CN",
  ru: "ru_RU",
};

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export function pickLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

function normalizeTag(tag: string): string {
  const lower = tag.trim().toLowerCase();
  if (lower.startsWith("zh")) return "zh";
  return lower.split("-")[0] ?? lower;
}

export function resolveLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const candidates = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const weight = qParam ? parseFloat(qParam.split("=")[1] ?? "1") : 1;
      const base = normalizeTag(tag ?? "");
      return { base, weight: Number.isFinite(weight) ? weight : 0 };
    })
    .filter((c) => c.base)
    .sort((a, b) => b.weight - a.weight);

  for (const c of candidates) if (isLocale(c.base)) return c.base;

  return DEFAULT_LOCALE;
}
