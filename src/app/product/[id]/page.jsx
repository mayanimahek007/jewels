'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import HeaderReact from '@/app/components/HeaderReact';
import Footer from '@/app/components/Footer';

// Sample product data - matches the structure from ProductPage
const sampleProducts = [
  {
    id: 1,
    name: "Radiant And Trapezoid Diamond Five Stone Engagement Ring",
    brand: "GEMS GLOBAL JEWELS",
    price: 1200,
    image: "/img/Product/pendant.jpg",
    onSale: true,
    description: "A stunning diamond engagement ring featuring five radiant and trapezoid diamonds, perfect for that special proposal moment. Crafted with precision and attention to detail.",
    details: {
      material: "18K Gold",
      diamond: "2.5 Carat Total Weight",
      weight: "8.5g",
      dimensions: "2.2cm x 1.5cm",
      style: "Engagement Ring",
      setting: "Prong Setting"
    }
  },
  {
    id: 2,
    name: "East West Old Mine Moval Cut Half Bezel Accent Ring",
    brand: "GEMS GLOBAL JEWELS",
    price: 270,
    image: "/img/Product/ring.jpg",
    onSale: false,
    description: "Elegant east-west old mine moval cut ring with half bezel accents, combining vintage charm with modern sophistication. A timeless piece for any jewelry collection.",
    details: {
      material: "14K Gold",
      diamond: "1.2 Carat",
      weight: "5.2g",
      dimensions: "1.8cm x 1.2cm",
      style: "Vintage Ring",
      setting: "Bezel Setting"
    }
  },
  {
    id: 3,
    name: "Old European Round Cut Bezel Set Vintage Ring",
    brand: "GEMS GLOBAL JEWELS",
    price: 855,
    image: "/img/Product/ring2.jpg",
    onSale: false,
    description: "Classic old European round cut diamond ring with bezel setting, perfect for vintage jewelry lovers. Features intricate detailing and exceptional craftsmanship.",
    details: {
      material: "18K Gold",
      diamond: "1.5 Carat",
      weight: "6.8g",
      dimensions: "2.0cm x 1.4cm",
      style: "Vintage Ring",
      setting: "Bezel Setting"
    }
  },
  {
    id: 4,
    name: "Vintage Style Cushion Diamond Engagement Ring",
    brand: "GEMS GLOBAL JEWELS",
    price: 950,
    image: "/img/Product/ring3.jpg",
    onSale: true,
    description: "Beautiful vintage-style cushion diamond engagement ring that captures the essence of timeless elegance. Perfect for making your proposal unforgettable.",
    details: {
      material: "18K White Gold",
      diamond: "1.8 Carat",
      weight: "7.2g",
      dimensions: "2.1cm x 1.6cm",
      style: "Engagement Ring",
      setting: "Halo Setting"
    }
  },
  {
    id: 5,
    name: "Classic Solitaire Oval Engagement Ring",
    brand: "GEMS GLOBAL JEWELS",
    price: 720,
    image: "/img/Product/ring4.jpg",
    onSale: false,
    description: "Timeless classic solitaire oval engagement ring that symbolizes eternal love. Simple yet elegant design that never goes out of style.",
    details: {
      material: "14K Gold",
      diamond: "1.0 Carat",
      weight: "4.5g",
      dimensions: "1.9cm x 1.3cm",
      style: "Solitaire Ring",
      setting: "Prong Setting"
    }
  }
];

export default function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In real app, fetch product by ID from API
    const productId = parseInt(params.id);
    const foundProduct = sampleProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <HeaderReact />
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <HeaderReact />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
              {product.onSale && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  ON SALE
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <span className="text-sm font-medium text-blue-600">{product.brand}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
            </div>

            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">${product.price}</p>
              {product.originalPrice && (
                <p className="text-lg text-gray-400 line-through ml-2">
                  ${product.originalPrice}
                </p>
              )}
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
              <div className="space-y-2">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition duration-200 font-semibold">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
