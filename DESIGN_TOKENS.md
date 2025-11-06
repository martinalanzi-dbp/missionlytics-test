# Design Tokens Documentation

## Source
Extracted from Figma: **Solar for Lexipol Design System**

**Component:** Button - Primary, Size SM, Status Default  
**Node ID:** `2677:17954`  
**Figma File:** [Solar for Lexipol](https://www.figma.com/design/BDZd4LSDavFuFyEZdYjGUO/Solar-for-Lexipol?node-id=2677-17954)

---

## Colors

### Button Primary - Default State

| Token | Value | Usage |
|-------|-------|-------|
| `--buttons-primary-default-background` | `#004b87` | Primary button background color |
| `--buttons-primary-default-stroke` | `#004b87` | Primary button border/stroke color |
| `--buttons-primary-default-text` | `#ffffff` | Primary button text color |

**Usage in code:**
```css
background: var(--buttons-primary-default-background, #004b87);
border-color: var(--buttons-primary-default-stroke, #004b87);
color: var(--buttons-primary-default-text, #ffffff);
```

---

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-1` | `4px` | Base spacing unit, border radius |
| `--spacing-2` | `8px` | Gap between elements, vertical padding |
| `--spacing-4` | `16px` | Horizontal padding |

**Usage examples:**
- Border radius: `border-radius: var(--spacing-1)` → `4px`
- Gap: `gap: var(--spacing-2)` → `8px`
- Padding: `padding: var(--spacing-2) var(--spacing-4)` → `8px 16px`

---

## Typography

### Button SM (Small)

| Property | Value |
|----------|-------|
| Font Family | `Inter` |
| Font Weight | `500` (Medium) |
| Font Size | `16px` |
| Line Height | `1.2` |
| Letter Spacing | `0.16px` |

**CSS Variables:**
```css
--button-sm-font-family: "Inter", sans-serif;
--button-sm-font-weight: 500;
--button-sm-font-size: 16px;
--button-sm-line-height: 1.2;
--button-sm-letter-spacing: 0.16px;
```

**Usage:**
```css
font-family: var(--button-sm-font-family);
font-weight: var(--button-sm-font-weight);
font-size: var(--button-sm-font-size);
line-height: var(--button-sm-line-height);
letter-spacing: var(--button-sm-letter-spacing);
```

---

## Sizing

### Icon Size

| Token | Value | Usage |
|-------|-------|-------|
| `--button-icon-sm` | `16px` | Small button icon size |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| Button | `4px` | Base border radius for buttons (matches `--spacing-1`) |

---

## Implementation Files

1. **TypeScript/JavaScript:** `src/lib/design-tokens.ts`
   - Exports structured token objects
   - Type-safe token access
   - Tailwind-compatible mappings

2. **CSS Variables:** `src/styles/theme.css`
   - CSS custom properties for runtime use
   - Organized by category
   - Includes fallback values

3. **Documentation:** `DESIGN_TOKENS.md` (this file)

---

## Usage in Components

### TypeScript/JavaScript

```typescript
import { designTokens } from "@/lib/design-tokens";

// Access tokens programmatically
const primaryBg = designTokens.colors.buttons.primary.default.background; // "#004b87"
const spacing = designTokens.spacing["2"]; // "8px"
```

### CSS/Tailwind

```css
.my-button {
  background: var(--buttons-primary-default-background);
  color: var(--buttons-primary-default-text);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--spacing-1);
  font-size: var(--button-sm-font-size);
}
```

### Tailwind Config (if extending)

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        "button-primary": {
          background: "#004b87",
          stroke: "#004b87",
          text: "#ffffff",
        },
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "4": "16px",
      },
    },
  },
};
```

---

## Notes

- All tokens include fallback values in CSS variables
- Figma variable structure maintained in CSS variable names (`--buttons/primary/default/background` → `--buttons-primary-default-background`)
- Tokens extracted from a specific component variant; other variants may have different values
- For additional variants, extract tokens from other Figma component nodes

---

## Future Extractions

To extract more design tokens:
1. Open component in Figma
2. Get node ID from URL or Figma desktop app
3. Use Figma MCP to extract design context
4. Update `design-tokens.ts` and `theme.css` with new tokens
5. Update this documentation

