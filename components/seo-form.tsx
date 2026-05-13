"use client"

import { useState } from "react"
import { Info, ChevronDown, ChevronUp } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface SEOFormProps {
  data: {
    title: string
    description: string
    keywords: string
    author: string
    siteName: string
    siteUrl: string
    ogImage: string

    // Advanced SEO
    googleVerification: string
    twitterHandle: string
    themeColor: string
    robots: string
    canonical: string
  }

  onChange: (data: any) => void
}

export default function SEOForm({
  data,
  onChange,
}: SEOFormProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value })
  }

  const InfoLabel = ({
    title,
    info,
    htmlFor,
  }: {
    title: string
    info: string
    htmlFor: string
  }) => (
    <div className="flex items-center gap-2">
      <Label
        htmlFor={htmlFor}
        className="text-sm font-medium"
      >
        {title}
      </Label>

      <div className="relative group">
        <div className="w-4 h-4 rounded-full border border-border flex items-center justify-center text-[10px] text-muted-foreground cursor-help">
          i
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-6 z-50 hidden group-hover:block w-64 rounded-xl border border-border bg-background p-3 shadow-xl">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {info}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <form className="space-y-5">

      {/* Title */}
      <div>
        <InfoLabel
          title="Page Title"
          htmlFor="title"
          info="The main title shown on Google search results and browser tabs. Recommended length: 50–60 characters."
        />

        <Input
          id="title"
          value={data.title}
          onChange={(e) =>
            handleChange("title", e.target.value)
          }
          placeholder="Enter page title"
          className="mt-2"
        />

        <p className="text-xs text-muted-foreground mt-1">
          {data.title.length}/60 characters recommended
        </p>
      </div>

      {/* Description */}
      <div>
        <InfoLabel
          title="Meta Description"
          htmlFor="description"
          info="Short summary displayed in Google search results. Recommended length: 150–160 characters."
        />

        <Textarea
          id="description"
          value={data.description}
          onChange={(e) =>
            handleChange("description", e.target.value)
          }
          placeholder="Enter meta description"
          className="mt-2 resize-none"
          rows={3}
        />

        <p className="text-xs text-muted-foreground mt-1">
          {data.description.length}/160 characters recommended
        </p>
      </div>

      {/* Keywords */}
      <div>
        <InfoLabel
          title="Keywords"
          htmlFor="keywords"
          info="Comma separated keywords related to your website or event."
        />

        <Input
          id="keywords"
          value={data.keywords}
          onChange={(e) =>
            handleChange("keywords", e.target.value)
          }
          placeholder="keyword1, keyword2, keyword3"
          className="mt-2"
        />
      </div>

      {/* Author */}
      <div>
        <InfoLabel
          title="Author"
          htmlFor="author"
          info="Person or organization responsible for the website."
        />

        <Input
          id="author"
          value={data.author}
          onChange={(e) =>
            handleChange("author", e.target.value)
          }
          placeholder="Author name"
          className="mt-2"
        />
      </div>

      {/* Site Name */}
      <div>
        <InfoLabel
          title="Site Name"
          htmlFor="siteName"
          info="Your website or brand name shown in social previews."
        />

        <Input
          id="siteName"
          value={data.siteName}
          onChange={(e) =>
            handleChange("siteName", e.target.value)
          }
          placeholder="Your site name"
          className="mt-2"
        />
      </div>

      {/* Site URL */}
      <div>
        <InfoLabel
          title="Site URL"
          htmlFor="siteUrl"
          info="Main website URL used for canonical and Open Graph metadata."
        />

        <Input
          id="siteUrl"
          value={data.siteUrl}
          onChange={(e) =>
            handleChange("siteUrl", e.target.value)
          }
          placeholder="https://example.com"
          className="mt-2"
        />
      </div>

      {/* OG Image */}
      <div>
        <InfoLabel
          title="OG Image URL"
          htmlFor="ogImage"
          info="Image shown when your website is shared on Facebook, LinkedIn, WhatsApp, and Discord."
        />

        <Input
          id="ogImage"
          value={data.ogImage}
          onChange={(e) =>
            handleChange("ogImage", e.target.value)
          }
          placeholder="https://example.com/og-image.jpg"
          className="mt-2"
        />
      </div>

      {/* Advanced SEO */}
      <div className="border border-border rounded-2xl overflow-hidden">
        
        <button
          type="button"
          onClick={() =>
            setShowAdvanced(!showAdvanced)
          }
          className="w-full flex items-center justify-between px-4 py-4 hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <h3 className="font-medium">
              Advanced SEO
            </h3>

            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              Pro
            </span>
          </div>

          {showAdvanced ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {showAdvanced && (
          <div className="border-t border-border p-4 space-y-5">

            {/* Google Verification */}
            <div>
              <InfoLabel
                title="Google Verification Code"
                htmlFor="googleVerification"
                info="Used to verify your site ownership in Google Search Console."
              />

              <Input
                id="googleVerification"
                value={data.googleVerification}
                onChange={(e) =>
                  handleChange(
                    "googleVerification",
                    e.target.value
                  )
                }
                placeholder="google-site-verification=..."
                className="mt-2"
              />
            </div>

            {/* Twitter Handle */}
            <div>
              <InfoLabel
                title="Twitter Handle"
                htmlFor="twitterHandle"
                info="Your Twitter/X username for Twitter card metadata."
              />

              <Input
                id="twitterHandle"
                value={data.twitterHandle}
                onChange={(e) =>
                  handleChange(
                    "twitterHandle",
                    e.target.value
                  )
                }
                placeholder="@yourhandle"
                className="mt-2"
              />
            </div>

            {/* Theme Color */}
            <div>
              <InfoLabel
                title="Theme Color"
                htmlFor="themeColor"
                info="Controls the browser UI color on mobile devices."
              />

              <Input
                id="themeColor"
                value={data.themeColor}
                onChange={(e) =>
                  handleChange(
                    "themeColor",
                    e.target.value
                  )
                }
                placeholder="#000000"
                className="mt-2"
              />
            </div>

            {/* Robots */}
            <div>
              <InfoLabel
                title="Robots Directive"
                htmlFor="robots"
                info="Controls how search engines crawl and index your website."
              />

              <Input
                id="robots"
                value={data.robots}
                onChange={(e) =>
                  handleChange("robots", e.target.value)
                }
                placeholder="index, follow"
                className="mt-2"
              />
            </div>

            {/* Canonical */}
            <div>
              <InfoLabel
                title="Canonical URL"
                htmlFor="canonical"
                info="Prevents duplicate content issues by specifying the preferred URL."
              />

              <Input
                id="canonical"
                value={data.canonical}
                onChange={(e) =>
                  handleChange(
                    "canonical",
                    e.target.value
                  )
                }
                placeholder="https://example.com"
                className="mt-2"
              />
            </div>
          </div>
        )}
      </div>
    </form>
  )
}