'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
  </svg>
);

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.2em] text-foreground hover:text-elite-charcoal transition-colors"
            >
              RCHAIR
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/services"
                className="px-6 py-2.5 bg-elite-charcoal text-white text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-16">
            <span className="font-serif text-2xl tracking-[0.2em]">RCHAIR</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-serif text-4xl tracking-wide text-foreground opacity-0 animate-slide-in stagger-${index + 1}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <div className="flex gap-4 mb-6 justify-center">
              <a
                href="https://www.instagram.com/chloewang1997/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.pinterest.com/a19531456634/_pins/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block w-full px-8 py-4 bg-elite-charcoal text-white text-center font-sans tracking-wide"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
