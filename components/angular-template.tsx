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

export default function AngularTemplate({ data }: TemplateProps) {
  const angularCode = `
  // app.component.ts
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data = {
    title: "${data.title}",
    description: "${data.description}",
    keywords: "${data.keywords}",
    author: "${data.author}",
    siteUrl: "${data.siteUrl}",
    siteName: "${data.siteName}",
    ogImage: "${data.ogImage}",
  };

  constructor(private titleService: Title, private metaService: Meta) {
    // Set page title
    this.titleService.setTitle(this.data.title);

    // Basic SEO
    this.metaService.addTags([
      { name: 'description', content: this.data.description },
      { name: 'keywords', content: this.data.keywords },
      { name: 'author', content: this.data.author },
      { name: 'canonical', content: this.data.siteUrl },

      // Open Graph
      { property: 'og:title', content: this.data.title },
      { property: 'og:description', content: this.data.description },
      { property: 'og:url', content: this.data.siteUrl },
      { property: 'og:site_name', content: this.data.siteName },
      { property: 'og:image', content: this.data.ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_US' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: this.data.title },
      { name: 'twitter:description', content: this.data.description },
      { name: 'twitter:image', content: this.data.ogImage },
    ]);
  }
}

  `

  const copyToClipboard = () => {
    navigator.clipboard.writeText(angularCode)
  }
  const notify = () => toast.success("Angular code copied to clipboard!")
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
        <h3 className="font-semibold">Angular Component</h3>
        <Button size="sm" variant="outline" onClick={() => { copyToClipboard(); notify(); }} className="gap-2 bg-transparent">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-150 text-sm font-mono">
        <code>{angularCode}</code>
      </pre>
    </div>
  )
}
