"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { FaThLarge, FaTh, FaRegHeart, FaHeart } from "react-icons/fa";
import { Heart } from "lucide-react";

// Sample wishlist products - in real app, this would come from state/context
const wishlistProducts = [
  { id: 1, name: "Radiant And Trapezoid Diamond Five Stone Engagement Ring", brand: "GEMS GLOBAL JEWELS", price: 1200, image: "/img/Product/pendant.jpg", onSale: true },
  { id: 2, name: "East West Old Mine Moval Cut Half Bezel Accent Ring", brand: "GEMS GLOBAL JEWELS", price: 270, image: "/img/Product/ring.jpg", onSale: false },
  { id: 3, name: "Old European Round Cut Bezel Set Vintage Ring", brand: "GEMS GLOBAL JEWELS", price: 855, image: "/img/Product/ring2.jpg", onSale: false },
];

export default function WishlistPage() {
  const [gridCols, setGridCols] = useState(3);
  const [wishlistItems, setWishlistItems] = useState(wishlistProducts);

  // Map gridCols to Tailwind class for desktop
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[gridCols];

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2B4E4E] mb-2">My Wishlist</h1>
        <p className="text-gray-600">
          {wishlistItems.length === 0 
            ? "Your wishlist is empty" 
            : `${wishlistItems.length} ${wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist`
          }
        </p>
      </div>

      {wishlistItems.length > 0 ? (
        <>
          {/* Top Controls */}
          <div className="flex flex-wrap justify-between items-center mb-6 text-gray-700">
            
            {/* View Toggle - hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">View As</span>
              <button
                onClick={() => setGridCols(2)}
                className={`p-2 border rounded ${gridCols === 2 ? "bg-gray-200" : ""}`}
              >
                <FaTh size={16} />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 border rounded ${gridCols === 3 ? "bg-gray-200" : ""}`}
              >
                <FaThLarge size={16} />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 border rounded ${gridCols === 4 ? "bg-gray-200" : ""}`}
              >
                <FaThLarge size={18} />
              </button>
            </div>

            {/* Product Count */}
            <p className="text-gray-700">{wishlistItems.length} products</p>

            {/* Sorting */}
            <div>
              <select className="border rounded px-3 py-2 text-sm border-[#2B4E4E]">
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid gap-6 grid-cols-2 ${gridClass}`}>
            {wishlistItems.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 p-2"
                  title="Remove from wishlist"
                >
{/* <FaHeart className="text-[#2B4E4E] text-lg" /> */}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Empty Wishlist State */
        <div className="text-center py-20">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6">Add items you love to your wishlist to save them for later</p>
          <Link 
            href="/product" 
            className="inline-block bg-[#2B4E4E] text-white px-6 py-3 rounded-md hover:bg-[#1a3a3a] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
