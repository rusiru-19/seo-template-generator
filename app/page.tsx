"use client"

import { useState } from "react"
import { Sun, Moon, Code2, Copy, Check } from "lucide-react"
import SEOForm from "@/components/seo-form"
import TemplatePreview from "@/components/template-preview"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState("meta")
  const [copied, setCopied] = useState(false)

  const [seoData, setSeoData] = useState({
    title: "My Awesome Website",
    description: "Welcome to my awesome website with great content",
    keywords: "web, design, seo",
    author: "John Doe",
    siteName: "My Site",
    ogImage: "/og.webp",
    siteUrl: "https://example.com",
    googleVerification: "",
    twitterHandle: "@john_doe",
    themeColor: "#ffffff",
    robots: "index, follow",
    canonical: "https://example.com",
  })

  const codeTemplates = {
    meta: `<title>${seoData.title}</title>

<meta name="description" content="${seoData.description}" />
<meta name="keywords" content="${seoData.keywords}" />
<meta name="author" content="${seoData.author}" />`,

    openGraph: `<meta property="og:title" content="${seoData.title}" />
<meta property="og:description" content="${seoData.description}" />
<meta property="og:image" content="${seoData.ogImage}" />
<meta property="og:url" content="${seoData.siteUrl}" />
<meta property="og:site_name" content="${seoData.siteName}" />
<meta property="og:type" content="website" />`,

    twitter: `<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${seoData.title}" />
<meta name="twitter:description" content="${seoData.description}" />
<meta name="twitter:image" content="${seoData.ogImage}" />`,

    nextjs: `export const metadata = {
  title: "${seoData.title}",
  description: "${seoData.description}",
  keywords: "${seoData.keywords}",
  authors: [{ name: "${seoData.author}" }],
  openGraph: {
    title: "${seoData.title}",
    description: "${seoData.description}",
    url: "${seoData.siteUrl}",
    siteName: "${seoData.siteName}",
    images: [
      {
        url: "${seoData.ogImage}",
      },
    ],
    type: "website",
  },
}`
  }

  const copyCode = async () => {
    await navigator.clipboard.writeText(
      codeTemplates[activeTab as keyof typeof codeTemplates]
    )

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Header */}
        <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
          <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
            
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                SEO Template Generator
              </h1>
              <p className="text-sm text-muted-foreground">
                Generate modern SEO metadata instantly
              </p>
            </div>

            <div className="flex items-center gap-4">
              
              <a
                href="https://github.com/rusiru-19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-muted transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 .297c-6.63 0-12 5.373-12 12 
                    0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                    -.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729
                    1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
                    3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.334
                    -5.466-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.523
                    .117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404
                    c1.02.004 2.045.137 3.003.404 2.29-1.552 3.296-1.23 
                    3.296-1.23.655 1.653.242 2.873.12 3.176.77.84 1.234 
                    1.912 1.234 3.222 0 4.61-2.803 5.625-5.475 5.921.43.37.814 
                    1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 
                    0 .322.216.694.825.576C20.565 22.092 24 17.592 
                    24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>

                <span className="hidden sm:inline">GitHub</span>
              </a>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-xl border border-border hover:bg-muted transition-all"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">
                SEO Data
              </h2>

              <SEOForm data={seoData} onChange={setSeoData} />
            </div>

            {/* Preview */}
            <div className="space-y-6">
              
              {/* SEO Visual Preview */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="border-b border-border px-5 py-4 flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-lg">
                      SEO Preview
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      How your metadata appears
                    </p>
                  </div>

                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    <Code2 className="w-4 h-4" />
                    Get Code
                  </button>
                </div>

                {/* <div className="p-6">
                  <TemplatePreview data={seoData} />
                </div> */}
              </div>

              {/* Google Style Preview */}
          <div className="space-y-6">

  {/* Google Preview */}
  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
      Google Search Preview
    </p>

    <div className="space-y-1">
      <h3 className="text-blue-500 text-xl hover:underline cursor-pointer">
        {seoData.title}
      </h3>

      <p className="text-green-600 text-sm">
        {seoData.siteUrl}
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {seoData.description}
      </p>
    </div>
  </div>

  {/* Facebook Preview */}
  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
      Facebook Share Preview
    </p>

    <div className="border border-border rounded-xl overflow-hidden max-w-xl bg-background">
      <img
        src={seoData.ogImage}
        alt="Facebook Preview"
        className="w-full h-56 object-cover"
      />

      <div className="p-4 space-y-2">
        <p className="text-xs uppercase text-muted-foreground">
          {seoData.siteUrl.replace(/^https?:\/\//, "")}
        </p>

        <h3 className="font-semibold text-lg leading-tight">
          {seoData.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {seoData.description}
        </p>
      </div>
    </div>
  </div>

  {/* LinkedIn Preview */}
  {/* <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
      LinkedIn Share Preview
    </p>

    <div className="border border-border rounded-xl overflow-hidden max-w-xl bg-background">
      <img
        src={seoData.ogImage}
        alt="LinkedIn Preview"
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-base leading-snug mb-1">
          {seoData.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {seoData.description}
        </p>

        <p className="text-xs text-muted-foreground uppercase">
          {seoData.siteUrl.replace(/^https?:\/\//, "")}
        </p>
      </div>
    </div>
  </div> */}

  {/* WhatsApp Preview */}
  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
      WhatsApp Share Preview
    </p>

    <div className="max-w-md rounded-2xl border border-border bg-[#111B21] p-3 text-white">
      
      <div className="rounded-xl overflow-hidden bg-[#202C33] border border-white/10">
        <img
          src={seoData.ogImage}
          alt="WhatsApp Preview"
          className="w-full h-44 object-cover"
        />

        <div className="p-3">
          <h3 className="font-medium text-sm leading-snug mb-1">
            {seoData.title}
          </h3>

          <p className="text-xs text-gray-300 line-clamp-2 mb-2">
            {seoData.description}
          </p>

          <p className="text-[11px] text-gray-400">
            {seoData.siteUrl}
          </p>
        </div>
      </div>
    </div>
  </div>

</div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-background/95 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SEO Template Generator
            </div>

            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/rusiru-19/seo-template-generator"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://github.com/rusiru-19/seo-template-generator/issues"
                className="hover:text-primary transition-colors"
              >
                Issues
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              Built with ❤️ by rusiru-19
            </div>
          </div>
        </footer>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            
            <div className="w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    SEO Code Generator
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    Select a template and copy the generated code
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-muted-foreground hover:text-foreground text-xl"
                >
                  ✕
                </button>
              </div>
                <TemplatePreview data={seoData} />
      


            </div>
          </div>
        )}
      </div>
    </div>
  )
}