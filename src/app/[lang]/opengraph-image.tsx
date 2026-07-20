import { ImageResponse } from "next/og";
import { pickLocale, type Locale } from "@/i18n/config";

export const runtime = "edge";
export const alt = "Fulvio Coach · Spanish Method Tennis Academy · Phuket";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COPY: Record<Locale, { eyebrow: string; title: string; subtitle: string }> = {
  en: {
    eyebrow: "Phuket · Thailand",
    title: "Train the Spanish way.",
    subtitle: "Spanish Method Tennis Academy",
  },
  es: {
    eyebrow: "Phuket · Tailandia",
    title: "Entrena al estilo español.",
    subtitle: "Academia de Tenis · Método Español",
  },
  it: {
    eyebrow: "Phuket · Thailandia",
    title: "Allenati alla spagnola.",
    subtitle: "Accademia di Tennis · Metodo Spagnolo",
  },
  th: {
    eyebrow: "ภูเก็ต · ประเทศไทย",
    title: "ฝึกในแบบสเปน",
    subtitle: "สถาบันเทนนิสเมธอดสเปน",
  },
  zh: {
    eyebrow: "泰国 · 普吉",
    title: "以西班牙方式训练。",
    subtitle: "西班牙方法网球学院",
  },
  ru: {
    eyebrow: "Пхукет · Таиланд",
    title: "Тренируйся по-испански.",
    subtitle: "Академия тенниса · Испанский метод",
  },
};

const MULISH_600 =
  "https://fonts.gstatic.com/s/mulish/v18/1Ptyg83HX_SGhgqO0yLcmjzUAuWexU1WwaA.ttf";
const MULISH_700 =
  "https://fonts.gstatic.com/s/mulish/v18/1Ptyg83HX_SGhgqO0yLcmjzUAuWexXRWwaA.ttf";
const MULISH_700_ITALIC =
  "https://fonts.gstatic.com/s/mulish/v18/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSzuSvHg.ttf";

export default async function OG({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);
  const copy = COPY[lang];
  const [mulish600, mulish700, mulish700Italic] = await Promise.all([
    fetch(MULISH_600).then((res) => res.arrayBuffer()),
    fetch(MULISH_700).then((res) => res.arrayBuffer()),
    fetch(MULISH_700_ITALIC).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#0f1210",
          color: "#faf6ef",
          fontFamily: "Mulish",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, #dfe843 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -140,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, #8460e7 0%, transparent 70%)",
            opacity: 0.5,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: "#dfe843",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#dfe843",
              fontWeight: 600,
            }}
          >
            {copy.eyebrow}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, zIndex: 1 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              maxWidth: 900,
            }}
          >
            {copy.title}
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: -3,
              color: "#dfe843",
              lineHeight: 1,
            }}
          >
            Vamos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 600 }}>Fulvio Coach</div>
          <div
            style={{
              fontSize: 20,
              opacity: 0.7,
              maxWidth: 480,
              textAlign: "right",
            }}
          >
            {copy.subtitle}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Mulish", data: mulish600, weight: 600, style: "normal" },
        { name: "Mulish", data: mulish700, weight: 700, style: "normal" },
        { name: "Mulish", data: mulish700Italic, weight: 700, style: "italic" },
      ],
    },
  );
}
