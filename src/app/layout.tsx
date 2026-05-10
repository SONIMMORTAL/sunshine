import type { Metadata, Viewport } from "next";
import { Nunito, Fredoka, Baloo_2 } from "next/font/google";
import "./globals.css";
import { IntroLoader } from "@/components/IntroLoader";

const bodyFont = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunshine's Learning Laboratory — Daycare in Jamaica, NY",
  description:
    "A joyful, NYS-licensed daycare in Jamaica, NY for kids 6 weeks to 12 years. Learn, grow, play, and share in our STEM-rich, Montessori-inspired classrooms. Call (718) 404-6909.",
  openGraph: {
    title: "Sunshine's Learning Laboratory",
    description:
      "A joyful daycare and learning lab in Jamaica, NY. NYS-licensed, ages 6 weeks–12 years.",
    images: ["/CTABANNER.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC233",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${displayFont.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <IntroLoader videoSrc="/introvideo.mp4" maxDurationMs={6500} />
        {children}
      </body>
    </html>
  );
}
