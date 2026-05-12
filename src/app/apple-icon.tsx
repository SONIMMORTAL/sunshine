import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon (180×180). Mirrors the favicon styling on a slightly
 * rounded square, which is what iOS expects for home-screen bookmarks.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #FFE08A 0%, #FFC233 55%, #FF8A2B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          color: "#1F2A44",
          fontSize: 132,
          fontWeight: 900,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        ☀
      </div>
    ),
    { ...size },
  );
}
