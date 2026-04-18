'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { ProductGrid } from '@/components/products';
import { Footer } from '@/components/layout';
import { SlidersHorizontal } from 'lucide-react';
import type { Product } from '@/types';

const ALL_PRODUCTS: Product[] = [
  {
    id: 'p1',
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
    id: 'p2',
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
    id: 'p3',
    name: 'Hand-Tied Weft',
    description: 'Premium hand-tied for ultimate luxury',
    price: 389,
    category: 'wefts',
    image: '/product-3.jpg',
    colors: ['#4A3728', '#6B4423', '#8B6914', '#C4A77D'],
    lengths: [18, 20, 22],
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Lace Front Wig',
    description: 'Pre-styled for instant transformation',
    price: 599,
    category: 'toppers',
    image: '/product-4.jpg',
    colors: ['#1A1A1A', '#4A3728', '#C4A77D', '#E8D4B8'],
    lengths: [14, 16, 18],
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Classic Weft Bundle',
    description: 'Timeless elegance with natural movement',
    price: 249,
    category: 'wefts',
    image: '/product-5.jpg',
    colors: ['#1A1A1A', '#4A3728', '#6B4423'],
    lengths: [16, 18, 20, 22],
    inStock: true,
  },
  {
    id: 'p6',
    name: 'Monofilament Topper',
    description: 'Part-anywhere construction for versatility',
    price: 519,
    category: 'toppers',
    image: '/product-1.png',
    colors: ['#3D2314', '#5C3D2E', '#8B7355', '#C4A77D'],
    lengths: [12, 14, 16, 18],
    inStock: true,
  },
  {
    id: 'p7',
    name: 'Micro Weft System',
    description: 'Ultimate discretion with micro-thin bands',
    price: 349,
    category: 'wefts',
    image: '/product-2.png',
    colors: ['#2C1810', '#4A3728', '#8B6914'],
    lengths: [18, 20, 22, 24],
    inStock: false,
  },
  {
    id: 'p8',
    name: 'Full Lace Wig',
    description: 'Maximum styling freedom with full lace',
    price: 749,
    category: 'toppers',
    image: '/product-3.jpg',
    colors: ['#1A1A1A', '#3D2314', '#6B4423', '#E8D4B8'],
    lengths: [16, 18, 20],
    inStock: true,
  },
  {
    id: 'p9',
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
    id: 'p10',
    name: 'Silk Closure Bundle',
    description: 'Seamless finish with silk base construction',
    price: 279,
    category: 'wefts',
    image: '/product-7.png',
    colors: ['#2C1810', '#4A3728', '#5C3D2E', '#6B4423'],
    lengths: [12, 14, 16, 18],
    inStock: true,
  },
  {
    id: 'p11',
    name: 'French Curl Collection',
    description: 'Elegant curls with natural bounce and movement',
    price: 399,
    category: 'wefts',
    image: '/product-8.png',
    colors: ['#1A1A1A', '#3D2314', '#6B4423', '#8B7355'],
    lengths: [14, 16, 18, 20],
    inStock: true,
  },
  {
    id: 'p12',
    name: 'European Hair Topper',
    description: 'Finest European hair for premium quality',
    price: 589,
    category: 'toppers',
    image: '/product-9.png',
    colors: ['#C4A77D', '#E8D4B8', '#8B7355', '#6B4423'],
    lengths: [12, 14, 16],
    inStock: true,
  },
];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categoryParam || null
  );
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(categoryParam || null);
  }, [categoryParam]);

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    if (activeCategory === 'cat_001') return product.category === 'wefts';
    if (activeCategory === 'cat_002') return product.category === 'toppers';
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const categories = [
    { id: null, label: 'All Products' },
    { id: 'cat_001', label: 'Invisible Wefts' },
    { id: 'cat_002', label: 'Hair Toppers & Wigs' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
            Collections
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our curated selection of premium hair extensions and hairpieces, crafted for seamless elegance.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-elite-light-grey">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id || 'all'}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-elite-charcoal text-white'
                      : 'bg-secondary text-foreground hover:bg-elite-light-grey'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-muted-foreground">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-elite-light-grey bg-transparent text-foreground text-sm focus:border-elite-charcoal focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="p-2 border border-elite-light-grey hover:bg-secondary transition-colors md:hidden"
                aria-label="Toggle filters"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-8">
            Showing {filteredProducts.length} products
          </p>

          {/* Products Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-elite-charcoal border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CollectionsContent />
    </Suspense>
  );
}
