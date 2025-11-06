import { 
  LayoutDashboard, 
  BookOpen, 
  Palette, 
  Settings 
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  icon: typeof LayoutDashboard
  badge?: string
}

export const navItems: NavItem[] = [
  {
    label: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Docs",
    href: "/docs",
    icon: BookOpen,
  },
  {
    label: "Button Comparison",
    href: "/docs/components/buttons",
    icon: Palette,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

