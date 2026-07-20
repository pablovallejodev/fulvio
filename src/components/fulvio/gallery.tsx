import Image from "next/image";
import styles from "@/styles/FulvioLanding.module.css";
import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import { GALLERY_IMAGES, type GalleryCell } from "@/constants/site";
import { resolvePhoto } from "@/components/fulvio/smart-image";
import { Reveal, Stagger, StaggerItem } from "@/components/fulvio/motion";

const CELL_CLASS: Record<GalleryCell, string | undefined> = {
  hero: styles["galleryCellHero"],
  wide: styles["galleryCellWide"],
  medium: styles["galleryCellMedium"],
  tarzan: styles["galleryCellTarzan"],
  small: styles["galleryCellSmall"],
};

function resolveGallerySrc(image: (typeof GALLERY_IMAGES)[number]) {
  if (image.src.startsWith("http")) return image.src;
  return resolvePhoto({
    src: image.src,
    fallback: image.fallback,
    hint: "",
  });
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
          {GALLERY_IMAGES.map((image) => (
            <StaggerItem
              key={image.altKey}
              className={CELL_CLASS[image.cell]}
            >
              <figure
                className={`${styles["galleryItem"]}${image.cell === "tarzan" ? ` ${styles["galleryItemTarzan"]}` : ""}`}
              >
                <Image
                  src={resolveGallerySrc(image)}
                  alt={t[image.altKey]}
                  fill
                  sizes="(max-width: 720px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className={`${styles["galleryImage"]}${image.cell === "tarzan" ? ` ${styles["galleryImageTarzan"]}` : ""}`}
                />
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
