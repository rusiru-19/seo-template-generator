"use client"
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
  }
  onChange: (data: any) => void
}

export default function SEOForm({ data, onChange }: SEOFormProps) {
  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="title" className="text-sm font-medium">
          Page Title
        </Label>
        <Input
          id="title"
          value={data.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Enter page title"
          className="mt-1"
        />
        <p className="text-xs text-muted-foreground mt-1">{data.title.length}/60 characters (recommended)</p>
      </div>

      <div>
        <Label htmlFor="description" className="text-sm font-medium">
          Meta Description
        </Label>
        <Textarea
          id="description"
          value={data.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Enter meta description"
          className="mt-1 resize-none"
          rows={3}
        />
        <p className="text-xs text-muted-foreground mt-1">{data.description.length}/160 characters (recommended)</p>
      </div>

      <div>
        <Label htmlFor="keywords" className="text-sm font-medium">
          Keywords
        </Label>
        <Input
          id="keywords"
          value={data.keywords}
          onChange={(e) => handleChange("keywords", e.target.value)}
          placeholder="keyword1, keyword2, keyword3"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="author" className="text-sm font-medium">
          Author
        </Label>
        <Input
          id="author"
          value={data.author}
          onChange={(e) => handleChange("author", e.target.value)}
          placeholder="Author name"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="siteName" className="text-sm font-medium">
          Site Name
        </Label>
        <Input
          id="siteName"
          value={data.siteName}
          onChange={(e) => handleChange("siteName", e.target.value)}
          placeholder="Your site name"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="siteUrl" className="text-sm font-medium">
          Site URL
        </Label>
        <Input
          id="siteUrl"
          value={data.siteUrl}
          onChange={(e) => handleChange("siteUrl", e.target.value)}
          placeholder="Your site URL"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="ogImage" className="text-sm font-medium">
          OG Image URL
        </Label>
        <Input
          id="ogImage"
          value={data.ogImage}
          onChange={(e) => handleChange("ogImage", e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="mt-1"
        />
      </div>
    </form>
  )
}
