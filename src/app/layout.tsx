import type { Metadata } from "next"
import "./globals.css"
import { DashboardHeader } from "@/components/app/dashboard-header"

export const metadata: Metadata = {
  title: "MissionFUSE",
  description: "MissionFUSE Dashboard",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <DashboardHeader />
        {children}
      </body>
    </html>
  )
}