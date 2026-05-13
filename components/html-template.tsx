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

export default function HtmlTemplate({ data }: TemplateProps) {
const htmlCode = `<!-- Basic SEO -->
<title>${data.title}</title>

<meta name="description" content="${data.description}" />
<meta name="keywords" content="${data.keywords}" />
<meta name="author" content="${data.author}" />
<meta name="robots" content="${
  data.robots || "index, follow"
}" />

<!-- Canonical -->
<link rel="canonical" href="${
  data.canonical || data.siteUrl
}" />

<!-- Theme -->
<meta name="theme-color" content="${
  data.themeColor || "#000000"
}" />

<!-- Open Graph -->
<meta property="og:title" content="${
  data.title
}" />
<meta property="og:description" content="${
  data.description
}" />
<meta property="og:url" content="${
  data.siteUrl
}" />
<meta property="og:site_name" content="${
  data.siteName
}" />
<meta property="og:image" content="${
  data.ogImage
}" />
<meta property="og:type" content="website" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${
  data.title
}" />
<meta name="twitter:description" content="${
  data.description
}" />
<meta name="twitter:image" content="${
  data.ogImage
}" />
${
  data.twitterHandle
    ? `<meta name="twitter:creator" content="${data.twitterHandle}" />`
    : ""
}

<!-- Verification -->
${
  data.googleVerification
    ? `<meta name="google-site-verification" content="${data.googleVerification}" />`
    : ""
}

<!-- Favicons -->
<link rel="icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
`


  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode)
  }
      const notify = () => toast.success("Copied to the clipboard!");

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
        <h3 className="font-semibold">HTML Meta Tags</h3>
        <Button size="sm" variant="outline" onClick={() => { copyToClipboard(); notify(); }} className="gap-2 bg-transparent">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-150 text-sm font-mono">
        <code>{htmlCode}</code>
      </pre>
    </div>
  )
}
