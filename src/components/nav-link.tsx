"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface NavLinkProps {
  href: string
  icon: LucideIcon
  children: React.ReactNode
  badge?: string
}

export function NavLink({ href, icon: Icon, children, badge }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-black text-white font-semibold"
          : "text-zinc-700 hover:bg-zinc-100"
      )}
    >
      <Icon className={cn("h-4 w-4", isActive && "text-white")} />
      <span>{children}</span>
      {badge && (
        <span className="ml-auto rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600">
          {badge}
        </span>
      )}
    </Link>
  )
}

