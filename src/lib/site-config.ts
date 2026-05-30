/**
 * Centralized site config used by metadata, structured data, sitemap,
 * manifest, icons and various sections. Edit one place — every meta-tag,
 * sitemap entry and JSON-LD entity stays in sync.
 *
 * TODO (owner): replace placeholders marked with TODO before launch
 *   - exact streetAddress, postalCode, geo coordinates
 *   - real social media URLs (sameAs)
 *   - canonical site URL once the domain is final
 */

export const SITE_URL = "https://sunshineslearninglab.com";

export const siteConfig = {
  name: "Sunshine's Learning Laboratory",
  shortName: "Sunshine's",
  legalName: "Sunshine's Learning Laboratory Inc.",
  tagline: "A happy place to learn, grow & shine.",
  description:
    "NYS-licensed daycare and learning lab in Jamaica, NY for ages 6 weeks – 12 years. Montessori-inspired classrooms, STEM lab, Spanish immersion. Book a tour today: (718) 404-6909.",
  shortDescription:
    "Joyful NYS-licensed daycare in Jamaica, NY — ages 6 weeks to 12 years.",
  url: SITE_URL,
  ogImage: "/CTABANNER.png",
  phone: "(718) 404-6909",
  phoneE164: "+17184046909",
  email: "sunshineslearninglaboratoryinc@gmail.com",
  /** Real address from existing Footer. Confirm exact suite/floor before launch. */
  address: {
    streetAddress: "159-14 134th Avenue, 1st Floor", // TODO: confirm exact suite/floor with owner
    addressLocality: "Jamaica",
    addressRegion: "NY",
    postalCode: "11434", // TODO: confirm zip code
    addressCountry: "US",
  },
  /** TODO (owner): replace with real lat/lng (use Google Maps "What's here?"). */
  geo: {
    latitude: 40.6731, // approximate Jamaica, NY centroid
    longitude: -73.7752,
  },
  /** TODO (owner): replace with real social URLs once accounts are live. */
  sameAs: [
    "https://www.facebook.com/sunshineslearninglab", // TODO
    "https://www.instagram.com/sunshineslearninglab", // TODO
  ],
  /** Operating hours surfaced on the site. Mon-Fri 7:00-18:30 by default. */
  hours: {
    open: "07:00",
    close: "18:30",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  priceRange: "$$",
  category: "education",
  keywords: [
    "daycare Jamaica NY",
    "preschool Jamaica Queens",
    "infant care Brooklyn",
    "NYS licensed daycare",
    "Montessori daycare Queens",
    "STEM preschool NYC",
    "Spanish immersion preschool",
    "Pre-K Jamaica NY",
    "after school Jamaica Queens",
    "early childhood education NYC",
    "Sunshine's Learning Laboratory",
  ],
  authors: [{ name: "Sunshine's Learning Laboratory Inc." }],
  /**
   * Five core program tiers also shown in the Investment / Tuition section.
   * Used to enumerate Offer items in the LocalBusiness JSON-LD.
   */
  programs: [
    { name: "Infants", ageRange: "6 weeks – 18 months", description: "Tiny ratios, sensory play, daily logs." },
    { name: "Toddlers", ageRange: "18 months – 3 years", description: "Potty training, language explosion, music & movement." },
    { name: "Preschool", ageRange: "3 – 5 years", description: "Phonics, math, STEM lab, daily Spanish immersion." },
    { name: "Pre-K", ageRange: "4 – 5 years", description: "Kindergarten readiness, writing & reading prep." },
    { name: "School-Age", ageRange: "5 – 12 years", description: "Homework help, STEM clubs, before & after school care." },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
