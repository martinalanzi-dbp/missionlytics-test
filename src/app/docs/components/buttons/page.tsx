"use client"

import { Button } from "@/components/ui/button"
import { ButtonFigma } from "@/components/ui/button-figma"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface ButtonComparisonProps {
  figmaVariant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  shadcnVariant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  title: string
  description: string
  figmaProps: {
    background: string
    foreground: string
    border: string
    radius: string
    fontSize: string
    padding: string
  }
  shadcnProps: {
    background: string
    foreground: string
    border: string
    radius: string
    fontSize: string
    padding: string
  }
}

const ButtonComparisonCard = ({
  figmaVariant,
  shadcnVariant,
  title,
  description,
  figmaProps,
  shadcnProps,
}: ButtonComparisonProps) => {
  const sizes = ["sm", "default", "lg"] as const

  const getMatchIcon = (figmaValue: string, shadcnValue: string) => {
    // Normalize for comparison
    const normalized = (val: string) => val.toLowerCase().replace(/\s+/g, " ")
    return normalized(figmaValue) === normalized(shadcnValue) ? (
      <span className="text-green-600">✅</span>
    ) : (
      <span className="text-red-600">❌</span>
    )
  }

  return (
    <div className="border rounded-xl p-6 gap-6 space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>

      {/* Button Comparison - Two Columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Figma Button */}
        <div className="space-y-4">
          <h3 className="font-medium text-sm text-muted-foreground">Figma-based Button</h3>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <ButtonFigma key={size} variant={figmaVariant} size={size}>
                Label
              </ButtonFigma>
            ))}
          </div>
        </div>

        {/* Right: shadcn Button */}
        <div className="space-y-4">
          <h3 className="font-medium text-sm text-muted-foreground">shadcn/ui Button</h3>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <Button key={size} variant={shadcnVariant} size={size}>
                Label
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Diff Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-3 font-medium">Property</th>
              <th className="text-left p-3 font-medium">Figma</th>
              <th className="text-left p-3 font-medium">Code</th>
              <th className="text-center p-3 font-medium">Match</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3 font-medium">Background</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{figmaProps.background}</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{shadcnProps.background}</td>
              <td className="p-3 text-center">{getMatchIcon(figmaProps.background, shadcnProps.background)}</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Foreground</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{figmaProps.foreground}</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{shadcnProps.foreground}</td>
              <td className="p-3 text-center">{getMatchIcon(figmaProps.foreground, shadcnProps.foreground)}</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Border</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{figmaProps.border}</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{shadcnProps.border}</td>
              <td className="p-3 text-center">{getMatchIcon(figmaProps.border, shadcnProps.border)}</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Radius</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{figmaProps.radius}</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{shadcnProps.radius}</td>
              <td className="p-3 text-center">{getMatchIcon(figmaProps.radius, shadcnProps.radius)}</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Font Size</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{figmaProps.fontSize}</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{shadcnProps.fontSize}</td>
              <td className="p-3 text-center">{getMatchIcon(figmaProps.fontSize, shadcnProps.fontSize)}</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Padding</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{figmaProps.padding}</td>
              <td className="p-3 text-muted-foreground font-mono text-xs">{shadcnProps.padding}</td>
              <td className="p-3 text-center">{getMatchIcon(figmaProps.padding, shadcnProps.padding)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ButtonComparisonPage() {
  // Extract token values from Figma design
  const figmaTokens = {
    primary: {
      bg: "#004b87",
      text: "#ffffff",
      border: "#004b87",
    },
    destructive: {
      bg: "#dc2626",
      text: "#ffffff",
      border: "#dc2626",
    },
    secondary: {
      bg: "#ffffff",
      text: "#121926",
      border: "#e3e8ef",
    },
    ghost: {
      bg: "transparent",
      text: "#004b87",
      border: "transparent",
    },
  }

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Button Component Comparison</h1>
        <p className="text-muted-foreground">
          Side-by-side comparison of Figma-based buttons vs shadcn/ui buttons. 
          Extracted from Solar for Lexipol Design System.
        </p>
      </div>

      <ButtonComparisonCard
        figmaVariant="default"
        shadcnVariant="default"
        title="Primary / Default"
        description="Primary action button with blue background"
        figmaProps={{
          background: `var(--buttons-primary-default-background, ${figmaTokens.primary.bg})`,
          foreground: `var(--buttons-primary-default-text, ${figmaTokens.primary.text})`,
          border: `var(--buttons-primary-default-stroke, ${figmaTokens.primary.border})`,
          radius: "SM/MD: 4px, LG: 8px",
          fontSize: "SM: 16px, MD: 18px, LG: 22px",
          padding: "SM: 16px×8px, MD: 24px×12px, LG: 32px×16px",
        }}
        shadcnProps={{
          background: "CSS Variable (hsl)",
          foreground: "CSS Variable (hsl)",
          border: "none",
          radius: "6px (rounded-md)",
          fontSize: "SM: 12px, Default: 14px, LG: 14px",
          padding: "SM: 12px×6px, Default: 16px×8px, LG: 32px×8px",
        }}
      />

      <ButtonComparisonCard
        figmaVariant="destructive"
        shadcnVariant="destructive"
        title="Destructive"
        description="Destructive action button"
        figmaProps={{
          background: `var(--buttons-destructive-default-background, ${figmaTokens.destructive.bg})`,
          foreground: `var(--buttons-destructive-default-text, ${figmaTokens.destructive.text})`,
          border: `var(--buttons-destructive-default-stroke, ${figmaTokens.destructive.border})`,
          radius: "SM/MD: 4px, LG: 8px",
          fontSize: "SM: 16px, MD: 18px, LG: 22px",
          padding: "SM: 16px×8px, MD: 24px×12px, LG: 32px×16px",
        }}
        shadcnProps={{
          background: "CSS Variable (hsl)",
          foreground: "CSS Variable (hsl)",
          border: "none",
          radius: "6px (rounded-md)",
          fontSize: "SM: 12px, Default: 14px, LG: 14px",
          padding: "SM: 12px×6px, Default: 16px×8px, LG: 32px×8px",
        }}
      />

      <ButtonComparisonCard
        figmaVariant="secondary"
        shadcnVariant="secondary"
        title="Secondary"
        description="Secondary action button with white background"
        figmaProps={{
          background: `var(--buttons-secondary-default-background, ${figmaTokens.secondary.bg})`,
          foreground: `var(--buttons-secondary-default-text, ${figmaTokens.secondary.text})`,
          border: `var(--buttons-secondary-default-stroke, ${figmaTokens.secondary.border})`,
          radius: "SM/MD: 4px, LG: 8px",
          fontSize: "SM: 16px, MD: 18px, LG: 22px",
          padding: "SM: 16px×8px, MD: 24px×12px, LG: 32px×16px",
        }}
        shadcnProps={{
          background: "CSS Variable (hsl)",
          foreground: "CSS Variable (hsl)",
          border: "none",
          radius: "6px (rounded-md)",
          fontSize: "SM: 12px, Default: 14px, LG: 14px",
          padding: "SM: 12px×6px, Default: 16px×8px, LG: 32px×8px",
        }}
      />

      <ButtonComparisonCard
        figmaVariant="ghost"
        shadcnVariant="ghost"
        title="Ghost"
        description="Ghost button with transparent background"
        figmaProps={{
          background: `var(--buttons-ghost-default-background, ${figmaTokens.ghost.bg})`,
          foreground: `var(--buttons-ghost-default-text, ${figmaTokens.ghost.text})`,
          border: `var(--buttons-ghost-default-stroke, ${figmaTokens.ghost.border})`,
          radius: "SM/MD: 4px, LG: 8px",
          fontSize: "SM: 16px, MD: 18px, LG: 22px",
          padding: "SM: 16px×4px, MD: 24px×12px, LG: 32px×16px",
        }}
        shadcnProps={{
          background: "transparent",
          foreground: "CSS Variable (hsl)",
          border: "none",
          radius: "6px (rounded-md)",
          fontSize: "SM: 12px, Default: 14px, LG: 14px",
          padding: "SM: 12px×6px, Default: 16px×8px, LG: 32px×8px",
        }}
      />

      <ButtonComparisonCard
        figmaVariant="outline"
        shadcnVariant="outline"
        title="Outline"
        description="Outlined button with border"
        figmaProps={{
          background: "transparent",
          foreground: `var(--buttons-ghost-default-text, ${figmaTokens.ghost.text})`,
          border: `var(--buttons-secondary-default-stroke, ${figmaTokens.secondary.border})`,
          radius: "SM/MD: 4px, LG: 8px",
          fontSize: "SM: 16px, MD: 18px, LG: 22px",
          padding: "SM: 16px×8px, MD: 24px×12px, LG: 32px×16px",
        }}
        shadcnProps={{
          background: "CSS Variable (hsl)",
          foreground: "CSS Variable (hsl)",
          border: "border-input",
          radius: "6px (rounded-md)",
          fontSize: "SM: 12px, Default: 14px, LG: 14px",
          padding: "SM: 12px×6px, Default: 16px×8px, LG: 32px×8px",
        }}
      />

      <ButtonComparisonCard
        figmaVariant="link"
        shadcnVariant="link"
        title="Link"
        description="Link-style button with underline"
        figmaProps={{
          background: "transparent",
          foreground: `var(--buttons-primary-default-background, ${figmaTokens.primary.bg})`,
          border: "none",
          radius: "SM/MD: 4px, LG: 8px",
          fontSize: "SM: 16px, MD: 18px, LG: 22px",
          padding: "SM: 16px×4px, MD: 24px×12px, LG: 32px×16px",
        }}
        shadcnProps={{
          background: "transparent",
          foreground: "CSS Variable (hsl)",
          border: "none",
          radius: "6px (rounded-md)",
          fontSize: "SM: 12px, Default: 14px, LG: 14px",
          padding: "SM: 12px×6px, Default: 16px×8px, LG: 32px×8px",
        }}
      />

      {/* Documentation Link */}
      <Card className="p-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1">Button Documentation</h3>
            <p className="text-sm text-muted-foreground">
              View comprehensive button documentation including usage guidelines, best practices, and accessibility information.
            </p>
          </div>
          <Button asChild>
            <Link href="/docs/components/buttons/documentation">View Documentation</Link>
          </Button>
        </div>
      </Card>

      {/* Summary */}
      <div className="border rounded-xl p-6 bg-muted/50 space-y-4">
        <h2 className="text-xl font-semibold">Generation Summary</h2>
        <div className="space-y-2 text-sm">
          <p><strong>Variants created:</strong> 6 (default/primary, secondary, destructive, outline, ghost, link)</p>
          <p><strong>Sizes created:</strong> 3 (sm, default/md, lg)</p>
          <p><strong>States implemented:</strong> Default, Hover, Focus, Disabled</p>
          <p><strong>Design tokens mapped:</strong> All Figma CSS variables successfully extracted and mapped</p>
          <p><strong>Unmapped tokens:</strong> None - all tokens from Figma design were successfully implemented</p>
          <p><strong>Fallbacks used:</strong> CSS custom properties with hex color fallbacks for all variants</p>
          <p><strong>Source:</strong> Solar for Lexipol Design System (Figma)</p>
        </div>
      </div>
    </div>
  )
}
