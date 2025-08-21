"use client";
import Image from "next/image";

export default function JewelryShowcase() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 pt-8">
      {/* Left Card - Best Selling Jewelry */}
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/img/jewelry-left.png" // replace with your actual image path
          alt="Best Selling Jewelry"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-2xl md:text-base lg:text-2xl font-semibold mb-3">Best Selling Jewelry</h2>
          <button className="px-6 py-2 border border-white text-[10px] text-white hover:bg-white hover:text-black transition rounded-md">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* center Card - Ready To Ship */}
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/img/jewelry-right (1).png" // replace with your actual image path
          alt="Ready To Ship"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-2xl md:text-base lg:text-2xl font-semibold mb-3">Ready To Ship</h2>
          <button className="px-6 py-2 border border-white text-[10px] text-white hover:bg-white hover:text-black transition rounded-md">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/img/jewelry-right.svg" // replace with your actual image path
          alt="Ready To Ship"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-2xl md:text-base lg:text-2xl font-semibold mb-3">Ready To Ship</h2>
          <button className="px-6 py-2 border border-white text-[10px] text-white hover:bg-white hover:text-black transition rounded-md">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
