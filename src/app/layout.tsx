import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/app/site-header"
import { Sidebar } from "@/components/app/sidebar"

export const metadata: Metadata = {
  title: "UI Starter",
  description: "Minimal Next.js + Tailwind + shadcn layout",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteHeader />
        <div className="mx-auto flex w-full max-w-6xl">
          <Sidebar />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-3xl p-6 md:p-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}