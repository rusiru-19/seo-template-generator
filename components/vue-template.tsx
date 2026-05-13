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
    googleVerification?: string
    twitterHandle?: string
    themeColor?: string
    robots?: string
    canonical?: string
  }
}

export default function VueTemplate({ data }: TemplateProps) {
const vueCode = `<script setup>
useHead({
  title: "${data.title}",

  meta: [
    {
      name: "description",
      content: "${data.description}"
    },

    {
      name: "keywords",
      content: "${data.keywords}"
    },

    {
      name: "author",
      content: "${data.author}"
    },

    {
      name: "robots",
      content: "${
        data.robots || "index, follow"
      }"
    },

    {
      property: "og:title",
      content: "${data.title}"
    },

    {
      property: "og:description",
      content: "${data.description}"
    },

    {
      property: "og:image",
      content: "${data.ogImage}"
    },

    {
      property: "og:url",
      content: "${data.siteUrl}"
    },

    {
      property: "og:type",
      content: "website"
    },

    {
      name: "twitter:card",
      content: "summary_large_image"
    },

    {
      name: "twitter:title",
      content: "${data.title}"
    },

    {
      name: "twitter:description",
      content: "${data.description}"
    },

    {
      name: "twitter:image",
      content: "${data.ogImage}"
    },

    ${
      data.twitterHandle
        ? `{
      name: "twitter:creator",
      content: "${data.twitterHandle}"
    },`
        : ""
    }

    ${
      data.googleVerification
        ? `{
      name: "google-site-verification",
      content: "${data.googleVerification}"
    },`
        : ""
    }
  ],

  link: [
    {
      rel: "canonical",
      href: "${
        data.canonical || data.siteUrl
      }"
    },

    {
      rel: "icon",
      href: "/favicon.ico"
    },

    {
      rel: "manifest",
      href: "/site.webmanifest"
    }
  ]
})
</script>
`
  const copyToClipboard = () => {
    navigator.clipboard.writeText(vueCode)
  }
  const notify = () => toast.success("Vue code copied to clipboard!")
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
        <h3 className="font-semibold">Vue 3 Component</h3>
        <Button size="sm" variant="outline" onClick={() => { copyToClipboard(); notify(); }} className="gap-2 bg-transparent">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-150 text-sm font-mono">
        <code>{vueCode}</code>
      </pre>
    </div>
  )
}
