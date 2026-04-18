'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import type { UGCPost } from '@/types';

interface UGCGridProps {
  posts: UGCPost[];
}

export function UGCGrid({ posts }: UGCGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-5 h-5 text-elite-charcoal" />
            <p className="text-sm tracking-[0.3em] text-elite-grey uppercase">
              Community
            </p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
            The RCHAIR Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands who have transformed their look with our premium extensions
          </p>
          <p className="text-sm text-elite-grey mt-4">
            Share your look with #RCHair
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative break-inside-avoid group overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.handle}'s hair transformation`}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredId === post.id ? 'scale-105' : 'scale-100'
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === post.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center">
                    <p className="text-white font-medium mb-1">@{post.handle}</p>
                    {post.productIds && post.productIds.length > 0 && (
                      <p className="text-white/70 text-sm">Shop this look</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-elite-charcoal hover:text-foreground transition-colors"
          >
            <span>View More on Instagram</span>
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </section>
  );
}
