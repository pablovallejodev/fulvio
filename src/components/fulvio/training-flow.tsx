import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

export default function TrainingFlowSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const steps = [
    { label: t.flow_1_label, text: t.flow_1_text },
    { label: t.flow_2_label, text: t.flow_2_text },
    { label: t.flow_3_label, text: t.flow_3_text },
    { label: t.flow_4_label, text: t.flow_4_text },
    { label: t.flow_5_label, text: t.flow_5_text },
  ];

  return (
    <section
      id="flow"
      className={styles["sectionTight"]}
      aria-labelledby="flow-title"
    >
      <div className="df-shell">
        <div className={styles["header"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.flow_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="flow-title" className={styles["title"]}>
              {t.flow_title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles["lead"]}>{t.flow_lead}</p>
          </Reveal>
        </div>
        <Stagger className={styles["flowGrid"]} gap={0.08}>
          {steps.map((step, index) => (
            <StaggerItem key={step.label}>
              <div className={styles["flowStep"]}>
                <span className={styles["flowNum"]}>0{index + 1}</span>
                <span className={styles["flowLabel"]}>{step.label}</span>
                <p className={styles["body"]}>{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
