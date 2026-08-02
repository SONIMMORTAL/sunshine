import type { Metadata, Viewport } from "next";
import { Nunito, Fredoka, Baloo_2 } from "next/font/google";
import "./globals.css";
import { IntroLoader } from "@/components/IntroLoader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipToContent } from "@/components/SkipToContent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteConfig, SITE_URL } from "@/lib/site-config";
import {
  buildLocalBusinessJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/structured-data";

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

/**
 * Root metadata used as the default for every route. Owners can override the
 * canonical site URL by setting NEXT_PUBLIC_SITE_URL at build time; otherwise
 * the placeholder in `site-config.ts` is used. TODO: confirm domain.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} — NYS-Licensed Daycare in Jamaica, NY`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: siteConfig.category,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — A happy place to learn, grow & shine.`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — NYS-licensed daycare for kids 6 weeks to 12 years.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — A happy place to learn, grow & shine.`,
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": siteConfig.shortName,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFC233" },
    { media: "(prefers-color-scheme: dark)", color: "#14182A" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessLd = buildLocalBusinessJsonLd();
  const websiteLd = buildWebsiteJsonLd();

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${displayFont.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <head>
        {/* Performance: preconnect to third-party origins used on the page */}
        <link rel="preconnect" href="https://i.pravatar.cc" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />

      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SkipToContent />
          <IntroLoader videoSrc="/introvideo.mp4" maxDurationMs={6500} />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
