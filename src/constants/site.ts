export const CONTACT = {
  whatsapp: "66660607260",
  whatsappDisplay: "+66 66 060 7260",
  email: "vamosfulviocoach@gmail.com",
  instagram: "https://www.instagram.com/vamosfulviocoach/",
  instagramHandle: "@vamosfulviocoach",
  youtube: "https://www.youtube.com/@VamosFulvioCoach",
  youtubeChannelId: "UCJ1S4a7Evyx3QaJh8A6I5Ew",
} as const;

/**
 * Media inventory.
 *
 * Photos live in /public/photos and can be dropped in by Fulvio.
 * Every slot has a documented purpose; until the real photo is provided,
 * a YouTube thumbnail from his own channel is used as a safe fallback.
 */
export const PHOTOS = {
  /** Portrait for the hero. Real photo of Fulvio alone. */
  heroPortrait: {
    src: "/photos/fulvio-rafa.jpg",
    fallback: "https://img.youtube.com/vi/JMYoxqG4ebc/maxresdefault.jpg",
    hint: "Portrait of Fulvio on court in Phuket",
  },
  /** Coach section main portrait. */
  coachPortrait: {
    src: "/photos/fulvio-coach.jpg",
    fallback: "https://img.youtube.com/vi/-V8IvHB2o1s/maxresdefault.jpg",
    hint: "Fulvio coaching a player on court",
  },
  /** Iconic photo of Fulvio with Rafa Nadal. */
  fulvioRafa: {
    src: "/photos/fulvio-rafa.jpg",
    fallback: "https://img.youtube.com/vi/WZPTR23Afrs/maxresdefault.jpg",
    hint: "Fulvio with Rafa Nadal (Spanish method inspiration)",
  },
  /** Fulvio on the motorbike with Tarzán the dog. */
  fulvioTarzan: {
    src: "/photos/fulvio-tarzan.jpg",
    fallback: "https://img.youtube.com/vi/T2dYp7guMGc/hqdefault.jpg",
    hint: "Fulvio on the motorbike with Tarzán the dog",
  },
} as const;

export type GalleryCell = "hero" | "wide" | "medium" | "tarzan" | "small";

export type GalleryImage = {
  src: string;
  fallback: string;
  altKey:
    | "gallery_alt_training"
    | "gallery_alt_intensity"
    | "gallery_alt_drill"
    | "gallery_alt_tarzan"
    | "gallery_alt_footwork"
    | "gallery_alt_session"
    | "gallery_alt_pointplay";
  cell: GalleryCell;
};

export const VIDEOS = [
  { id: "JMYoxqG4ebc", principle: "zones" },
  { id: "-V8IvHB2o1s", principle: "intensity" },
  { id: "Z0fvtd7TALw", principle: "review_en" },
  { id: "heKDmCt4bug", principle: "review_ru" },
] as const;

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://img.youtube.com/vi/JMYoxqG4ebc/hqdefault.jpg",
    fallback: "https://img.youtube.com/vi/JMYoxqG4ebc/hqdefault.jpg",
    altKey: "gallery_alt_training",
    cell: "hero",
  },
  {
    src: "https://img.youtube.com/vi/-V8IvHB2o1s/hqdefault.jpg",
    fallback: "https://img.youtube.com/vi/-V8IvHB2o1s/hqdefault.jpg",
    altKey: "gallery_alt_intensity",
    cell: "wide",
  },
  {
    src: "https://img.youtube.com/vi/gTIDTWZZSKc/hqdefault.jpg",
    fallback: "https://img.youtube.com/vi/gTIDTWZZSKc/hqdefault.jpg",
    altKey: "gallery_alt_drill",
    cell: "medium",
  },
  {
    src: PHOTOS.fulvioTarzan.src,
    fallback: PHOTOS.fulvioTarzan.fallback,
    altKey: "gallery_alt_tarzan",
    cell: "tarzan",
  },
  {
    src: "https://img.youtube.com/vi/T2dYp7guMGc/hqdefault.jpg",
    fallback: "https://img.youtube.com/vi/T2dYp7guMGc/hqdefault.jpg",
    altKey: "gallery_alt_footwork",
    cell: "small",
  },
  {
    src: "https://img.youtube.com/vi/WZPTR23Afrs/hqdefault.jpg",
    fallback: "https://img.youtube.com/vi/WZPTR23Afrs/hqdefault.jpg",
    altKey: "gallery_alt_session",
    cell: "small",
  },
  {
    src: "https://img.youtube.com/vi/DBqIOrM6dwc/hqdefault.jpg",
    fallback: "https://img.youtube.com/vi/DBqIOrM6dwc/hqdefault.jpg",
    altKey: "gallery_alt_pointplay",
    cell: "small",
  },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function youtubeEmbedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export function youtubeThumb(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
