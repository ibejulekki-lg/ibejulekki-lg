import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { getSiteSettings } from "@/lib/settings";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibejulekki.lg.gov.ng";

export const viewport: Viewport = {
  themeColor: "#FFBA26",
};

export const metadata: Metadata = {
  verification: {
    google: 'xPOj1m7ePeIt2tprMxj60MEnBzLkeeyJQQYSaIYGJ7o',
  },
  metadataBase: new URL(SITE_URL),
  title: "Ibeju-Lekki Local Government | Official Website",
  description:
    "The official website of Ibeju-Lekki Local Government Area, Lagos State, home to Dangote Refinery and Lekki Free Trade Zone.",
  openGraph: {
    type: "website",
    siteName: "Ibeju-Lekki Local Government",
    locale: "en_NG",
    title: "Ibeju-Lekki Local Government | Official Website",
    description:
      "The official website of Ibeju-Lekki Local Government Area, Lagos State, Nigeria.",
  },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: settings.siteName,
    alternateName: 'Ibeju-Lekki LGA',
    url: SITE_URL,
    logo: SITE_URL + '/ibeju-lekki-logo.webp',
    email: settings.email,
    telephone: settings.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings.address.replace(/\n/g, ', '),
      addressRegion: 'Lagos',
      addressCountry: 'NG',
    },
    areaServed: 'Ibeju-Lekki, Lagos State, Nigeria',
    sameAs: Object.values(settings.socials).filter(Boolean),
  };
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header email={settings.email} officeHours={settings.officeHours} />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
