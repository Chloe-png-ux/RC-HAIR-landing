export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'wefts' | 'toppers';
  image: string;
  colors: string[];
  lengths: number[];
  inStock: boolean;
}

export interface UGCPost {
  id: string;
  image: string;
  handle: string;
  productIds?: string[];
}

export interface ColorMatchResult {
  detectedColor: string;
  colorHex: string;
  recommendedProducts: Product[];
  confidence: number;
}

export interface AffiliateApplication {
  name: string;
  email: string;
  salonName: string;
  socialHandle: string;
  portfolio: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}
