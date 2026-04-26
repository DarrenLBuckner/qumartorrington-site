// qumartorrington.com — Personal Brand Site
// Built and hosted by Caribbean HomeHub LLC
// Ownership transfers to Qumar Torrington after 12 months per partnership agreement
// This site has NO dependencies on Portal HomeHub infrastructure — transfer must remain clean

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE =
  "Qumar Torrington | Licensed Real Estate Professional | Guyana HomeHub";
const DESCRIPTION =
  "Qumar Torrington is a licensed real estate professional, founder of Beyond the Boundary Real Estate & Construction, and Guyana Operations Partner for Guyana HomeHub — the real estate platform connecting diaspora buyers with verified Guyanese agents.";
const CANONICAL_URL = "https://qumartorrington.com";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Qumar Torrington",
    images: [{ url: "/og-image.jpg" }],
    locale: "en_US",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Qumar Torrington",
  jobTitle:
    "Licensed Real Estate Professional & Guyana Operations Partner, Guyana HomeHub",
  url: "https://qumartorrington.com",
  sameAs: [
    "https://www.linkedin.com/in/qumartorrington",
    "https://guyanahomehub.com/agents/qumar-torrington",
    "https://qumartorrington.com",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Guyana HomeHub",
    url: "https://guyanahomehub.com",
  },
  affiliation: [
    {
      "@type": "Organization",
      name: "Portal HomeHub",
      url: "https://portalhomehub.com",
    },
    {
      "@type": "Organization",
      name: "Beyond the Boundary Real Estate & Construction",
      url: "https://qumartorrington.com",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Guyana",
  },
  knowsAbout: [
    "Guyana real estate",
    "property investment Guyana",
    "Georgetown property market",
    "diaspora real estate investment",
    "Region 4 Guyana properties",
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Guyana HomeHub",
  url: "https://guyanahomehub.com",
  founder: {
    "@type": "Person",
    name: "Darren L. Buckner",
    url: "https://darrenlbuckner.com",
  },
  employee: {
    "@type": "Person",
    name: "Qumar Torrington",
    url: "https://qumartorrington.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
