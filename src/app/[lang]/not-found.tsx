import { headers } from "next/headers";
import Link from "next/link";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";

const T: Record<Locale, { title: string; cta: string }> = {
  en: { title: "Page not found", cta: "Back to home" },
  es: { title: "Página no encontrada", cta: "Volver al inicio" },
  it: { title: "Pagina non trovata", cta: "Torna alla home" },
  th: { title: "ไม่พบหน้า", cta: "กลับหน้าแรก" },
  zh: { title: "页面未找到", cta: "返回首页" },
  ru: { title: "Страница не найдена", cta: "На главную" },
};

export default async function NotFound() {
  const h = await headers();
  const raw = h.get("x-locale") ?? DEFAULT_LOCALE;
  const lang: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = T[lang];

  return (
    <main
      className="df-shell"
      style={{ padding: "96px 0", textAlign: "center", minHeight: "60vh" }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#d95a2a",
        }}
      >
        404 · Vamos
      </p>
      <h1
        style={{
          fontSize: "clamp(44px, 6vw, 72px)",
          margin: "12px 0 24px",
          letterSpacing: "-0.03em",
        }}
      >
        {t.title}
      </h1>
      <Link
        href={`/${lang}` as never}
        style={{
          display: "inline-flex",
          padding: "14px 24px",
          background: "#0f1210",
          color: "#faf6ef",
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 14,
          textDecoration: "none",
        }}
      >
        {t.cta} →
      </Link>
    </main>
  );
}
