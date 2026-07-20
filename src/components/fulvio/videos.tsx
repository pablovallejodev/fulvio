import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import YoutubeEmbed from "@/components/fulvio/youtube-embed";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

export default function VideosSection({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const videos = [
    { id: "JMYoxqG4ebc", title: t.video_zones_title, large: true },
    { id: "-V8IvHB2o1s", title: t.video_intensity_title },
    { id: "Z0fvtd7TALw", title: t.video_review_en_title },
  ];

  return (
    <section
      id="videos"
      className={styles["section"]}
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
          <Reveal delay={0.1}>
            <p className={styles["lead"]}>{t.videos_lead}</p>
          </Reveal>
        </div>
        <Stagger className={styles["videoGrid"]}>
          {videos.map((video) => (
            <StaggerItem
              key={video.id}
              className={video.large ? styles["videoLarge"] : undefined}
            >
              <div
                className={`${styles["videoCard"]} ${video.large ? styles["videoLarge"] : ""}`}
              >
                <YoutubeEmbed
                  videoId={video.id}
                  title={video.title}
                  playLabel={t.video_play}
                  large={video.large}
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
