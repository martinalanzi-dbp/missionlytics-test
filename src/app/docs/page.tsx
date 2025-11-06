import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Square, 
  MousePointer2, 
  LayoutGrid, 
  Users, 
  MessageSquare,
  Image as ImageIcon,
  CheckSquare,
  AlertCircle,
  PanelRight,
  Settings2
} from "lucide-react"

interface ComponentCardProps {
  name: string
  description: string
  href?: string
  icon: React.ReactNode
  status?: "available" | "coming-soon" | "documentation"
  figmaNodeId?: string
}

const ComponentCard = ({ name, description, href, icon, status = "available", figmaNodeId }: ComponentCardProps) => {
  const cardContent = (
    <Card className="p-6 hover:shadow-md transition-shadow h-full">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            {status === "coming-soon" && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                Coming Soon
              </span>
            )}
            {status === "documentation" && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Docs Only
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {figmaNodeId && (
            <p className="text-xs text-muted-foreground font-mono">
              Figma: {figmaNodeId}
            </p>
          )}
        </div>
      </div>
    </Card>
  )

  if (href && status === "available") {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default function DocsPage() {
  const components = [
    {
      name: "Buttons",
      description: "Primary, Secondary, Destructive, Ghost, Outline, and Link variants. Multiple sizes (SM, MD, LG) with states (Default, Hover, Focus, Disabled). Includes icon buttons and loading states.",
      href: "/docs/components/buttons",
      icon: <Square className="h-5 w-5" />,
      status: "available" as const,
      figmaNodeId: "5222:24532"
    },
    {
      name: "Social Media Buttons",
      description: "Facebook, Google, and Apple authentication buttons. Available in White, Brand, and Gray themes. Supports SM, MD, and LG sizes with Default, Hover, and Focus states.",
      href: undefined,
      icon: <Users className="h-5 w-5" />,
      status: "coming-soon" as const,
      figmaNodeId: "5222:27099"
    },
    {
      name: "Combo Button",
      description: "Dropdown button component combining button and menu functionality. Supports Primary and Secondary White variants with Open, Hover, Focus, and Disabled states.",
      href: undefined,
      icon: <MousePointer2 className="h-5 w-5" />,
      status: "coming-soon" as const,
      figmaNodeId: "5222:25076"
    },
    {
      name: "Social Icons",
      description: "Collection of social platform icons including Facebook, Twitter, Instagram, LinkedIn, Google, YouTube, Apple, and more. Available in Brand, Gray, and White color variants with Default and Hover states.",
      href: undefined,
      icon: <ImageIcon className="h-5 w-5" />,
      status: "coming-soon" as const,
      figmaNodeId: "5222:26157"
    },
    {
      name: "Checkbox",
      description: "Selection control component for multiple choices. Supports different sizes and states. Part of the form components library.",
      href: undefined,
      icon: <CheckSquare className="h-5 w-5" />,
      status: "coming-soon" as const,
      figmaNodeId: "7747:16818"
    },
    {
      name: "Modal / Confirmation",
      description: "Confirmation dialogs and modal components for delete, remove, and discard actions. Includes proper messaging and recovery options.",
      href: undefined,
      icon: <PanelRight className="h-5 w-5" />,
      status: "coming-soon" as const,
      figmaNodeId: "11444:16044"
    },
    {
      name: "Button Anatomy",
      description: "Documentation showing button structure including leading icons, labels, trailing icons, and backgrounds. Includes typography and spacing specifications for all sizes.",
      href: undefined,
      icon: <LayoutGrid className="h-5 w-5" />,
      status: "documentation" as const,
      figmaNodeId: "10807:39217"
    },
    {
      name: "Button Guidelines",
      description: "Comprehensive documentation covering button purpose, anatomy, spacing, sizes, types (Primary, Secondary, Ghost, Success, Destructive), and accessibility guidelines.",
      href: undefined,
      icon: <MessageSquare className="h-5 w-5" />,
      status: "documentation" as const,
      figmaNodeId: "5378:2879"
    },
  ]

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Component Library</h1>
        <p className="text-muted-foreground max-w-2xl">
          Complete collection of components from the Solar for Lexipol Design System. 
          Each component has been extracted from Figma and is ready for implementation.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="h-4 w-4" />
          <span>
            Source: <a 
              href="https://www.figma.com/design/BDZd4LSDavFuFyEZdYjGUO/Solar-for-Lexipol" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Solar for Lexipol (Figma)
            </a>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {components.map((component) => (
          <ComponentCard
            key={component.name}
            name={component.name}
            description={component.description}
            href={component.href}
            icon={component.icon}
            status={component.status}
            figmaNodeId={component.figmaNodeId}
          />
        ))}
      </div>

      <div className="rounded-lg border bg-muted/50 p-6 space-y-4">
        <h2 className="text-xl font-semibold">Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-2xl font-bold text-primary">
              {components.filter(c => c.status === "available").length}
            </div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-muted-foreground">
              {components.filter(c => c.status === "coming-soon").length}
            </div>
            <div className="text-sm text-muted-foreground">Coming Soon</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {components.filter(c => c.status === "documentation").length}
            </div>
            <div className="text-sm text-muted-foreground">Documentation</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{components.length}</div>
            <div className="text-sm text-muted-foreground">Total Components</div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="default">
            <Link href="/docs/components/buttons">View Button Comparison</Link>
          </Button>
          <Button asChild variant="outline">
            <a 
              href="https://www.figma.com/design/BDZd4LSDavFuFyEZdYjGUO/Solar-for-Lexipol" 
              target="_blank" 
              rel="noreferrer"
            >
              Open Figma File
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
