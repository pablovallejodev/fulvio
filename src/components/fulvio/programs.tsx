import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

export default function ProgramsSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const programs = [
    {
      num: t.program_1_num,
      title: t.program_1_title,
      text: t.program_1_text,
    },
    {
      num: t.program_2_num,
      title: t.program_2_title,
      text: t.program_2_text,
    },
    {
      num: t.program_3_num,
      title: t.program_3_title,
      text: t.program_3_text,
    },
  ];

  return (
    <section
      id="programs"
      className={`${styles["section"]} ${styles["sectionSand"]}`}
      aria-labelledby="programs-title"
    >
      <div className="df-shell">
        <div className={styles["header"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.programs_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="programs-title" className={styles["title"]}>
              {t.programs_title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles["lead"]}>{t.programs_lead}</p>
          </Reveal>
        </div>
        <Stagger className={styles["programGrid"]} gap={0.1}>
          {programs.map((program) => (
            <StaggerItem key={program.num}>
              <article className={styles["program"]}>
                <span className={styles["programNum"]}>{program.num}</span>
                <h3 className={styles["programTitle"]}>{program.title}</h3>
                <p className={styles["programText"]}>{program.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
