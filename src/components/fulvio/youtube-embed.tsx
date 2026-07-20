"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/FulvioLanding.module.css";
import { youtubeEmbedUrl, youtubeThumb } from "@/constants/site";

export default function YoutubeEmbed({
  videoId,
  title,
  playLabel,
  large = false,
}: {
  videoId: string;
  title: string;
  playLabel: string;
  large?: boolean | undefined;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className={styles["videoEmbed"]}
        src={`${youtubeEmbedUrl(videoId)}&autoplay=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
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
        sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
        className={styles["videoThumb"]}
      />
      <span className={styles["videoOverlay"]}>
        <h3 className={styles["videoTitle"]}>{title}</h3>
      </span>
      <span className={styles["videoPlayBtn"]} aria-hidden="true">
        ▶
      </span>
    </button>
  );
}
