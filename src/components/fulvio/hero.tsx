import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { PHOTOS, whatsappUrl } from "@/constants/site";
import { resolvePhoto } from "@/components/fulvio/smart-image";
import { Reveal } from "@/components/fulvio/motion";

export default function HeroSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const marqueeItems = [
    t.hero_marquee_1,
    t.hero_marquee_2,
    t.hero_marquee_3,
    t.hero_marquee_4,
    t.hero_marquee_5,
  ];

  return (
    <section className={styles["hero"]} aria-labelledby="hero-title">
      <div className={styles["heroBg"]} aria-hidden="true" />
      <div className="df-shell">
        <div className={styles["heroGrid"]}>
          <div className={styles["heroCopy"]}>
            <Reveal delay={0}>
              <span className={styles["heroTag"]}>
                <span className={styles["heroPin"]} aria-hidden="true" />
                {t.hero_tag}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 id="hero-title" className={styles["heroTitle"]}>
                {t.hero_title_1}
                <br />
                <span className={styles["emBall"]}>{t.hero_title_2}</span>
                <br />
                <span className={styles["heroVamos"]}>{t.hero_vamos}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className={styles["heroSubtitle"]}>{t.hero_subtitle}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className={styles["actions"]}>
                <a
                  href={whatsappUrl(t.whatsapp_message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["btnPrimary"]}
                >
                  {t.hero_cta_primary}
                  <span className={styles["arrow"]} aria-hidden="true">
                    →
                  </span>
                </a>
                <Link
                  className={styles["btnSecondary"]}
                  href={{ pathname: `/${lang}`, hash: "method" }}
                >
                  {t.hero_cta_secondary}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={48}>
            <div className={styles["heroMedia"]}>
              <Image
                src={resolvePhoto(PHOTOS.heroPortrait)}
                alt="Fulvio Scian, tennis coach in Phuket"
                fill
                priority
                className={styles["heroImage"]}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className={styles["heroBadge"]}>
                <span>
                  <span className={styles["heroBadgeLabel"]}>
                    {t.hero_badge_label}
                  </span>
                  <br />
                  <strong>{t.hero_badge_value}</strong>
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12L19 12M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles["heroMarquee"]} aria-hidden="true">
        <div className={styles["heroMarqueeTrack"]}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className={styles["heroMarqueeItem"]}>
              {item}
              <span className={styles["heroMarqueeDot"]} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
