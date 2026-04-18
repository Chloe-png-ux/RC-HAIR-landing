'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jessica M.',
    location: 'New York, NY',
    rating: 5,
    text: 'The quality of these extensions is absolutely stunning. My clients cannot believe how natural they look. The color match was perfect - exactly what I needed for my salon inventory.',
    product: 'Hand-Tied Weft Collection',
  },
  {
    id: 2,
    name: 'Sarah K.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Finally found a supplier I can trust. The remy hair quality is exceptional - soft, silky, and lasts for months. My clients are obsessed with their transformations.',
    product: 'Seamless Invisible Weft',
  },
  {
    id: 3,
    name: 'Michelle R.',
    location: 'Miami, FL',
    rating: 5,
    text: 'The AI color match feature is a game changer! It helped me find the perfect shade match for my clients every single time. Highly recommend for any professional stylist.',
    product: 'AI Color Match Service',
  },
  {
    id: 4,
    name: 'Amanda L.',
    location: 'Chicago, IL',
    rating: 5,
    text: 'These silk base toppers are beyond luxurious. The breathability and natural appearance have exceeded all expectations. Best investment for my salon.',
    product: 'Silk Base Topper',
  },
  {
    id: 5,
    name: 'Lauren T.',
    location: 'Dallas, TX',
    rating: 5,
    text: 'RCHAIR has transformed my business. The wholesale program is fantastic, and the customer support team is always there when I need them. Five stars all around!',
    product: 'Professional Partner Program',
  },
  {
    id: 6,
    name: 'Rachel B.',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'I have been in the hair industry for 15 years, and these are hands down the best extensions I have ever worked with. The cuticle alignment is flawless.',
    product: 'Premium Remy Collection',
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-elite-grey uppercase mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by professional stylists and salons worldwide
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div
              className={`flex gap-6 transition-all duration-700 ${
                isVisible ? 'translate-x-0' : 'translate-x-8'
              }`}
              style={{
                width: 'max-content',
                animation: 'scroll 40s linear infinite',
              }}
            >
              {/* First set */}
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-[400px] bg-secondary/50 p-8"
                >
                  <Quote className="w-8 h-8 text-elite-grey/30 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-elite-charcoal text-elite-charcoal"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t border-elite-light-grey pt-4">
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-elite-grey mt-2">
                      Purchased: {testimonial.product}
                    </p>
                  </div>
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={`dup-${testimonial.id}`}
                  className="flex-shrink-0 w-[400px] bg-secondary/50 p-8"
                >
                  <Quote className="w-8 h-8 text-elite-grey/30 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-elite-charcoal text-elite-charcoal"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t border-elite-light-grey pt-4">
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-elite-grey mt-2">
                      Purchased: {testimonial.product}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-elite-light-grey">
          <div className="text-center">
            <p className="font-serif text-4xl lg:text-5xl text-foreground mb-2">4.9</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-elite-charcoal text-elite-charcoal" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl lg:text-5xl text-foreground mb-2">2,500+</p>
            <p className="text-sm text-muted-foreground">Happy Stylists</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl lg:text-5xl text-foreground mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Would Recommend</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
