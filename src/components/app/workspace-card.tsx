import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Pin, Lock, Users, Tablet, Globe, Briefcase, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

interface WorkspaceCardProps {
  id: number
  title: string
  icon?: "pin" | "lock"
  customers: number
  devices: number
  staticIPs: number
  counterparties: number
  amount: string
  indicator: {
    label: string
    variant: "strong" | "standard" | "elevated"
  }
  lastUpdated: string
}

export function WorkspaceCard({
  id,
  title,
  icon = "lock",
  customers,
  devices,
  staticIPs,
  counterparties,
  amount,
  indicator,
  lastUpdated,
}: WorkspaceCardProps) {
  const IconComponent = icon === "pin" ? Pin : Lock
  const iconColor = icon === "pin" ? "text-amber-500" : "text-blue-600"

  const indicatorStyles = {
    strong: "bg-red-600 text-white hover:bg-red-600",
    standard: "bg-blue-600 text-white hover:bg-blue-600",
    elevated: "bg-orange-500 text-white hover:bg-orange-500",
  }

  return (
    <Link href={`/workspaces/${id}`}>
      <Card className="hover:shadow-md transition-shadow bg-white cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <IconComponent className={cn("h-5 w-5 flex-shrink-0", iconColor)} />
            <h3 className="font-semibold text-sm truncate flex-1">{title}</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
        {/* Metrics Row 1 */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{customers} Customers</span>
          </div>
          <div className="flex items-center gap-1">
            <Tablet className="h-3.5 w-3.5" />
            <span>{devices} Devices</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" />
            <span>{staticIPs} Static IPs</span>
          </div>
        </div>

        {/* Metrics Row 2 */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{counterparties} Counterparties</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-3.5 w-3.5" />
            <span>{amount}</span>
          </div>
        </div>

        {/* Indicator Badge */}
        <div>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium cursor-pointer",
              indicatorStyles[indicator.variant]
            )}
          >
            {indicator.label}
          </span>
        </div>

        {/* Last Updated */}
        <p className="text-xs text-muted-foreground">Last updated {lastUpdated}</p>
      </CardContent>
    </Card>
    </Link>
  )
}

