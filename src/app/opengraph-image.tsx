import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Sam Vojdani, MD — Hip & Knee Replacement Surgeon in Atlanta, Georgia";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f1e30 0%, #1c3a5c 60%, #245588 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#b3cfeb", letterSpacing: 4, textTransform: "uppercase" }}>
          Hip &amp; Knee Replacement · Atlanta, Georgia
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Sam Vojdani, MD
        </div>
        <div style={{ fontSize: 36, color: "#d9e7f5", marginTop: 24 }}>
          Board-Certified · Columbia Fellowship-Trained
        </div>
        <div style={{ fontSize: 30, color: "#82afdb", marginTop: 48 }}>
          georgiahipandknee.com
        </div>
      </div>
    ),
    { ...size }
  );
}
