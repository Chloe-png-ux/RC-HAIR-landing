# RC Hair - Project Documentation

## Project Overview
RC Hair is a high-end luxury hair extensions e-commerce website built with Next.js 16. The site features AI-powered color matching, premium product browsing, an affiliate program, and Instagram UGC integration.

## Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Components**: Custom components with shadcn/ui base
- **Package Manager**: pnpm

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata
│   ├── page.tsx          # Home page
│   ├── collections/      # Product listing page
│   └── services/         # AI consultation & services page
├── components/
│   ├── navigation/       # Header & mobile menu
│   ├── hero/             # Hero section
│   ├── products/         # Product cards, category cards, grids
│   ├── ai-agent/         # AI color match uploader
│   ├── social/           # Instagram UGC grid
│   ├── affiliate/        # Partner program section
│   ├── layout/           # Footer
│   └── ui/               # shadcn/ui components
├── types/
│   └── index.ts          # TypeScript interfaces
└── lib/
    └── utils.ts          # Utility functions (cn)
```

## Commands
```bash
pnpm dev      # Start development server (port 5000)
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Key Features

### 1. Home Page (`/`)
- Hero section with animated entrance
- Category showcase (Invisible Wefts, Hair Toppers)
- Featured products grid
- AI Color Match section
- Instagram UGC wall
- Affiliate program section
- Footer with newsletter signup

### 2. Collections Page (`/collections`)
- Product filtering by category
- Sorting (Featured, Price)
- Responsive product grid
- Quick-add functionality

### 3. Services Page (`/services`)
- Consultation type cards
- AI Color Match uploader
- FAQ section

## Design System

### Color Palette
| Variable | Hex | Usage |
|----------|-----|-------|
| Background | `#F2F2F2` | Page background |
| Foreground | `#2D2D2D` | Primary text |
| Elite Grey | `#A8A8A8` | Secondary/UI |
| Elite Charcoal | `#333333` | Buttons/Accent |
| Elite Light Grey | `#E0E0E0` | Borders |

### Typography
- **Display**: Cormorant Garamond (serif)
- **Body**: Questrial (sans-serif)

## API Routes (Mock/Frontend Only)
The current implementation is frontend-focused. For production:
- `/api/color-match` - AI color analysis endpoint
- `/api/paypal/create-order` - PayPal checkout
- `/api/affiliate/apply` - Partner applications

## Environment Variables
- `COZE_PROJECT_ENV` - Development/Production mode
- `DEPLOY_RUN_PORT` - Server port (5000)
- `COZE_PROJECT_DOMAIN_DEFAULT` - Public domain

## Notes
- All images use Unsplash placeholders for demo
- PayPal integration is UI-ready (needs backend for production)
- AI color match simulates processing (needs LLM integration for production)
