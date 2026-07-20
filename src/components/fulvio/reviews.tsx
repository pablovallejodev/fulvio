import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { CONTACT } from "@/constants/site";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

export default function ReviewsSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const reviews = [
    {
      quote: t.review_ben_quote,
      name: t.review_ben_name,
      origin: t.review_ben_origin,
      flag: t.review_ben_flag,
      videoId: "Z0fvtd7TALw",
    },
    {
      quote: t.review_thomas_quote,
      name: t.review_thomas_name,
      origin: t.review_thomas_origin,
      flag: t.review_thomas_flag,
      videoId: "heKDmCt4bug",
    },
    {
      quote: t.review_gleb_quote,
      name: t.review_gleb_name,
      origin: t.review_gleb_origin,
      flag: t.review_gleb_flag,
      videoId: "heKDmCt4bug",
    },
  ];

  return (
    <section
      id="reviews"
      className={`${styles["section"]} ${styles["sectionSand"]}`}
      aria-labelledby="reviews-title"
    >
      <div className="df-shell">
        <div className={styles["header"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.reviews_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="reviews-title" className={styles["title"]}>
              {t.reviews_title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles["lead"]}>{t.reviews_lead}</p>
          </Reveal>
        </div>
        <Stagger className={styles["reviewsGrid"]} gap={0.08}>
          {reviews.map((review, index) => (
            <StaggerItem key={`${review.name}-${index}`}>
              <article className={styles["review"]}>
                <p className={styles["reviewQuote"]}>&ldquo;{review.quote}&rdquo;</p>
                <div className={styles["reviewMeta"]}>
                  <span className={styles["reviewFlag"]} aria-hidden="true">
                    {review.flag}
                  </span>
                  <div className={styles["reviewAuthor"]}>
                    <span className={styles["reviewName"]}>{review.name}</span>
                    <span className={styles["reviewOrigin"]}>
                      {review.origin}
                    </span>
                  </div>
                </div>
                <a
                  href={`${CONTACT.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["reviewLink"]}
                >
                  {t.review_watch} <span aria-hidden="true">↗</span>
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
