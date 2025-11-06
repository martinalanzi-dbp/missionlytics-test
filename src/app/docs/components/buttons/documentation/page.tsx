"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Palette, Code, Info } from "lucide-react"
import Link from "next/link"

export default function ButtonDocumentationPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Link href="/docs/components/buttons" className="text-muted-foreground hover:text-foreground">
            ← Back to Button Comparison
          </Link>
        </div>
        
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Button Documentation</h1>
          <p className="text-muted-foreground">
            Complete button component documentation from Zeroheight and Figma design system.
          </p>
        </div>
      </div>

      {/* Zeroheight Documentation Reference */}
      <Card className="p-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <div className="flex items-start gap-4">
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Zeroheight Documentation</h2>
            <p className="text-muted-foreground mb-4">
              The official button component documentation, including design guidelines, usage instructions, 
              code examples, and accessibility information, is available on Zeroheight.
            </p>
            <Button asChild variant="default">
              <a 
                href="https://zeroheight.com/682fcdd93/p/457be6-button" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Full Documentation
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Card>

      {/* Documentation Sections */}
      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Palette className="h-6 w-6" />
            Design Guidelines
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Button Variants</h3>
                <p className="text-muted-foreground mb-3">
                  Our button system includes multiple variants designed for different use cases and 
                  visual hierarchy within the interface.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li><strong>Primary:</strong> Main call-to-action buttons for primary user actions</li>
                  <li><strong>Secondary:</strong> Supporting actions that complement primary buttons</li>
                  <li><strong>Destructive:</strong> Actions that may have irreversible consequences</li>
                  <li><strong>Outline:</strong> Bordered buttons for secondary actions with emphasis</li>
                  <li><strong>Ghost:</strong> Minimal buttons for tertiary actions</li>
                  <li><strong>Link:</strong> Text-only buttons that look like links</li>
                </ul>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Button Sizes</h3>
                <p className="text-muted-foreground mb-3">
                  Button sizes are carefully designed to accommodate different layouts and emphasize 
                  hierarchy within the user interface.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold mb-1">Small (SM)</div>
                    <div className="text-muted-foreground">
                      Height: 36px<br />
                      Padding: 16px × 8px<br />
                      Font: 16px
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold mb-1">Medium (MD)</div>
                    <div className="text-muted-foreground">
                      Height: 44px<br />
                      Padding: 24px × 12px<br />
                      Font: 18px
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold mb-1">Large (LG)</div>
                    <div className="text-muted-foreground">
                      Height: 56px<br />
                      Padding: 32px × 16px<br />
                      Font: 22px
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Button States</h3>
                <p className="text-muted-foreground mb-3">
                  Each button variant supports multiple interactive states to provide clear user feedback.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li><strong>Default:</strong> Initial state when button is available</li>
                  <li><strong>Hover:</strong> State when user hovers over the button</li>
                  <li><strong>Focus:</strong> State when button receives keyboard focus</li>
                  <li><strong>Disabled:</strong> State when button is unavailable (use sparingly)</li>
                  <li><strong>Loading:</strong> State during async operations</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Code className="h-6 w-6" />
            Implementation
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Figma-Based Button Component</h3>
                <p className="text-muted-foreground mb-3">
                  We have implemented a Figma-based button component that matches the exact design 
                  specifications from the Solar for Lexipol design system.
                </p>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground mb-2">// Import the Figma-based button</div>
                  <div>import {"{ ButtonFigma }"} from "@/components/ui/button-figma"</div>
                  <div className="mt-2">
                    {"<ButtonFigma variant=\"default\" size=\"md\">"}
                  </div>
                  <div className="ml-4">  Button Label</div>
                  <div>{"</ButtonFigma>"}</div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">shadcn/ui Button Component</h3>
                <p className="text-muted-foreground mb-3">
                  For comparison and flexibility, we also maintain the standard shadcn/ui button component.
                </p>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground mb-2">// Import the shadcn/ui button</div>
                  <div>import {"{ Button }"} from "@/components/ui/button"</div>
                  <div className="mt-2">
                    {"<Button variant=\"default\" size=\"default\">"}
                  </div>
                  <div className="ml-4">  Button Label</div>
                  <div>{"</Button>"}</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Info className="h-6 w-6" />
            Usage Guidelines
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">When to Use Each Variant</h3>
                <ul className="space-y-3 text-sm">
                  <li className="border-l-4 border-primary pl-4">
                    <strong className="text-foreground">Primary:</strong> Use for the main action on a page 
                    or in a modal. There should typically be only one primary button per view.
                  </li>
                  <li className="border-l-4 border-secondary pl-4">
                    <strong className="text-foreground">Secondary:</strong> Use for secondary actions that 
                    don't require primary emphasis but are still important.
                  </li>
                  <li className="border-l-4 border-destructive pl-4">
                    <strong className="text-foreground">Destructive:</strong> Use for actions that delete 
                    or remove data. Always pair with confirmation dialogs when possible.
                  </li>
                  <li className="border-l-4 border-muted pl-4">
                    <strong className="text-foreground">Outline/Ghost:</strong> Use for tertiary actions 
                    or when you want a more subtle button appearance.
                  </li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li>All buttons should have clear, descriptive labels</li>
                  <li>Buttons must be keyboard accessible (tab, enter, space)</li>
                  <li>Focus states must be clearly visible</li>
                  <li>Avoid disabling buttons when possible - use loading states instead</li>
                  <li>Icon-only buttons must include aria-labels</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li>Use consistent button sizes within the same context</li>
                  <li>Maintain visual hierarchy with primary vs secondary buttons</li>
                  <li>Keep button labels concise and action-oriented</li>
                  <li>Provide immediate feedback on button interactions</li>
                  <li>Use loading states for async operations instead of disabling</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Resources */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-md transition-shadow">
              <Link href="/docs/components/buttons" className="block">
                <h3 className="font-semibold mb-2">Button Comparison</h3>
                <p className="text-sm text-muted-foreground">
                  Side-by-side comparison of Figma and shadcn/ui button implementations
                </p>
              </Link>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <a 
                href="https://www.figma.com/design/BDZd4LSDavFuFyEZdYjGUO/Solar-for-Lexipol?node-id=2677-17954" 
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  Figma Design File
                  <ExternalLink className="h-4 w-4" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  View the original button designs in Figma
                </p>
              </a>
            </Card>
          </div>
        </section>

        {/* Citation */}
        <div className="text-sm text-muted-foreground border-t pt-6">
          <p>
            <strong>Sources:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
            <li>
              <a 
                href="https://zeroheight.com/682fcdd93/p/457be6-button" 
                target="_blank" 
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Zeroheight Button Documentation
              </a>
            </li>
            <li>
              <a 
                href="https://www.figma.com/design/BDZd4LSDavFuFyEZdYjGUO/Solar-for-Lexipol" 
                target="_blank" 
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Solar for Lexipol Design System (Figma)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

