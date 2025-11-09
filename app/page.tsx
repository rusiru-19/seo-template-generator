"use client"

import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import SEOForm from "@/components/seo-form"
import TemplatePreview from "@/components/template-preview"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [seoData, setSeoData] = useState({
    title: "My Awesome Website",
    description: "Welcome to my awesome website with great content",
    keywords: "web, design, seo",
    author: "John Doe",
    siteName: "My Site",
    ogImage: "https://example.com/image.jpg",
    siteUrl: "https://example.com"
  })

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Header with Theme Switcher */}
<header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
  <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
    {/* Left: Logo / Title */}
    <div className="flex items-center gap-2">
      <h1 className="text-2xl font-bold">SEO Template Generator</h1>
    </div>

    {/* Right: GitHub link + Theme toggle */}
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/rusiru-19"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.004 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.803 5.625-5.475 5.921.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
        <span className="hidden sm:inline">GitHub</span>
      </a>

      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  </div>
</header>


        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-120px)]">
            {/* Left Side - Form */}
            <div className="flex flex-col">
              <div className="bg-card rounded-lg border border-border p-6 flex-1 overflow-auto">
                <h2 className="text-lg font-semibold mb-4">SEO Data</h2>
                <SEOForm data={seoData} onChange={setSeoData} />
              </div>
            </div>

            {/* Right Side - Preview */}
            <div className="flex flex-col">
              <div className="bg-card rounded-lg border border-border flex-1 overflow-hidden flex flex-col">
                <TemplatePreview data={seoData} />
              </div>
            </div>
          </div>
        </main>
<footer className="border-t border-border bg-background/95 backdrop-blur py-6 mt-12">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Left: Open-source notice */}
    <div className="text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} SEO Template Generator. Open Source on GitHub.
    </div>
    
    {/* Center: GitHub & links */}
    <div className="flex gap-4 text-sm">
      <a
        href="https://github.com/rusiru-19/seo-template-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.004 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.803 5.625-5.475 5.921.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
        GitHub
      </a>
      <a href="https://github.com/rusiru-19/seo-template-generator" className="hover:text-primary transition-colors">
        Contribute
      </a>
      <a href="https://github.com/rusiru-19/seo-template-generator/issues" className="hover:text-primary transition-colors">
        Issues
      </a>
    </div>
    
    {/* Right: Optional credit */}
    <div className="text-sm text-muted-foreground">
      Built with ❤️ by rusiru-19
    </div>
  </div>
</footer>


      </div>
      
    </div>
  )
}
