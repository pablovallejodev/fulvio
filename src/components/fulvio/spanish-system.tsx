import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

export default function SpanishSystemSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const principles = [
    t.system_principle_1,
    t.system_principle_2,
    t.system_principle_3,
    t.system_principle_4,
    t.system_principle_5,
    t.system_principle_6,
  ];

  const zones = [
    {
      key: "zone3",
      num: t.zone_3_num,
      label: t.zone_3_label,
      title: t.zone_3_title,
      text: t.zone_3_text,
      classes: styles["zone3"],
    },
    {
      key: "zone2",
      num: t.zone_2_num,
      label: t.zone_2_label,
      title: t.zone_2_title,
      text: t.zone_2_text,
      classes: styles["zone2"],
    },
    {
      key: "zone1",
      num: t.zone_1_num,
      label: t.zone_1_label,
      title: t.zone_1_title,
      text: t.zone_1_text,
      classes: styles["zone1"],
    },
  ];

  return (
    <section
      id="method"
      className={styles["section"]}
      aria-labelledby="system-title"
    >
      <div className="df-shell">
        <div className={styles["systemLayout"]}>
          <div className={styles["systemCopy"]}>
            <Reveal>
              <span className={styles["eyebrow"]}>{t.system_eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="system-title" className={styles["title"]}>
                {t.system_title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles["lead"]}>{t.system_lead}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className={styles["body"]}>{t.system_body}</p>
            </Reveal>
            <Stagger className={styles["systemPrinciples"]} gap={0.04}>
              {principles.map((item) => (
                <StaggerItem key={item} className={styles["principle"]}>
                  {item}
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Stagger className={styles["court"]} gap={0.1}>
            {zones.map((zone) => (
              <StaggerItem key={zone.key}>
                <article className={`${styles["zone"]} ${zone.classes}`}>
                  <span className={styles["zoneNum"]} aria-hidden="true">
                    {zone.num}
                  </span>
                  <p className={styles["zoneLabel"]}>{zone.label}</p>
                  <h3 className={styles["zoneTitle"]}>{zone.title}</h3>
                  <p className={styles["zoneText"]}>{zone.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
