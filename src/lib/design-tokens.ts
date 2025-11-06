/**
 * Design Tokens extracted from Figma
 * Source: Solar for Lexipol Design System
 * Component: Button - Primary, Size SM, Status Default
 * Node ID: 2677:17954
 */

export const designTokens = {
  colors: {
    buttons: {
      primary: {
        default: {
          background: "#004b87",
          stroke: "#004b87",
          text: "#ffffff",
        },
      },
    },
  },

  spacing: {
    "1": "4px",   // Border radius base unit
    "2": "8px",   // Gap between elements, vertical padding
    "4": "16px",  // Horizontal padding
  },

  typography: {
    button: {
      sm: {
        fontFamily: "Inter",
        fontWeight: 500, // Medium
        fontSize: "16px",
        lineHeight: 1.2,
        letterSpacing: "0.16px",
      },
    },
  },

  sizing: {
    icon: {
      sm: "16px",
    },
  },

  borderRadius: {
    button: "4px", // --spacing-1
  },
} as const;

/**
 * CSS Variable mappings from Figma
 * These match the Figma variable structure: --buttons/primary/default/background
 */
export const cssVariables = {
  "--buttons-primary-default-background": designTokens.colors.buttons.primary.default.background,
  "--buttons-primary-default-stroke": designTokens.colors.buttons.primary.default.stroke,
  "--buttons-primary-default-text": designTokens.colors.buttons.primary.default.text,
  
  "--spacing-1": designTokens.spacing["1"],
  "--spacing-2": designTokens.spacing["2"],
  "--spacing-4": designTokens.spacing["4"],
} as const;

/**
 * Tailwind-compatible token values
 */
export const tailwindTokens = {
  colors: {
    "button-primary": {
      background: designTokens.colors.buttons.primary.default.background,
      stroke: designTokens.colors.buttons.primary.default.stroke,
      text: designTokens.colors.buttons.primary.default.text,
    },
  },
  spacing: designTokens.spacing,
  fontSize: {
    "button-sm": designTokens.typography.button.sm.fontSize,
  },
  fontWeight: {
    "button-medium": designTokens.typography.button.sm.fontWeight,
  },
  lineHeight: {
    "button-sm": `${designTokens.typography.button.sm.lineHeight}`,
  },
  letterSpacing: {
    "button-sm": designTokens.typography.button.sm.letterSpacing,
  },
  borderRadius: {
    button: designTokens.borderRadius.button,
  },
} as const;

