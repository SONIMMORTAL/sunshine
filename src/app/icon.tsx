import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Programmatic favicon: a tiny smiling sun rendered server-side. Keeps the
 * brand consistent everywhere (browser tab, search results, history, etc.)
 * without committing a binary asset.
 */
export default function Icon() {
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
          borderRadius: "50%",
          color: "#1F2A44",
          fontSize: 22,
          fontWeight: 900,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        ☀
      </div>
    ),
    { ...size },
  );
}
