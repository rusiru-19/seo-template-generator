"use client"

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToastContainer, toast } from 'react-toastify';

interface TemplateProps {
  data: {
    title: string
    description: string
    keywords: string
    author: string
    siteName: string
    ogImage: string
    siteUrl: string
  }
}

export default function ReactTemplate({ data }: TemplateProps) {
  const reactCode = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${data.title}",
  description:
    "${data.description}",
  keywords: [
    "${data.keywords}"
  ],
  authors: [{ name: "${data.author}" }],
  alternates: {
    canonical: "${data.siteUrl}",
  },
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
  },
  metadataBase: new URL("${data.siteUrl}"),
};
  `

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reactCode)
  }
  const notify = () => toast.success("React code copied to clipboard!")

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
        <h3 className="font-semibold">Next.js/Layout Component</h3>
        <Button size="sm" variant="outline" onClick={() => { copyToClipboard(); notify(); }} className="gap-2 bg-transparent">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-150 text-sm font-mono">
        <code>{reactCode}</code>
      </pre>
    </div>
  )
}
