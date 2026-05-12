import { siteConfig, SITE_URL } from "./site-config";

/**
 * Build a combined ChildCare + LocalBusiness schema object. Embedded as a
 * single JSON-LD `<script>` so search engines (and Google Business Profile)
 * understand the business type.
 *
 * Reference: https://schema.org/ChildCare and https://schema.org/LocalBusiness
 */
export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  const dayMap: Record<string, string> = {
    Monday: "Mo",
    Tuesday: "Tu",
    Wednesday: "We",
    Thursday: "Th",
    Friday: "Fr",
    Saturday: "Sa",
    Sunday: "Su",
  };

  return {
    "@context": "https://schema.org",
    "@type": ["ChildCare", "LocalBusiness", "EducationalOrganization"],
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: SITE_URL,
    logo: `${SITE_URL}/LOGOSS.png`,
    image: [`${SITE_URL}${siteConfig.ogImage}`, `${SITE_URL}/LOGOSS.png`],
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Jamaica" },
      { "@type": "City", name: "Queens" },
      { "@type": "City", name: "Brooklyn" },
      { "@type": "AdministrativeArea", name: "New York" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.hours.days.map((d) => dayMap[d] ?? d),
        opens: siteConfig.hours.open,
        closes: siteConfig.hours.close,
      },
    ],
    sameAs: siteConfig.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Programs by age",
      itemListElement: siteConfig.programs.map((p, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: p.name,
          description: `${p.ageRange} — ${p.description}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          serviceType: "Early childhood education",
          audience: {
            "@type": "PeopleAudience",
            audienceType: "Children",
            suggestedMinAge: p.name === "Infants" ? 0 : undefined,
          },
        },
      })),
    },
    knowsLanguage: ["en-US", "es"],
    keywords: siteConfig.keywords.join(", "),
    additionalType: "https://schema.org/ChildCare",
  };
}

/**
 * Website-level JSON-LD with sitelinks search support.
 */
export function buildWebsiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}
