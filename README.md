# Figma + shadcn/ui Bridge

A Next.js starter kit that bridges Figma designs with shadcn/ui components, featuring a responsive layout, component comparison tools, and comprehensive documentation.

## 🚀 Features

- **Responsive Layout**: Sidebar navigation on desktop, mobile menu with Sheet component
- **Figma Integration**: Extract components directly from Figma using MCP
- **Component Comparison**: Side-by-side comparison of Figma-based vs shadcn/ui components
- **Design Tokens**: Extracted design tokens from Figma (colors, spacing, typography)
- **Documentation**: Comprehensive component library documentation with Zeroheight integration

## 📦 Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Figma MCP** for design extraction
- **class-variance-authority** for component variants

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Figma Desktop App (for MCP integration)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ui-next/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── docs/              # Documentation pages
│   │   │   └── components/
│   │   │       └── buttons/   # Button comparison & docs
│   │   ├── layout.tsx         # Root layout with sidebar
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── app/               # App-specific components
│   │   │   ├── sidebar.tsx    # Desktop sidebar
│   │   │   └── site-header.tsx # Header with mobile menu
│   │   └── ui/                # UI components
│   │       ├── button.tsx      # shadcn/ui button
│   │       └── button-figma.tsx # Figma-based button
│   ├── lib/
│   │   ├── design-tokens.ts   # Design token definitions
│   │   └── utils.ts           # Utility functions
│   └── styles/
│       └── theme.css          # CSS variables & design tokens
└── DESIGN_TOKENS.md           # Design tokens documentation
```

## 🎨 Components

### Button Components

- **Figma-based Button** (`button-figma.tsx`): Extracted from Solar for Lexipol design system
- **shadcn/ui Button** (`button.tsx`): Standard shadcn/ui implementation
- **Comparison Page**: `/docs/components/buttons` - Side-by-side comparison with diff tables

### Layout Components

- **Sidebar**: Responsive navigation (hidden on mobile)
- **Site Header**: Sticky header with mobile menu button
- **Mobile Nav**: Sheet-based mobile navigation

## 🔗 Key Pages

- **Home**: `/` - Welcome page
- **Docs Overview**: `/docs` - Component library overview
- **Button Comparison**: `/docs/components/buttons` - Figma vs shadcn/ui comparison
- **Button Documentation**: `/docs/components/buttons/documentation` - Full documentation

## 🎯 Design System

### Source
- **Figma File**: [Solar for Lexipol](https://www.figma.com/design/BDZd4LSDavFuFyEZdYjGUO/Solar-for-Lexipol)
- **Zeroheight Docs**: [Button Documentation](https://zeroheight.com/682fcdd93/p/457be6-button)

### Design Tokens
All design tokens are extracted from Figma and available in:
- `src/styles/theme.css` - CSS custom properties
- `src/lib/design-tokens.ts` - TypeScript definitions
- `DESIGN_TOKENS.md` - Documentation

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

MIT

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Solar for Lexipol](https://www.figma.com/design/BDZd4LSDavFuFyEZdYjGUO/Solar-for-Lexipol) design system
- [Zeroheight](https://zeroheight.com/) for documentation
