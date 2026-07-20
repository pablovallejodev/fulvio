"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/FulvioLanding.module.css";
import { youtubeEmbedUrl, youtubeThumb } from "@/constants/site";

type VideoVariant = "hero" | "featured" | "standard";

const VARIANT_CLASS: Record<VideoVariant, string> = {
  hero: styles["videoEmbedHero"]!,
  featured: styles["videoEmbedFeatured"]!,
  standard: styles["videoEmbedStandard"]!,
};

const THUMB_SIZES: Record<VideoVariant, string> = {
  hero: "(max-width: 1024px) 100vw, 55vw",
  featured: "(max-width: 1024px) 100vw, 45vw",
  standard: "(max-width: 1024px) 100vw, 28vw",
};

export default function YoutubeEmbed({
  videoId,
  title,
  playLabel,
  variant = "standard",
}: {
  videoId: string;
  title: string;
  playLabel: string;
  variant?: VideoVariant;
}) {
  const [playing, setPlaying] = useState(false);
  const rootClass = VARIANT_CLASS[variant];

  if (playing) {
    return (
      <div className={rootClass}>
        <iframe
          className={styles["videoEmbed"]}
          src={`${youtubeEmbedUrl(videoId)}&autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <button
        type="button"
        className={styles["videoThumbBtn"]}
        onClick={() => setPlaying(true)}
        aria-label={`${playLabel}: ${title}`}
      >
        <Image
          src={youtubeThumb(videoId)}
          alt={title}
          fill
          sizes={THUMB_SIZES[variant]}
          className={styles["videoThumb"]}
        />
        <span className={styles["videoOverlay"]}>
          <h3 className={styles["videoTitle"]}>{title}</h3>
        </span>
        <span className={styles["videoPlayBtn"]} aria-hidden="true">
          ▶
        </span>
      </button>
    </div>
  );
}
