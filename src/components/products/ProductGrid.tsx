'use client';

import { CategoryCard } from './CategoryCard';
import { ProductCard } from './ProductCard';
import type { Category, Product } from '@/types';

interface CategorySectionProps {
  categories: Category[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-elite-grey uppercase mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground">
            Precision-Crafted Extensions
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
