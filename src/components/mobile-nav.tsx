"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { NavLink } from "@/components/nav-link"
import { navItems } from "@/lib/nav"
import { Menu } from "lucide-react"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72">
        <ScrollArea className="h-screen w-full">
          <div className="p-6">
            {/* Brand */}
            <div className="font-semibold text-zinc-900">UI Starter</div>
            
            <Separator className="my-4" />
            
            {/* Menu Section */}
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Menu
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    badge={item.badge}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

