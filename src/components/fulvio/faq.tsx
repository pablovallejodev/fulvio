import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { Reveal } from "@/components/fulvio/motion";

export function faqItems(t: ReturnType<typeof getT>) {
  return [
    { q: t.faq_1_q, a: t.faq_1_a },
    { q: t.faq_2_q, a: t.faq_2_a },
    { q: t.faq_3_q, a: t.faq_3_a },
    { q: t.faq_4_q, a: t.faq_4_a },
    { q: t.faq_5_q, a: t.faq_5_a },
    { q: t.faq_6_q, a: t.faq_6_a },
    { q: t.faq_7_q, a: t.faq_7_a },
  ];
}

export default function FaqSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const items = faqItems(t);

  return (
    <section
      id="faq"
      className={styles["section"]}
      aria-labelledby="faq-title"
    >
      <div className="df-shell">
        <div className={styles["header"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.faq_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="faq-title" className={styles["title"]}>
              {t.faq_title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles["lead"]}>{t.faq_lead}</p>
          </Reveal>
        </div>
        <div className={styles["faqList"]}>
          {items.map((item, index) => (
            <details
              key={item.q}
              className={styles["faqItem"]}
              open={index === 0}
            >
              <summary className={styles["faqSummary"]}>
                <span>{item.q}</span>
                <span className={styles["faqIcon"]} aria-hidden="true">
                  +
                </span>
              </summary>
              <p className={styles["faqAnswer"]}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
