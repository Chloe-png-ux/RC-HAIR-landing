'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = textRef.current?.querySelectorAll('.animate-in');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-up');
        el.classList.remove('opacity-0');
      }, index * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef} className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <p className="opacity-0 animate-in text-sm tracking-[0.3em] text-elite-grey uppercase">
                Premium Extensions
              </p>
              <h1 className="opacity-0 animate-in font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
                Luxury Hair,
                <br />
                Effortlessly
                <br />
                Yours
              </h1>
            </div>

            <p className="opacity-0 animate-in text-muted-foreground text-lg leading-relaxed max-w-md">
              Clinically matched colors, precision-crafted extensions, and silk-base hairpieces designed for seamless, undetectable elegance.
            </p>

            <div className="opacity-0 animate-in flex flex-wrap gap-4 pt-4">
              <Link
                href="/collections"
                className="px-8 py-4 bg-elite-charcoal text-white text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors"
              >
                Shop Collection
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-elite-charcoal text-elite-charcoal text-sm tracking-wide hover:bg-elite-charcoal hover:text-white transition-colors"
              >
                Virtual Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="opacity-0 animate-in flex items-center gap-8 pt-8 border-t border-elite-light-grey">
              <div className="text-center">
                <p className="font-serif text-3xl text-foreground">15K+</p>
                <p className="text-xs text-muted-foreground tracking-wide">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-elite-light-grey" />
              <div className="text-center">
                <p className="font-serif text-3xl text-foreground">50+</p>
                <p className="text-xs text-muted-foreground tracking-wide">Hair Colors</p>
              </div>
              <div className="w-px h-12 bg-elite-light-grey" />
              <div className="text-center">
                <p className="font-serif text-3xl text-foreground">100%</p>
                <p className="text-xs text-muted-foreground tracking-wide">Remy Human Hair</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-3 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/product-5.jpg"
                alt="Premium hand-crafted hair extensions"
                fill
                className="object-cover image-reveal"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg">
              <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">Featured</p>
              <p className="font-serif text-xl text-foreground">Midnight Collection</p>
              <p className="text-sm text-elite-grey mt-1">Starting at $289</p>
            </div>

            {/* AI Badge */}
            <div className="absolute top-8 -right-4 bg-white/90 backdrop-blur-sm px-4 py-3 shadow-sm">
              <p className="text-xs text-muted-foreground">AI Color Match</p>
              <p className="text-sm font-medium text-foreground">98% Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
