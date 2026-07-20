import Image from "next/image";
import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { GALLERY_IMAGES, PHOTOS } from "@/constants/site";
import fs from "node:fs";
import path from "node:path";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

function pickSrc(src: string): string {
  if (!src.startsWith("/")) return src;
  const filepath = path.join(process.cwd(), "public", src);
  if (fs.existsSync(filepath)) return src;
  return PHOTOS.fulvioTarzan.fallback;
}

export default function GallerySection({ lang }: { lang: Locale }) {
  const t = getT(lang);

  return (
    <section
      id="gallery"
      className={styles["sectionTight"]}
      aria-labelledby="gallery-title"
    >
      <div className="df-shell">
        <div className={styles["header"]}>
          <Reveal>
            <span className={styles["eyebrow"]}>{t.gallery_eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="gallery-title" className={styles["title"]}>
              {t.gallery_title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles["lead"]}>{t.gallery_lead}</p>
          </Reveal>
        </div>
        <Stagger className={styles["galleryGrid"]} gap={0.05}>
          {GALLERY_IMAGES.map((image, index) => (
            <StaggerItem key={`${image.src}-${index}`}>
              <figure className={styles["galleryItem"]}>
                <Image
                  src={pickSrc(image.src)}
                  alt={t[image.altKey]}
                  fill
                  sizes="(max-width: 720px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className={styles["galleryImage"]}
                />
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
