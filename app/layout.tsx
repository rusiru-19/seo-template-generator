import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SEO template Generator ",
  description:
    "Generate fully optimized SEO meta tags for HTML, React, Vue, and Angular projects in seconds. Easy, open-source, and ready to boost your website's search engine visibility.",
  keywords: [
    "web, design, seo, seo-generator, google-crawlers"
  ],
    verification: {
    google: 'I8ujhWmul-5xSK7sX9MdgvRDZOTjJpwEdsNL3asEfZE',
  },
  authors: [{ name: "Rusiru Thamara" }],
  alternates: {
    canonical: "https://seo-template-generator-git-master-evildevs-projects.vercel.app/",
  },
  openGraph: {
    title: "SEO template Generator ",
    description:
      "Generate fully optimized SEO meta tags for HTML, React, Vue, and Angular projects in seconds. Easy, open-source, and ready to boost your website's search engine visibility.",
    url: "https://seo-template-generator-git-master-evildevs-projects.vercel.app/",
    siteName: "SEO template Generator ",
    images: [
      {
        url: "https://seo-template-generator-git-master-evildevs-projects.vercel.app/image.png",
        width: 1200,
        height: 630,
        alt: "SEO template Generator ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO template Generator ",
    description:
      "Generate fully optimized SEO meta tags for HTML, React, Vue, and Angular projects in seconds. Easy, open-source, and ready to boost your website's search engine visibility.",
    images: ["https://seo-template-generator-git-master-evildevs-projects.vercel.app/image.png"],
  },
  metadataBase: new URL("https://seo-template-generator-git-master-evildevs-projects.vercel.app/"),
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
