"use client"

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToastContainer, toast } from "react-toastify"

interface TemplateProps {
  data: {
    title: string
    description: string
    keywords: string
    author: string
    siteName: string
    ogImage: string
    siteUrl: string

    // Advanced SEO
    googleVerification?: string
    twitterHandle?: string
    themeColor?: string
    robots?: string
    canonical?: string
  }
}

export default function ReactTemplate({
  data,
}: TemplateProps) {

  const keywordsArray = data.keywords
    .split(",")
    .map((k) => `"${k.trim()}"`)
    .join(",\n    ")

  const reactCode = `import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("${data.siteUrl}"),

  title: "${data.title}",

  description:
    "${data.description}",

  keywords: [
    ${keywordsArray}
  ],

  authors: [
    {
      name: "${data.author}",
    },
  ],

  creator: "${data.author}",

  publisher: "${data.siteName}",

  category: "technology",

  alternates: {
    canonical: "${
      data.canonical || data.siteUrl
    }",
  },

  robots: {
    index: ${
      data.robots?.includes("index")
        ? "true"
        : "false"
    },

    follow: ${
      data.robots?.includes("follow")
        ? "true"
        : "false"
    },

    googleBot: {
      index: ${
        data.robots?.includes("index")
          ? "true"
          : "false"
      },

      follow: ${
        data.robots?.includes("follow")
          ? "true"
          : "false"
      },

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  ${
    data.googleVerification
      ? `verification: {
    google: "${data.googleVerification}",
  },`
      : ""
  }

  ${
    data.themeColor
      ? `themeColor: "${data.themeColor}",`
      : ""
  }

  openGraph: {
    title: "${data.title}",

    description:
      "${data.description}",

    url: "${data.siteUrl}",

    siteName: "${data.siteName}",

    images: [
      {
        url: "${data.ogImage}",
        width: 1200,
        height: 630,
        alt: "${data.title}",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "${data.title}",

    description:
      "${data.description}",

    images: ["${data.ogImage}"],

    ${
      data.twitterHandle
        ? `creator: "${data.twitterHandle}",`
        : ""
    }
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  applicationName: "${data.siteName}",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "${data.siteName}",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  referrer: "origin-when-cross-origin",
};
`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reactCode)
  }

  const notify = () =>
    toast.success(
      "React code copied to clipboard!"
    )

  return (
    <div className="space-y-4">
      
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">
            Next.js Metadata
          </h3>

          <p className="text-sm text-muted-foreground">
            Production-ready SEO metadata
            configuration
          </p>
        </div>

        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            copyToClipboard()
            notify()
          }}
          className="gap-2 bg-transparent"
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>

      <pre className="bg-muted p-4 rounded-xl overflow-auto max-h-[650px] text-sm font-mono border border-border">
        <code>{reactCode}</code>
      </pre>
    </div>
  )
}