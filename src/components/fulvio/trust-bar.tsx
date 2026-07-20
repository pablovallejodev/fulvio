import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";

export default function TrustBar({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const items = [
    { label: t.trust_1_label, value: t.trust_1_value },
    { label: t.trust_2_label, value: t.trust_2_value },
    { label: t.trust_3_label, value: t.trust_3_value },
    { label: t.trust_4_label, value: t.trust_4_value },
  ];

  return (
    <section className={styles["trust"]} aria-label="Key facts">
      <div className={`df-shell ${styles["trustGrid"]}`}>
        {items.map((item) => (
          <div key={item.label} className={styles["trustItem"]}>
            <span className={styles["trustLabel"]}>{item.label}</span>
            <span className={styles["trustValue"]}>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
