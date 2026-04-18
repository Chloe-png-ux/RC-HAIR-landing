'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/collections?category=${category.id}`}
      className="group relative block aspect-[4/5] overflow-hidden card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <Image
        src={category.image}
        alt={category.name}
        fill
        className={`object-cover transition-transform duration-700 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
        <p className="text-xs text-white/70 tracking-[0.3em] uppercase mb-3">
          {category.productCount} Pieces
        </p>
        <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">
          {category.name}
        </h3>
        <p className="text-white/80 text-sm lg:text-base max-w-xs mb-6">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-white">
          <span className="text-sm tracking-wide">Explore Collection</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isHovered ? 'translate-x-2' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
