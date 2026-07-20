import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { CONTACT, whatsappUrl } from "@/constants/site";
import { Reveal } from "@/components/fulvio/motion";

export default function ContactCta({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const cards = [
    {
      href: whatsappUrl(t.whatsapp_message),
      label: t.contact_whatsapp_label,
      value: CONTACT.whatsappDisplay,
      external: true,
    },
    {
      href: `mailto:${CONTACT.email}`,
      label: t.contact_email_label,
      value: CONTACT.email,
      external: false,
    },
    {
      href: CONTACT.instagram,
      label: t.contact_instagram_label,
      value: CONTACT.instagramHandle,
      external: true,
    },
    {
      href: CONTACT.youtube,
      label: t.contact_youtube_label,
      value: "@VamosFulvioCoach",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className={`${styles["section"]} ${styles["sectionDark"]}`}
      aria-labelledby="contact-title"
    >
      <div className="df-shell">
        <div className={styles["contactHead"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.contact_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="contact-title" className={styles["contactTitle"]}>
              {t.contact_title}{" "}
              <span className={styles["emBall"]}>{t.contact_signature}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles["lead"]}>{t.contact_lead}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className={styles["contactGrid"]}>
            {cards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                className={styles["contactCard"]}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
              >
                <span>
                  <span className={styles["contactLabel"]}>{card.label}</span>
                  <br />
                  <span className={styles["contactValue"]}>{card.value}</span>
                </span>
                <span className={styles["arrow"]} aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className={styles["contactCta"]}>
            <a
              href={whatsappUrl(t.whatsapp_message)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["btnPrimary"]}
            >
              {t.contact_cta}
              <span className={styles["arrow"]} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
