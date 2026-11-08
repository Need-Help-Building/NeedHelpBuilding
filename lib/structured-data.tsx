import { site } from "@/content/site";
import { serviceGroups } from "@/content/services";

const ORG_ID = `${site.url}/#organization`;

/** Site-wide JSON-LD: Organization, WebSite and ProfessionalService (with the service catalogue). */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: site.name,
        alternateName: [site.shortName, "Need Help Building"],
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/logo.png`,
          width: 1062,
          height: 482,
        },
        email: site.email,
        telephone: site.phone.e164,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: site.email,
            telephone: site.phone.e164,
            availableLanguage: ["English", "Hindi"],
          },
        ],
        description: `${site.positioning} ${site.supporting}`,
        knowsAbout: [
          "Artificial intelligence engineering",
          "AI agents and multi-agent systems",
          "Retrieval-augmented generation",
          "AI voice agents",
          "Business process automation",
          "Technology consulting",
          "Software architecture",
          "Web application development",
          "SaaS product engineering",
          "Mobile application development",
          "UI/UX design",
          "Software quality assurance",
          "Penetration testing",
          "Cloud infrastructure and DevOps",
          "Search engine optimization",
        ],
        sameAs: [site.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        alternateName: site.shortName,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.name,
        url: site.url,
        image: `${site.url}/logo.png`,
        email: site.email,
        telephone: site.phone.e164,
        parentOrganization: { "@id": ORG_ID },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "NHB practice areas",
          itemListElement: serviceGroups.map((group) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: group.title,
              description: group.summary,
            },
          })),
        },
      },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are static strings from our content files.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
