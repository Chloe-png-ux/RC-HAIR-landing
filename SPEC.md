# RC Hair - Independent Site Specification

## 1. Concept & Vision

RC Hair embodies **refined luxury in the hair extensions industry**. The site communicates exclusivity through restraint—every pixel breathes elegance. The experience feels like stepping into a high-end atelier where precision meets artistry. Users should feel they're investing in premium craftsmanship, not just purchasing hair products.

The brand voice is **confident, knowledgeable, and understated**—never promotional or salesy. Think editorial fashion meets premium beauty consultation.

---

## 2. Design Language

### Aesthetic Direction
**High-End Minimalist** — Inspired by luxury fashion houses (Celine, The Row) and premium beauty brands (La Mer, Augustinus Bader). Clean geometry, generous negative space, and editorial photography create an atmosphere of quiet confidence.

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Background | Soft Warm Grey | `#F2F2F2` |
| Primary Text | Charcoal | `#2D2D2D` |
| Secondary/UI | Warm Grey | `#A8A8A8` |
| Button/Accent | Deep Charcoal | `#333333` |
| Subtle Borders | Light Grey | `#E0E0E0` |
| Hover States | Soft Black | `#1A1A1A` |

### Typography
- **Display/Headlines**: `Cormorant Garamond` (400, 500, 600) — Elegant serif with editorial presence
- **Body/UI**: `Questrial` — Clean geometric sans-serif, refined and modern
- **Fallback**: `Georgia, serif` / `system-ui, sans-serif`

### Spatial System
- Base unit: `8px`
- Section padding: `80px-120px` vertical
- Container max-width: `1400px`
- Card spacing: `24px-32px`
- Generous whitespace between sections creates breathing room

### Motion Philosophy
- **Entrance animations**: Subtle fade-up (opacity 0→1, translateY 20px→0, 600ms ease-out)
- **Stagger**: 100ms between sibling elements
- **Hover states**: Scale 1.02 with 300ms ease, subtle shadow lift
- **Page transitions**: Smooth opacity crossfade
- **No bouncy/playful animations** — everything is measured and confident

### Visual Assets
- **Icons**: Custom minimal line icons (1.5px stroke), or Phosphor Icons (thin weight)
- **Photography**: Studio-lit on cool grey backgrounds, high-gloss hair texture focus
- **Decorative**: Minimal — thin horizontal rules, subtle shadows, no patterns
- **Product presentation**: Clean cutouts on grey backgrounds

---

## 3. Layout & Structure

### Page Architecture

#### Navigation (Fixed, Transparent → Solid on scroll)
- Logo (left): "RCHAIR" in Cormorant Garamond, letterspaced
- Nav links (center): Collections, Services, About, Contact
- CTA (right): "Book Consultation" button
- Mobile: Hamburger menu with full-screen overlay

#### Hero Section
- Full-viewport height
- Split layout: 60% editorial image, 40% text content
- Headline: Large serif, stacked vertically
- Subline: Brief value proposition
- Dual CTA: Primary "Shop Collection" + Secondary "Virtual Consultation"

#### Product Categories Section
- Two-column grid
- Large category cards with hover-reveal overlay
- Categories: "Invisible Wefts" / "Hair Toppers & Wigs"
- Each card: Image, category name, brief description, "Explore" link

#### Featured Products Carousel
- Horizontal scroll with snap points
- Product cards: Image, name, price, quick-add button
- Smooth drag/swipe navigation

#### AI Sales Agent Section
- Prominent callout area
- "Your Personal Hair Consultant" headline
- Photo upload interface with drag-drop
- Animated processing visualization
- Color match result display
- Direct "Shop Match" PayPal integration

#### Instagram UGC Wall
- Masonry grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Hover: Subtle zoom + @handle overlay
- "Shop the Look" linking capability

#### Affiliate Section
- Clean informational cards
- "Join Our Stylist Network"
- Commission structure display
- Application CTA

#### Footer
- Minimal: Logo, essential links, social icons
- Newsletter signup (single field + submit)
- Copyright and legal links

### Responsive Strategy
- Desktop: Full layout as described
- Tablet (768px): 2-column grids, condensed spacing
- Mobile (480px): Single column, stacked navigation

---

## 4. Features & Interactions

### Core Features

#### Product Browsing
- Category filtering (Wefts / Toppers)
- Sort by: Featured, Price (Low/High), Newest
- Quick view modal on hover
- Add to cart with size/length selection

#### AI Color Match Agent
- **Upload**: Drag-drop or click to upload photo
- **Processing**: Animated visualization showing AI analysis
- **Result**: Detected base color + recommended extensions
- **Action**: "Shop This Match" generates PayPal checkout link

#### PayPal Checkout
- Express Checkout integration
- Currency: USD
- Buyer Protection badge display
- Guest checkout supported

#### Instagram UGC Wall
- Curated grid of customer photos
- Hashtag tracking: #RCHAIRHair
- Click to view original post attribution
- "Shop products featured" tagging (UI only)

#### Affiliate Program
- Application form (name, salon, social handle, portfolio)
- Commission tracking display (UI demo)
- Referral link generator
- Stylist profile management

### Interaction Details

| Element | Default | Hover | Active |
|---------|---------|-------|--------|
| Primary Button | `#333333` bg, white text | `#1A1A1A` bg, lift shadow | Scale 0.98 |
| Secondary Button | Transparent, `#333333` border | `#333333` bg, white text | Scale 0.98 |
| Product Card | Static image | Image scale 1.02, shadow lift | — |
| Nav Link | `#2D2D2D` text | `#A8A8A8` text | Underline slide-in |
| Image Upload | Dashed border `#A8A8A8` | Solid border `#333333` | Processing state |

### Error Handling
- Form validation: Inline error messages below fields
- Upload errors: Toast notification with retry option
- Network errors: Graceful degradation message
- Empty states: Elegant placeholder with CTA

---

## 5. Component Inventory

### Navigation
- **Logo**: Cormorant Garamond, letter-spaced, links to home
- **NavLink**: Text with animated underline on hover
- **MobileMenu**: Full-screen overlay with staggered link reveal
- **CTAButton**: Solid or outlined variant, loading state with spinner

### Hero
- **HeroSection**: Split layout container
- **HeroImage**: Lazy-loaded with skeleton placeholder
- **HeroText**: Stacked headline + subline + CTA group

### Products
- **ProductCard**: Image, title, price, hover overlay with quick-add
- **ProductModal**: Full details, size selector, add-to-cart
- **CategoryCard**: Large image with gradient overlay, title, CTA
- **ProductGrid**: Responsive grid container

### AI Agent
- **UploadZone**: Drag-drop area with icon and instructions
- **ProcessingIndicator**: Animated concentric circles
- **MatchResult**: Color swatch + product recommendations
- **PayPalButton**: Embedded PayPal checkout trigger

### Social
- **UGCGrid**: Masonry layout of customer photos
- **UGCCard**: Image with hover overlay showing handle
- **SocialProof**: Testimonial carousel (optional)

### Affiliate
- **AffiliateCard**: Info + CTA layout
- **ApplicationForm**: Multi-field form with validation
- **CommissionDisplay**: Dashboard-style metrics

### Common
- **Button**: Primary (solid), Secondary (outline), sizes
- **Input**: Text, email, with floating label animation
- **Toast**: Success/error notifications
- **Skeleton**: Loading placeholder with shimmer
- **Modal**: Centered overlay with backdrop blur

---

## 6. Technical Approach

### Framework & Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: Custom components (no heavy UI libraries)
- **Package Manager**: pnpm

### Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata
│   ├── page.tsx           # Home page
│   ├── collections/
│   │   └── page.tsx       # Products listing
│   ├── services/
│   │   └── page.tsx       # AI consultation page
│   └── globals.css        # Tailwind + custom styles
├── components/
│   ├── navigation/        # Nav, MobileMenu
│   ├── hero/              # HeroSection
│   ├── products/          # ProductCard, CategoryCard, ProductGrid
│   ├── ai-agent/          # UploadZone, MatchResult
│   ├── social/            # UGCGrid, UGCCard
│   ├── affiliate/        # AffiliateCard, ApplicationForm
│   └── ui/                # Button, Input, Modal, Toast
├── lib/
│   └── utils.ts           # Helper functions
└── types/
    └── index.ts           # TypeScript interfaces
```

### Key Implementation Notes
- Use `next/font` for Google Fonts optimization
- Server components by default, client components for interactivity
- Image optimization with `next/image`
- Form handling with controlled components
- PayPal SDK loaded dynamically (client-side only)

### API Routes (for demo/mock)
- `POST /api/color-match` — Simulated AI color analysis
- `POST /api/paypal/create-order` — Mock PayPal order creation
- `POST /api/affiliate/apply` — Affiliate application submission

---

## 7. Content Strategy

### Headlines
- Hero: "Luxury Hair,\nEffortlessly Yours"
- Categories: "Precision-Crafted\nExtensions"
- AI Agent: "Your Personal\nHair Consultant"
- UGC: "The RCHAIR\nCommunity"
- Affiliate: "Join Our\nStylist Network"

### Microcopy
- Upload: "Drop your photo here, or click to browse"
- Processing: "Analyzing your hair color..."
- Success: "We found your perfect match"
- Empty cart: "Your collection awaits"
- Newsletter: "Join for exclusive access"

### Tone
- Confident: "Premium extensions" not "best extensions"
- Knowledgeable: "Clinically proven colors" not "our colors are great"
- Refined: "Effortless elegance" not "easy and beautiful"
