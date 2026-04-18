'use client';

import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: PayPalButtonConfig) => { render: (selector: string) => void };
    };
  }
}

interface PayPalButtonConfig {
  style?: {
    layout?: 'horizontal' | 'vertical';
    color?: 'gold' | 'blue' | 'silver' | 'black';
    shape?: 'rect' | 'pill';
    size?: 'small' | 'medium' | 'large';
    label?: 'paypal' | 'checkout' | 'buynow' | 'pay';
  };
  createOrder?: (data: unknown, actions: { order: { create: (order: PayPalOrder) => Promise<string> } }) => Promise<string>;
  onApprove?: (data: { orderID: string }, actions: { order: { capture: () => Promise<unknown> } }) => Promise<void>;
  onCancel?: () => void;
  onError?: (err: Error) => void;
}

interface PayPalOrder {
  purchase_units: Array<{
    amount: {
      currency_code: string;
      value: string;
    };
    description?: string;
  }>;
}

interface PayPalButtonProps {
  amount: number;
  productName: string;
  onSuccess?: (orderId: string) => void;
  onError?: (error: string) => void;
  className?: string;
}

export function PayPalButton({
  amount,
  productName,
  onSuccess,
  onError,
  className = '',
}: PayPalButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRendered = useRef(false);

  useEffect(() => {
    // Load PayPal SDK
    if (!window.paypal) {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=sb&currency=USD&intent=capture`;
      script.async = true;
      
      script.onload = () => {
        setIsSDKLoaded(true);
      };
      
      script.onerror = () => {
        console.error('Failed to load PayPal SDK');
        toast.error('Payment system unavailable. Please try again later.');
      };
      
      document.body.appendChild(script);
    } else {
      setIsSDKLoaded(true);
    }

    return () => {
      // Cleanup not needed for SDK script
    };
  }, []);

  useEffect(() => {
    if (isSDKLoaded && window.paypal && containerRef.current && !hasRendered.current) {
      hasRendered.current = true;
      
      window.paypal.Buttons({
        style: {
          layout: 'horizontal',
          color: 'gold',
          shape: 'rect',
          size: 'medium',
          label: 'paypal',
        },
        createOrder: (data, actions) => {
          setIsLoading(true);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: amount.toFixed(2),
                },
                description: productName,
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          try {
            const order = await actions.order.capture();
            console.log('Order captured:', order);
            toast.success('Payment successful! Thank you for your order.');
            onSuccess?.(data.orderID);
          } catch (error) {
            console.error('Capture failed:', error);
            toast.error('Payment capture failed. Please contact support.');
            onError?.('Capture failed');
          } finally {
            setIsLoading(false);
          }
        },
        onError: (err) => {
          console.error('PayPal error:', err);
          toast.error('Payment failed. Please try again.');
          onError?.(err.message);
          setIsLoading(false);
        },
        onCancel: () => {
          toast.info('Payment cancelled.');
          setIsLoading(false);
        },
      }).render(`#paypal-button-container-${productName.replace(/\s+/g, '-')}`);
    }
  }, [isSDKLoaded, amount, productName, onSuccess, onError]);

  return (
    <div className={`space-y-3 ${className}`}>
      <div
        id={`paypal-button-container-${productName.replace(/\s+/g, '-')}`}
        ref={containerRef}
        className="min-h-[40px]"
      />
      
      {isLoading && (
        <div className="flex items-center justify-center gap-2 py-2">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span className="text-sm text-white/80">Processing...</span>
        </div>
      )}

      {/* Fallback if PayPal doesn't load */}
      {!isSDKLoaded && (
        <button
          onClick={() => toast.info('Payment system loading...')}
          className="w-full py-4 bg-[#0070ba] text-white font-medium tracking-wide hover:bg-[#005ea6] transition-colors flex items-center justify-center gap-2"
        >
          <span>Pay with</span>
          <span className="font-bold">PayPal</span>
        </button>
      )}

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-xs text-muted-foreground">
          Secure checkout powered by PayPal
        </span>
      </div>
    </div>
  );
}
