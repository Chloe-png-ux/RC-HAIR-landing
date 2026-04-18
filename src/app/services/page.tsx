'use client';

import { Navigation } from '@/components/navigation';
import { AIUploader } from '@/components/ai-agent';
import { Footer } from '@/components/layout';
import { Sparkles, Calendar, Video, MessageCircle } from 'lucide-react';

const consultationTypes = [
  {
    icon: Video,
    title: 'Virtual Color Match',
    description: 'Upload a photo and our AI will analyze your hair color to recommend the perfect extensions.',
    cta: 'Start with Photo',
    href: '#ai-upload',
  },
  {
    icon: MessageCircle,
    title: 'Text Consultation',
    description: 'Chat with our hair experts about your goals, budget, and lifestyle preferences.',
    cta: 'Chat Now',
    href: '#',
  },
  {
    icon: Calendar,
    title: 'Video Appointment',
    description: 'Book a one-on-one session with a certified stylist for personalized recommendations.',
    cta: 'Schedule Call',
    href: '#',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-elite-charcoal" />
              <p className="text-sm tracking-[0.3em] text-elite-grey uppercase">
                Expert Guidance
              </p>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From AI-powered color matching to personalized consultations, we offer multiple ways to find your perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-elite-light-grey hover:border-elite-charcoal transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-elite-charcoal transition-colors">
                  <type.icon className="w-7 h-7 text-elite-charcoal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {type.description}
                </p>
                <a
                  href={type.href}
                  className="inline-flex items-center gap-2 text-sm text-elite-charcoal font-medium hover:gap-3 transition-all"
                >
                  <span>{type.cta}</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* AI Color Match Section */}
      <section id="ai-upload">
        <AIUploader />
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How do I know which extension type is right for me?',
                  a: 'Our AI color match tool can help identify the best match for your current hair. For more complex needs, we recommend booking a free video consultation with one of our certified stylists.',
                },
                {
                  q: 'What is the difference between wefts and toppers?',
                  a: 'Wefts are continuous strips of hair that are sewn or clipped into your existing hair for added length and volume. Toppers are smaller hairpieces that cover specific areas of thinning or add volume at the crown.',
                },
                {
                  q: 'How long do RCHAIR extensions last?',
                  a: 'With proper care, our premium Remy human hair extensions can last 12-18 months. Our silk-base toppers typically last 6-12 months depending on usage and maintenance.',
                },
                {
                  q: 'Do you offer virtual color matching?',
                  a: 'Yes! Our AI-powered color match tool analyzes photos of your hair to recommend the perfect shade match from our 50+ color collection. It has a 98% accuracy rate.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-elite-light-grey pb-6"
                >
                  <h3 className="font-medium text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
