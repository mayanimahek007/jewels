"use client";

import Image from "next/image";

export default function GiftSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#f9f9f9] to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Perfect Gifts for Every Occasion
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Celebrate life’s most precious moments with our exquisite jewelry gift collection. 
            From timeless classics to modern treasures, each piece is crafted to make 
            every occasion truly unforgettable.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#2B4E4E] rounded-full"></span>
              Luxury Jewelry Gifting
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#2B4E4E] rounded-full"></span>
              Perfect for Weddings & Anniversaries
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#2B4E4E] rounded-full"></span>
              Curated Collections for Loved Ones
            </li>
          </ul>

          <button className="mt-4 bg-[#2B4E4E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1F3838] transition-all">
            Explore Gifts
          </button>
        </div>

        {/* Right Side - 4 Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/img/G1/1.png"
              alt="Gift 1"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/img/G1/2.png"
              alt="Gift 2"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/img/G1/3.png"
              alt="Gift 3"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/img/G1/4.png"
              alt="Gift 4"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
