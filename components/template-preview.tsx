"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HtmlTemplate from "./html-template"
import ReactTemplate from "./react-template"
import VueTemplate from "./vue-template"
import AngularTemplate from "./angular-template"

interface TemplatePreviewProps {
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

export default function TemplatePreview({ data }: TemplatePreviewProps) {
  const [activeTab, setActiveTab] = useState("html")

  return (
    <div className="flex flex-col h-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1">
        <div className="border-b border-border">
          <TabsList className="flex w-full justify-start gap-2 rounded-2xl bg-popover/80 dark:bg-popover/30 p-1 border border-input shadow-sm">
            <TabsTrigger
              value="html"
      className="flex-1 text-sm font-medium rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow"
            >
              HTML
            </TabsTrigger>
            <TabsTrigger
              value="react"
              className="flex-1 text-sm font-medium rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow"
            >
              Next.Js
            </TabsTrigger>
            <TabsTrigger
              value="vue"
              className="flex-1 text-sm font-medium rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow"
            >
              Vue
            </TabsTrigger>
            <TabsTrigger
              value="angular"
              className="flex-1 text-sm font-medium rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow"
            >
              Angular
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <TabsContent value="html" className="mt-0">
            <HtmlTemplate data={data} />
          </TabsContent>
          <TabsContent value="react" className="mt-0">
            <ReactTemplate data={data} />
          </TabsContent>
          <TabsContent value="vue" className="mt-0">
            <VueTemplate data={data} />
          </TabsContent>
          <TabsContent value="angular" className="mt-0">
            <AngularTemplate data={data} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
