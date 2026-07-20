import type { MetadataRoute } from "next";

export const MANIFEST: MetadataRoute.Manifest = {
  name: "Fulvio Coach · Spanish Method Academy",
  short_name: "Fulvio Coach",
  description:
    "Spanish Method tennis coaching in Phuket with Fulvio Coach. Zones 3, 2 and 1, footwork, balance and intensity.",
  start_url: "/",
  categories: ["sports", "education", "lifestyle"],
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#1e4d8c",
  icons: [
    { src: "/icon.png", sizes: "32x32", type: "image/png" },
    {
      src: "/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  ],
};
