import Image from "next/image";
import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { PHOTOS } from "@/constants/site";
import { resolvePhoto } from "@/components/fulvio/smart-image";
import { Reveal } from "@/components/fulvio/motion";

export default function CoachSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const facts = [
    { label: t.coach_fact_1_label, value: t.coach_fact_1_value },
    { label: t.coach_fact_2_label, value: t.coach_fact_2_value },
    { label: t.coach_fact_3_label, value: t.coach_fact_3_value },
    { label: t.coach_fact_4_label, value: t.coach_fact_4_value },
  ];

  return (
    <section
      id="coach"
      className={styles["section"]}
      aria-labelledby="coach-title"
    >
      <div className="df-shell">
        <div className={styles["coachLayout"]}>
          <Reveal y={40}>
            <div className={styles["coachPortrait"]}>
              <Image
                src={resolvePhoto(PHOTOS.coachPortrait)}
                alt="Fulvio Scian coaching on court"
                fill
                className={styles["coachPortraitImg"]}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <span className={styles["coachTag"]}>{t.coach_tag}</span>
            </div>
          </Reveal>

          <div className={styles["coachSide"]}>
            <Reveal>
              <span className={styles["eyebrow"]}>{t.coach_eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="coach-title" className={styles["coachName"]}>
                {t.coach_name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles["coachRole"]}>{t.coach_role}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className={styles["coachBio"]}>{t.coach_bio_1}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className={styles["coachBio"]}>{t.coach_bio_2}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className={styles["coachFacts"]}>
                {facts.map((fact) => (
                  <div key={fact.label} className={styles["coachFact"]}>
                    <span className={styles["coachFactLabel"]}>
                      {fact.label}
                    </span>
                    <span className={styles["coachFactValue"]}>
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <p className={styles["note"]}>{t.coach_bio_3}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
