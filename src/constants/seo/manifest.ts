import type { MetadataRoute } from "next";

export const MANIFEST: MetadataRoute.Manifest = {
  name: "Fulvio Coach · Spanish Method Academy",
  short_name: "Fulvio Coach",
  description:
    "Spanish Method tennis coaching in Phuket with Fulvio Coach. Zones 3, 2 and 1, footwork, balance and intensity.",
  start_url: "/",
  categories: ["sports", "education", "lifestyle"],
  display: "standalone",
  background_color: "#fbfaf7",
  theme_color: "#fbfaf7",
  icons: [
    { src: "/icons/ball.png", sizes: "512x512", type: "image/png" },
  ],
};
