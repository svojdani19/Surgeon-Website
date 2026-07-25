import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sam Vojdani, MD — Hip & Knee Replacement",
    short_name: "Dr. Vojdani",
    description:
      "Hip and knee replacement surgeon in Atlanta, Georgia — anterior hip replacement, robotic knee replacement, and same-day joint replacement.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1c3a5c",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
