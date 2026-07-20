import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import YoutubeEmbed from "@/components/fulvio/youtube-embed";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";
import {
  VIDEOS,
  type VideoArea,
  type VideoPrinciple,
} from "@/constants/site";

const AREA_CLASS: Record<VideoArea, string> = {
  hero: styles["videoCellHero"]!,
  sideTop: styles["videoCellSideTop"]!,
  sideBottom: styles["videoCellSideBottom"]!,
  featured: styles["videoCellFeatured"]!,
  sideExtra: styles["videoCellSideExtra"]!,
};

const VARIANT: Record<
  VideoArea,
  "hero" | "featured" | "standard"
> = {
  hero: "hero",
  featured: "featured",
  sideTop: "standard",
  sideBottom: "standard",
  sideExtra: "standard",
};

const TITLE_KEY: Record<VideoPrinciple, keyof ReturnType<typeof getT>> = {
  tarzan: "video_tarzan_title",
  zones: "video_zones_title",
  intensity: "video_intensity_title",
  review_en: "video_review_en_title",
  review_ru: "video_review_ru_title",
};

export default function VideosSection({ lang }: { lang: Locale }) {
  const t = getT(lang);

  return (
    <section
      id="videos"
      className={`${styles["section"]} ${styles["sectionSand"]}`}
      aria-labelledby="videos-title"
    >
      <div className="df-shell">
        <div className={styles["header"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.videos_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="videos-title" className={styles["title"]}>
              {t.videos_title}
            </h2>
          </Reveal>
        </div>
        <Stagger className={styles["videoBento"]} gap={0.06}>
          {VIDEOS.map((video) => {
            const cardClass =
              video.area === "hero"
                ? styles["videoCardHero"]
                : video.area === "featured"
                  ? styles["videoCardFeatured"]
                  : "";

            return (
              <StaggerItem
                key={`${video.id}-${video.area}`}
                className={AREA_CLASS[video.area]}
              >
                <div className={`${styles["videoCard"]} ${cardClass}`}>
                  <YoutubeEmbed
                    videoId={video.id}
                    title={t[TITLE_KEY[video.principle]]}
                    playLabel={t.video_play}
                    variant={VARIANT[video.area]}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
