import styles from "@/styles/FulvioLanding.module.css";
import navbarStyles from "@/styles/Navbar.module.css";
import Image from "next/image";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { whatsappUrl } from "@/constants/site";

export default function HeroSection({ lang }: { lang: Locale }) {
  const t = getT(lang);

  return (
    <section className={styles["hero"]} aria-labelledby="hero-title">
      <div className={styles["heroBg"]} aria-hidden="true">
        <video
          className={styles["heroVideo"]}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/hero.mp4" media="(min-aspect-ratio: 1/1)" />
          <source src="/hero-vertical.mp4" media="(max-aspect-ratio: 1/1)" />
        </video>
      </div>
      <div className={`df-shell ${styles["heroShell"]}`}>
        <div className={styles["heroContent"]}>
          <div className={styles["heroCopy"]}>
            <h1 id="hero-title" className={styles["heroTitle"]}>
              {t.hero_title}
            </h1>
            <a
              href={whatsappUrl(t.whatsapp_message)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${navbarStyles["cta"]} ${styles["heroWhatsapp"]}`}
            >
              <Image src="/icons/whatsapp.png" alt="" width={28} height={28} />
              {t.nav_cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
