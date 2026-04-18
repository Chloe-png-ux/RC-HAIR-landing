"use client";
import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
}

export function ProductCard(
    {
        product
    }: ProductCardProps
) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {}
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                {}
                <div
                    className={`absolute inset-x-0 bottom-0 p-4 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${isHovered ? "translate-y-0" : "translate-y-full"}`}>
                    <button
                        className="w-full py-3 bg-elite-charcoal text-white text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors">Quick Add
                                  </button>
                </div>
                {}
                {!product.inStock && <div className="absolute top-4 left-4 bg-white/90 px-3 py-1">
                    <span className="text-xs tracking-wide text-muted-foreground">Sold Out</span>
                </div>}
            </div>
            {}
            <div className="space-y-2">
                <div className="flex justify-between items-start">
                    <h3
                        className="font-serif text-lg text-foreground group-hover:text-elite-charcoal transition-colors">
                        Hand Tied Weft&nbsp;
                    </h3>
                    <p className="text-foreground font-medium">${product.price}</p>
                </div>
                {}
                <div className="flex gap-1.5">
                    {product.colors.slice(0, 4).map((color, index) => <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-elite-light-grey"
                        style={{
                            backgroundColor: color
                        }}
                        title={color} />)}
                    {product.colors.length > 4 && <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>}
                </div>
                {}
                <p className="text-xs text-muted-foreground">
                    {product.lengths.join(", ")}"
                            </p>
            </div>
        </div>
    );
}