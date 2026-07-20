import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

export default function ManifestoSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const values = [
    t.manifesto_value_1,
    t.manifesto_value_2,
    t.manifesto_value_3,
    t.manifesto_value_4,
    t.manifesto_value_5,
  ];

  return (
    <section
      id="manifesto"
      className={styles["manifesto"]}
      aria-labelledby="manifesto-title"
    >
      <div className="df-shell">
        <div className={styles["manifestoInner"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.manifesto_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p id="manifesto-title" className={styles["pullQuote"]}>
              {t.manifesto_quote_1}{" "}
              <span className={styles["accent"]}>
                {t.manifesto_quote_accent}
              </span>{" "}
              {t.manifesto_quote_2}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={styles["lead"]}>{t.manifesto_paragraph}</p>
          </Reveal>
          <Stagger className={styles["manifestoValues"]}>
            {values.map((value) => (
              <StaggerItem key={value}>
                <div className={styles["manifestoValue"]}>{value}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
