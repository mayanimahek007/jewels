"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { FaThLarge, FaTh } from "react-icons/fa";

const products = [
  { id: 1, name: "Radiant And Trapezoid Diamond Five Stone Engagement Ring", brand: "GEMS GLOBAL JEWELS", price: 1200, image: "/img/Product/pendant.jpg", onSale: true },
  { id: 2, name: "East West Old Mine Moval Cut Half Bezel Accent Ring", brand: "GEMS GLOBAL JEWELS", price: 270, image: "/img/Product/ring.jpg", onSale: false },
  { id: 3, name: "Old European Round Cut Bezel Set Vintage Ring", brand: "GEMS GLOBAL JEWELS", price: 855, image: "/img/Product/ring2.jpg", onSale: false },
  { id: 4, name: "Vintage Style Cushion Diamond Engagement Ring", brand: "GEMS GLOBAL JEWELS", price: 950, image: "/img/Product/ring3.jpg", onSale: true },
  { id: 5, name: "Classic Solitaire Oval Engagement Ring", brand: "GEMS GLOBAL JEWELS", price: 720, image: "/img/Product/ring4.jpg", onSale: false },
];

export default function ProductPage() {
  const [gridCols, setGridCols] = useState(3);

  // Map gridCols to Tailwind class for desktop
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[gridCols];

  return (
    <div className="container mx-auto px-4 py-10">
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
        <p className="text-gray-700">{products.length} products</p>

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
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
