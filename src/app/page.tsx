'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [sdkActive, setSdkActive] = useState(false);

  // Product data
  const products = [
    {
      id: 'w1',
      name: 'Seamless Invisible Weft',
      category: 'wefts',
      type: 'Hair Weft',
      price: 289,
      image: '/hair-1.png'
    },
    {
      id: 'w2',
      name: 'Hand-Tied Weft',
      category: 'wefts',
      type: 'Hair Weft',
      price: 389,
      image: '/hair-2.png'
    },
    {
      id: 't1',
      name: 'Silk Base Topper',
      category: 'toppers',
      type: 'Hair Topper',
      price: 449,
      image: '/hair-3.png'
    },
    {
      id: 't2',
      name: 'Lace Front Wig',
      category: 'toppers',
      type: 'Hair Topper',
      price: 599,
      image: '/hair-4.jpg'
    }
  ];

  // Scroll effect - use useEffect to avoid hydration mismatch
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F2', color: '#2D2D2D' }}>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.cn/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Questrial&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { 
          font-family: 'Questrial', sans-serif; 
          background-color: #F2F2F2;
          color: #2D2D2D;
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.12); }
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center transition-all duration-400"
        style={{ 
          backgroundColor: isScrolled ? 'rgba(242, 242, 242, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none'
        }}
      >
        <a 
          href="#" 
          className="text-xl tracking-widest no-underline uppercase"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2D2D2D' }}
        >
          RC Hair
        </a>
        <ul className="flex gap-12 list-none">
          {['Collections', 'Services', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider uppercase no-underline relative transition-opacity hover:opacity-80"
                style={{ color: '#2D2D2D' }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-700 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/hero-bg.png)',
            filter: 'brightness(0.85)',
            transform: 'scale(1.05)',
            animation: 'heroZoom 20s ease-in-out infinite alternate'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(45,45,45,0.3) 0%, rgba(45,45,45,0.5) 50%, rgba(45,45,45,0.7) 100%)'
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-800 px-8">
          <p 
            className="text-sm tracking-widest uppercase mb-6"
            style={{ 
              opacity: 0, 
              transform: 'translateY(20px)',
              animation: 'fadeUp 1s ease 0.3s forwards'
            }}
          >
            Premium Hair Extensions
          </p>
          <h1 
            className="text-6xl font-light mb-8"
            style={{ 
              fontFamily: 'Cormorant Garamond, serif',
              lineHeight: 1.1,
              letterSpacing: '0.05em',
              opacity: 0, 
              transform: 'translateY(30px)',
              animation: 'fadeUp 1s ease 0.6s forwards'
            }}
          >
            Elevate Your <em className="italic font-normal">Style</em>
          </h1>
          <p 
            className="text-base font-light max-w-xl mx-auto mb-12"
            style={{
              opacity: 0, 
              transform: 'translateY(20px)',
              animation: 'fadeUp 1s ease 0.9s forwards'
            }}
          >
            Discover our curated collection of luxury hair extensions, crafted for seamless elegance and natural beauty.
          </p>
          <a 
            href="#collections"
            className="inline-flex items-center gap-4 px-10 py-5 text-sm tracking-widest uppercase no-underline border transition-all"
            style={{ 
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.6)',
              opacity: 0, 
              transform: 'translateY(20px)',
              animation: 'fadeUp 1s ease 1.2s forwards'
            }}
          >
            Explore Collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white"
          style={{
            opacity: 0, 
            animation: 'fadeUp 1s ease 1.5s forwards'
          }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div 
            className="w-px h-15"
            style={{ 
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
              animation: 'scrollPulse 2s ease-in-out infinite'
            }}
          />
        </div>
      </section>

      {/* Products Section */}
      <section id="collections" className="py-32 px-12" style={{ backgroundColor: '#fff' }}>
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8A8A8' }}>Our Collection</p>
          <h2 className="text-5xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Luxury Hair Extensions</h2>
          <div className="w-px h-8 mx-auto mt-8" style={{ backgroundColor: '#E0E0E0' }} />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-12 mb-12">
          {[
            { key: 'all', label: 'All' },
            { key: 'wefts', label: 'Hair Wefts' },
            { key: 'toppers', label: 'Hair Toppers' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className="text-sm tracking-wider uppercase bg-transparent border-none cursor-pointer py-2 relative transition-colors"
              style={{ 
                color: activeCategory === tab.key ? '#2D2D2D' : '#A8A8A8'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-4 gap-1 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="relative overflow-hidden cursor-pointer aspect-3/4 group"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-108"
                style={{ transform: 'scale(1)', transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              />
              <span 
                className="absolute top-6 left-6 px-4 py-2 text-xs tracking-wider uppercase"
                style={{ backgroundColor: '#fff', color: '#2D2D2D' }}
              >
                {product.type}
              </span>
              <div 
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(to top, rgba(45,45,45,0.9) 0%, rgba(45,45,45,0) 60%)'
                }}
              >
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#A8A8A8' }}>
                  {product.category === 'wefts' ? 'Hair Weft' : 'Hair Topper'}
                </p>
                <h3 className="text-2xl font-normal mb-2 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {product.name}
                </h3>
                <p className="text-sm text-white opacity-90">${product.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-12" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8A8A8' }}>Our Services</p>
          <h2 className="text-5xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>AI Color Match</h2>
          <div className="w-px h-8 mx-auto mt-8" style={{ backgroundColor: '#E0E0E0' }} />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base mb-12" style={{ color: '#A8A8A8' }}>
            Upload a photo of your hair and our AI will find the perfect match from our collection.
          </p>
          
          {/* AI Upload Area */}
          <div 
            className="border-2 border-dashed p-16 text-center transition-colors cursor-pointer hover:border-gray-400"
            style={{ borderColor: '#E0E0E0', backgroundColor: '#fff' }}
          >
            <input type="file" accept="image/*" className="hidden" id="ai-upload" />
            <label htmlFor="ai-upload" className="cursor-pointer">
              <svg className="mx-auto mb-4" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#A8A8A8" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
              </svg>
              <p className="text-sm tracking-wider uppercase mb-2">Upload Photo</p>
              <p className="text-xs" style={{ color: '#A8A8A8' }}>JPG, PNG up to 10MB</p>
            </label>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-32 px-12" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8A8A8' }}>Complete Your Order</p>
          <h2 className="text-5xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Secure Payment</h2>
          <div className="w-px h-8 mx-auto mt-8" style={{ backgroundColor: '#E0E0E0' }} />
        </div>

        <div className="max-w-lg mx-auto p-12 text-center" style={{ backgroundColor: '#fff', border: '1px solid #E0E0E0' }}>
          <h3 className="text-2xl font-normal mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Order Summary</h3>
          <p className="text-sm mb-8" style={{ color: '#A8A8A8' }}>Seamless Invisible Weft - 18"</p>
          <p className="text-5xl font-light mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>$289.00</p>
          
          <button 
            className="w-full py-5 px-8 flex items-center justify-center gap-3 text-sm tracking-wider uppercase text-white border-none cursor-pointer transition-colors"
            style={{ backgroundColor: '#0070ba', fontFamily: 'Questrial, sans-serif' }}
            onClick={() => alert('This is a demo. In production, this would redirect to PayPal checkout.')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c1.387 2.654-.186 5.718-3.656 6.787-1.564.48-3.32.576-5.024.576H10.12l-1.355 8.59h3.316a.641.641 0 0 0 .633-.54l.026-.17a.641.641 0 0 1 .633-.54h.399c2.589 0 4.612-.543 5.767-1.81a3.35 3.35 0 0 0 .607-.541c1.233-1.84 1.228-4.285-.133-6.313h.002a3.7 3.7 0 0 0-.186-.438h.002z"/>
            </svg>
            Pay with PayPal
          </button>

          <div className="flex items-center justify-center gap-2 mt-6 text-xs" style={{ color: '#A8A8A8' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Secured by PayPal
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-12" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8A8A8' }}>About Us</p>
          <h2 className="text-5xl font-light mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our Story</h2>
          <div className="w-px h-8 mx-auto mb-8" style={{ backgroundColor: '#E0E0E0' }} />
          <p className="text-lg font-light leading-relaxed mb-6">
            RC Hair was founded with a singular vision: to provide luxury hair extensions that look and feel completely natural.
          </p>
          <p className="text-base" style={{ color: '#A8A8A8' }}>
            Our premium collections are crafted using the finest quality hair, ensuring seamless blending and lasting beauty. Each piece is meticulously handcrafted to meet our exacting standards of excellence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-12 text-center" style={{ backgroundColor: '#333', color: '#fff' }}>
        <p className="text-xl tracking-widest uppercase mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>RC Hair</p>
        
        <div className="flex justify-center gap-10 mb-12">
          {['Privacy Policy', 'Terms of Service', 'Shipping', 'Returns'].map((link) => (
            <a key={link} href="#" className="text-xs tracking-wider uppercase no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {link}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/chloewang1997/" 
            target="_blank" 
            rel="noopener"
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://www.pinterest.com/a19531456634/" 
            target="_blank" 
            rel="noopener"
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
          </a>
        </div>

        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>&copy; 2024 RC Hair. All rights reserved.</p>
      </footer>

      {/* AI Chat SDK Button */}
      <button
        onClick={() => setSdkActive(!sdkActive)}
        className="fixed bottom-8 right-8 w-15 h-15 rounded-full border-none cursor-pointer shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
        style={{ backgroundColor: '#333' }}
        title="AI Assistant"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

      {/* Coze SDK Container */}
      <div 
        id="coze-sdk-container"
        className="fixed bottom-24 right-8 z-40"
        style={{ display: sdkActive ? 'block' : 'none' }}
      />

      {/* Coze Web SDK Script */}
      <script src="https://lf-cdn.coze.cn/sdk/coze-web.js" />
      <script dangerouslySetInnerHTML={{ __html: `
        new CozeWebSDK.WebChat({
          config: {
            botId: '7629917149187866634',
          },
          componentProps: {
            title: 'RC Hair Assistant',
          },
          element: document.getElementById('coze-sdk-container'),
        });
      `}} />
    </div>
  );
}
