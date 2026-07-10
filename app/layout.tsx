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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibejulekki-demo.vercel.app";

export const viewport: Viewport = {
  themeColor: "#F5A623",
};

export const metadata: Metadata = {
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
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Header email={settings.email} officeHours={settings.officeHours} />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
