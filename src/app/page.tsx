'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero';
import { CategorySection, ProductGrid } from '@/components/products';
import { AIUploader } from '@/components/ai-agent';
import { UGCGrid } from '@/components/social';
import { AffiliateSection } from '@/components/affiliate';
import { Footer } from '@/components/layout';
import { TestimonialsSection } from '@/components/ui/TestimonialsSection';
import type { Category, Product, UGCPost } from '@/types';

const CATEGORIES: Category[] = [
  {
    id: 'cat_001',
    name: 'Invisible Wefts',
    description: 'Premium extensions for seamless volume. Ultra-thin wefts designed for undetectable blending.',
    image: '/product-1.png',
    productCount: 24,
  },
  {
    id: 'cat_002',
    name: 'Hair Toppers & Wigs',
    description: 'Silk-base hairpieces for natural coverage. Medical-grade construction for all-day comfort.',
    image: '/product-2.png',
    productCount: 18,
  },
];

const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'fp1',
    name: 'Seamless Invisible Weft',
    description: 'Ultra-thin weft for seamless blending',
    price: 289,
    category: 'wefts',
    image: '/product-1.png',
    colors: ['#2C1810', '#4A3728', '#6B4423', '#8B6914'],
    lengths: [16, 18, 20],
    inStock: true,
  },
  {
    id: 'fp2',
    name: 'Silk Base Topper',
    description: 'Medical-grade silk base for natural coverage',
    price: 449,
    category: 'toppers',
    image: '/product-2.png',
    colors: ['#1A1A1A', '#3D2314', '#5C3D2E', '#8B7355'],
    lengths: [12, 14, 16],
    inStock: true,
  },
  {
    id: 'fp3',
    name: 'Premium Hand-Woven Weft',
    description: 'Artisan-crafted with meticulous attention to detail',
    price: 329,
    category: 'wefts',
    image: '/product-6.png',
    colors: ['#4A3728', '#6B4423', '#8B6914', '#C4A77D'],
    lengths: [16, 18, 20, 22],
    inStock: true,
  },
  {
    id: 'fp4',
    name: 'French Curl Collection',
    description: 'Elegant curls with natural bounce and movement',
    price: 399,
    category: 'wefts',
    image: '/product-8.png',
    colors: ['#1A1A1A', '#3D2314', '#6B4423', '#8B7355'],
    lengths: [14, 16, 18, 20],
    inStock: true,
  },
];

// Salon photos without faces (hair extension close-ups/product shots)
const UGC_POSTS: UGCPost[] = [
  {
    id: 'ugc1',
    image: '/product-6.png',
    handle: 'chloewang1997',
    productIds: ['fp1'],
  },
  {
    id: 'ugc2',
    image: '/product-7.png',
    handle: 'chloewang1997',
  },
  {
    id: 'ugc3',
    image: '/product-8.png',
    handle: 'chloewang1997',
    productIds: ['fp2'],
  },
  {
    id: 'ugc4',
    image: '/product-9.png',
    handle: 'chloewang1997',
  },
  {
    id: 'ugc5',
    image: '/product-1.png',
    handle: 'chloewang1997',
    productIds: ['fp3'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CategorySection categories={CATEGORIES} />
      <ProductGrid
        products={FEATURED_PRODUCTS}
        title="Featured Collection"
        subtitle="Our most loved pieces, chosen by colorists and stylists worldwide"
      />
      <TestimonialsSection />
      <AIUploader />
      <UGCGrid posts={UGC_POSTS} />
      <AffiliateSection />
      <Footer />
    </div>
  );
}
