"use client";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState(false);

  return (
    <Link href={`/product/${product.id}`} className="group block">
      {/* Product Image Card */}
      <div className="relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white">
        {/* On Sale Badge */}
        {product.onSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            ON SALE
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault(); // prevent link navigation when clicking wishlist
            setWishlist(!wishlist);
          }}
          className="absolute text-gray-600 z-10"
          style={{
            top: "8px",
            right: "8px",
          }}
        >
          {wishlist ? (
            <FaHeart className="wishlist-icon" />
          ) : (
            <FaRegHeart className="wishlist-icon" />
          )}

          <style jsx>{`
            .wishlist-icon {
              width: 19px;
              height: 19px;
            }

            @media (min-width: 768px) {
              .wishlist-icon {
                width: 22px;
                height: 22px;
              }
              button {
                top: 12px !important;
                right: 12px !important;
              }
            }

            @media (min-width: 991px) {
              .wishlist-icon {
                width: 24px;
                height: 24px;
              }
              button {
                top: 14px !important;
                right: 14px !important;
              }
            }
          `}</style>
        </button>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Cart Icon on Hover */}
        <button
          onClick={(e) => {
            e.preventDefault(); // prevent redirect
            console.log("Add to cart:", product.id);
          }}
          className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
        >
          <HiOutlineShoppingCart className="text-gray-700" size={20} />
        </button>
      </div>

      {/* Product Info (OUTSIDE CARD) */}
      <div className="mt-3 px-1">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500">{product.brand}</p>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm font-semibold text-gray-900">
            ${product.price}
          </p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
