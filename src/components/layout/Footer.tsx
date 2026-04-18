'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail('');
    toast.success('Welcome to RCHAIR. Check your inbox for exclusive access.');
  };

  const footerLinks = {
    shop: [
      { label: 'All Collections', href: '/collections' },
      { label: 'Invisible Wefts', href: '/collections?category=cat_001' },
      { label: 'Hair Toppers & Wigs', href: '/collections?category=cat_002' },
      { label: 'Color Match', href: '/services' },
    ],
    company: [
      { label: 'Our Story', href: '#about' },
      { label: 'Quality Promise', href: '#about' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Care Guide', href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-elite-light-grey">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Newsletter */}
            <div className="max-w-md">
              <Link
                href="/"
                className="font-serif text-2xl tracking-[0.2em] text-foreground mb-6 inline-block"
              >
                RCHAIR
              </Link>
              <p className="text-muted-foreground mb-8">
                Join for exclusive access to new collections, color launches, and styling inspiration.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-elite-light-grey text-foreground bg-transparent focus:border-elite-charcoal focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-elite-charcoal text-white text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            </div>

            {/* Right - Links */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-4 tracking-wide">
                  SHOP
                </h4>
                <ul className="space-y-3">
                  {footerLinks.shop.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-4 tracking-wide">
                  COMPANY
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-4 tracking-wide">
                  SUPPORT
                </h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-elite-light-grey flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 RC Hair. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/chloewang1997/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.pinterest.com/a19531456634/_pins/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Pinterest"
            >
              <PinterestIcon className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
