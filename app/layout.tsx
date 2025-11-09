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
  authors: [{ name: "Rusiru Thamara" }],
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    title: "SEO template Generator ",
    description:
      "Generate fully optimized SEO meta tags for HTML, React, Vue, and Angular projects in seconds. Easy, open-source, and ready to boost your website's search engine visibility.",
    url: "https://example.com",
    siteName: "SEO template Generator ",
    images: [
      {
        url: "https://example.com/image.png",
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
    images: ["https://example.com/image.png"],
  },
  metadataBase: new URL("https://example.com"),
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
