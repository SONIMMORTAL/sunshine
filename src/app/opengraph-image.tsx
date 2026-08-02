import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — A happy place to learn, grow & shine.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * 1200×630 social share image generated server-side. Keeps the brand
 * gradient, mascot motif, and key info consistent across Facebook, X,
 * LinkedIn, iMessage, etc. Works without any external font loading.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 30%, #FFE08A 0%, #FFC233 35%, #FF8A2B 75%, #E54CB1 130%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          color: "#1F2A44",
          padding: "64px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 8px, transparent 8px 28px)",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FFE08A 60%, #FFC233 100%)",
            boxShadow: "0 30px 60px -20px rgba(31,42,68,0.35)",
            fontSize: 120,
            marginBottom: 32,
          }}
        >
          ☀
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 1000,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginTop: 18,
            opacity: 0.85,
            textAlign: "center",
          }}
        >
          A happy place to learn, grow &amp; shine.
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 36,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.92)",
            }}
          >
            NYS Licensed
          </span>
          <span
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.92)",
            }}
          >
            Ages 6 weeks – 12 years
          </span>
          <span
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.92)",
            }}
          >
            (929) 925-4152
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
