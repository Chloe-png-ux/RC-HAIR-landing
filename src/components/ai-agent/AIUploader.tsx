'use client';

import { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Upload, Sparkles, Check, CreditCard, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { PayPalButton } from '@/components/ui/PayPalButton';
import type { ColorMatchResult, Product } from '@/types';
import { ProductCard } from '@/components/products';

const MOCK_PRODUCTS: Product[] = [
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
    id: 'p6',
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
    id: 'p7',
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
    id: 'p8',
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

const COLOR_NAMES: Record<string, string> = {
  '#1A1A1A': 'Jet Black',
  '#2C1810': 'Dark Espresso',
  '#3D2314': 'Rich Chocolate',
  '#4A3728': 'Warm Brown',
  '#5C3D2E': 'Cinnamon',
  '#6B4423': 'Caramel',
  '#8B6914': 'Golden Brown',
  '#8B7355': 'Ash Brown',
  '#C4A77D': 'Honey Blonde',
  '#E8D4B8': 'Natural Blonde',
};

export function AIUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [matchResult, setMatchResult] = useState<ColorMatchResult | null>(null);
  const [showPayPal, setShowPayPal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const processImage = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setUploadedImage(result);
      setIsProcessing(true);
      setMatchResult(null);
      setShowPayPal(false);

      // Simulate AI processing
      setTimeout(() => {
        const detectedColors = [
          { hex: '#4A3728', weight: 0.6 },
          { hex: '#6B4423', weight: 0.3 },
          { hex: '#2C1810', weight: 0.1 },
        ];

        const primaryColor = detectedColors[0].hex;
        const matchedProducts = MOCK_PRODUCTS.filter((p) =>
          p.colors.some((c) => {
            const colorDist = Math.abs(parseInt(c.slice(1), 16) - parseInt(primaryColor.slice(1), 16));
            return colorDist < 500000;
          })
        ).slice(0, 3);

        setMatchResult({
          detectedColor: COLOR_NAMES[primaryColor] || 'Warm Brown',
          colorHex: primaryColor,
          recommendedProducts: matchedProducts.length > 0 ? matchedProducts : MOCK_PRODUCTS.slice(0, 2),
          confidence: 94 + Math.floor(Math.random() * 5),
        });
        setIsProcessing(false);
        toast.success('Color analysis complete');
      }, 2500);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) processImage(file);
    },
    [processImage]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processImage(file);
    },
    [processImage]
  );

  return (
    <section id="ai-upload" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-elite-charcoal" />
            <p className="text-sm tracking-[0.3em] text-elite-grey uppercase">
              AI-Powered
            </p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
            Your Personal Hair Consultant
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload a photo and our AI will analyze your hair color to recommend the perfect extensions for a seamless match.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Upload Section */}
          <div className="space-y-8">
            {/* Upload Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative aspect-square border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 overflow-hidden ${
                isDragging
                  ? 'border-elite-charcoal bg-elite-charcoal/5'
                  : 'border-elite-grey/50 hover:border-elite-charcoal bg-white'
              } ${uploadedImage ? 'border-solid border-elite-grey/30' : ''}`}
            >
              {uploadedImage ? (
                <Image
                  src={uploadedImage}
                  alt="Uploaded hair photo"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                    <Upload className="w-8 h-8 text-elite-grey" />
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    Drop your photo here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse
                  </p>
                  <p className="text-xs text-elite-grey mt-4">
                    JPG, PNG up to 10MB
                  </p>
                </div>
              )}

              {/* Processing Overlay */}
              {isProcessing && (
                <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center">
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 border-4 border-elite-light-grey rounded-full" />
                    <div className="absolute inset-0 border-4 border-transparent border-t-elite-charcoal rounded-full processing-ring" />
                    <div className="absolute inset-2 border-4 border-transparent border-b-elite-grey rounded-full processing-ring" style={{ animationDirection: 'reverse' }} />
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    Analyzing your hair color
                  </p>
                  <p className="text-sm text-muted-foreground animate-pulse">
                    Please wait...
                  </p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Uploaded Photo Info */}
            {uploadedImage && !isProcessing && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setUploadedImage(null);
                    setMatchResult(null);
                    setShowPayPal(false);
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Upload new photo
                </button>
                <span className="text-elite-light-grey">|</span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-sm text-elite-charcoal hover:text-foreground transition-colors"
                >
                  Change photo
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            {matchResult ? (
              <>
                {/* Match Result */}
                <div className="bg-white p-8 space-y-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <p className="text-sm text-muted-foreground">Match Found</p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div
                      className="w-20 h-20 rounded-lg shadow-inner"
                      style={{ backgroundColor: matchResult.colorHex }}
                    />
                    <div>
                      <p className="font-serif text-2xl text-foreground">
                        {matchResult.detectedColor}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {matchResult.confidence}% match confidence
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-elite-light-grey pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Recommended for you
                    </p>
                    <div className="space-y-4">
                      {matchResult.recommendedProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="font-medium text-foreground">
                              {product.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              from ${product.price}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {product.colors.slice(0, 3).map((color, i) => (
                              <div
                                key={i}
                                className="w-5 h-5 rounded-full border border-elite-light-grey"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PayPal CTA */}
                <div className="bg-elite-charcoal p-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5 text-white/70" />
                    <p className="text-xs text-white/70 tracking-wide uppercase">
                      Secure Checkout
                    </p>
                  </div>
                  
                  {showPayPal ? (
                    <PayPalButton
                      amount={matchResult.recommendedProducts[0]?.price || 289}
                      productName={matchResult.recommendedProducts[0]?.name || 'RCHAIR Extensions'}
                      onSuccess={(orderId) => {
                        console.log('Order successful:', orderId);
                      }}
                      onError={(error) => {
                        console.error('Payment error:', error);
                      }}
                      className="!bg-transparent"
                    />
                  ) : (
                    <button
                      onClick={() => setShowPayPal(true)}
                      className="w-full py-4 bg-[#0070ba] text-white font-medium tracking-wide hover:bg-[#005ea6] transition-colors"
                    >
                      Shop This Match with PayPal
                    </button>
                  )}
                  
                  <p className="text-xs text-white/50 mt-3 text-center">
                    Buyer Protection included
                  </p>
                </div>
              </>
            ) : (
              <div className="bg-white p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-elite-grey" />
                </div>
                <p className="text-foreground font-medium mb-2">
                  Ready to find your match
                </p>
                <p className="text-sm text-muted-foreground">
                  Upload a clear photo of your hair to get personalized recommendations
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Featured Products */}
        {matchResult && matchResult.recommendedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif text-2xl text-foreground mb-8 text-center">
              Shop Your Match
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {matchResult.recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
