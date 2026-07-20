import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

export default function ReviewsSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const reviews = [
    {
      quote: t.review_ben_quote,
      name: t.review_ben_name,
      origin: t.review_ben_origin,
      flag: t.review_ben_flag,
    },
    {
      quote: t.review_thomas_quote,
      name: t.review_thomas_name,
      origin: t.review_thomas_origin,
      flag: t.review_thomas_flag,
    },
    {
      quote: t.review_gleb_quote,
      name: t.review_gleb_name,
      origin: t.review_gleb_origin,
      flag: t.review_gleb_flag,
    },
  ];

  return (
    <section
      id="reviews"
      className={`${styles["sectionTight"]} ${styles["sectionSand"]}`}
      aria-labelledby="reviews-title"
    >
      <div className="df-shell">
        <header className={`${styles["header"]} ${styles["reviewsHeader"]}`}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.reviews_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="reviews-title" className={styles["title"]}>
              {t.reviews_title}
            </h2>
          </Reveal>
        </header>
        <Stagger className={styles["reviewsGrid"]} gap={0.08}>
          {reviews.map((review, index) => (
            <StaggerItem key={`${review.name}-${index}`}>
              <article className={styles["review"]}>
                <blockquote className={styles["reviewQuote"]}>
                  <p>&ldquo;{review.quote}&rdquo;</p>
                </blockquote>
                <footer className={styles["reviewMeta"]}>
                  <span className={styles["reviewFlag"]} aria-hidden="true">
                    {review.flag}
                  </span>
                  <cite className={styles["reviewAuthor"]}>
                    <span className={styles["reviewName"]}>{review.name}</span>
                    <span className={styles["reviewOrigin"]}>
                      {review.origin}
                    </span>
                  </cite>
                </footer>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
