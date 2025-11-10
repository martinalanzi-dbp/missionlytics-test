"use client"

import { useState } from "react"
import { WorkspaceCard } from "@/components/app/workspace-card"

// Mock data for workspaces - 12 cards (3x4 grid)
const workspaces = [
  {
    id: 1,
    title: "Workspace Title",
    icon: "pin" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Strong Indicator", variant: "strong" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 2,
    title: "Workspace Title",
    icon: "pin" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Standard Indicator", variant: "standard" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 3,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Strong Indicator", variant: "strong" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 4,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Elevated Indicator", variant: "elevated" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 5,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Elevated Indicator", variant: "elevated" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 6,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Strong Indicator", variant: "strong" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 7,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Elevated Indicator", variant: "elevated" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 8,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Elevated Indicator", variant: "elevated" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 9,
    title: "This is a really really long title for a works...",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Strong Indicator", variant: "strong" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 10,
    title: "Workspace Title",
    icon: "pin" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Standard Indicator", variant: "standard" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 11,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Elevated Indicator", variant: "elevated" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
  {
    id: 12,
    title: "Workspace Title",
    icon: "lock" as const,
    customers: 12,
    devices: 8,
    staticIPs: 4,
    counterparties: 30,
    amount: "$800,340",
    indicator: { label: "Strong Indicator", variant: "strong" as const },
    lastUpdated: "09/09/25, 08:30 PM",
  },
]

export default function WorkspacesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "archived">("all")

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Title and Sub-navigation */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Workspaces</h1>

          {/* Tabs */}
          <div className="flex gap-6 border-b mb-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`
                pb-2 text-sm font-medium transition-colors
                ${
                  activeTab === "all"
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              All Workspaces
            </button>
            <button
              onClick={() => setActiveTab("archived")}
              className={`
                pb-2 text-sm font-medium transition-colors
                ${
                  activeTab === "archived"
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              Archived
            </button>
          </div>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {workspaces.map((workspace) => (
            <WorkspaceCard key={workspace.id} {...workspace} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Load more Workspaces
          </button>
        </div>
      </div>
    </div>
  )
}

