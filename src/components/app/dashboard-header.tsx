"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, ChevronDown } from "lucide-react"

export function DashboardHeader() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === "/workspaces") {
      return pathname === "/workspaces" || pathname?.startsWith("/workspaces/")
    }
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#004b87]">
      <div className="flex h-16 items-center">
        {/* Left: Logo Section */}
        <div className="flex h-full items-center bg-[#003d6b] px-6">
          <Shield className="mr-2 h-6 w-6 text-white" />
          <span className="text-lg font-semibold text-white">MissionFUSE</span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-1 items-center justify-center gap-8 px-8 h-full">
          <Link
            href="/workspaces"
            className={`text-sm font-medium transition-colors ${
              isActive("/workspaces")
                ? "text-white underline underline-offset-4 decoration-blue-300"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Workspaces
          </Link>
          <Link
            href="/networks"
            className={`text-sm font-medium transition-colors ${
              isActive("/networks")
                ? "text-white underline underline-offset-4 decoration-blue-300"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Networks
          </Link>
          <Link
            href="/fuse-data"
            className={`text-sm font-medium transition-colors ${
              isActive("/fuse-data")
                ? "text-white underline underline-offset-4 decoration-blue-300"
                : "text-gray-300 hover:text-white"
            }`}
          >
            FUSE Data
          </Link>
        </nav>

        {/* Right: User Menu */}
        <div className="flex items-center gap-2 px-6">
          <button className="flex items-center gap-2 rounded-full hover:bg-blue-600/20 p-1 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-sm font-medium text-white">
              ER
            </div>
            <ChevronDown className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}

