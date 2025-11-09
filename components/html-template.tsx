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

export default function HtmlTemplate({ data }: TemplateProps) {
  const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${data.title}</title>
  <meta name="description" content="${data.description}" />
  <meta name="keywords" content="${data.keywords}" />
  <meta name="author" content="${data.author}" />
  <link rel="canonical" href="${data.siteUrl}" />

  <!-- Open Graph -->
  <meta property="og:title" content="${data.title}" />
  <meta property="og:description" content="${data.description}" />
  <meta property="og:url" content="${data.siteUrl}" />
  <meta property="og:site_name" content="${data.siteName}" />
  <meta property="og:image" content="${data.ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${data.title}" />
  <meta name="twitter:description" content="${data.description}" />
  <meta name="twitter:image" content="${data.ogImage}" />
</head>
<body>
  <!-- Page content -->
</body>
</html>


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
