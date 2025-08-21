"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftShowcase() {
  const [mainImage, setMainImage] = useState("/img/jewelry-right.png");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mainImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={mainImage}
            alt="Gift Preview"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay (left side only) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B4E4E]/90 via-[#2B4E4E]/60 to-transparent"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-lg text-white">
        <h1 className="text-4xl md:text-6xl font-bold italic mb-6 leading-tight">
          The Perfect Gift
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Make every moment special with a curated collection designed for him and her.
        </p>

        {/* Hover Buttons */}
        <div className="flex gap-4">
          <div
            onMouseEnter={() => setMainImage("/img/jewelry-right (1).png")}
            onMouseLeave={() => setMainImage("/img/jewelry-right.png")}
            className="px-6 py-3 bg-pink-500 rounded-xl shadow-lg hover:bg-pink-600 transition cursor-pointer"
          >
            Gift For Her
          </div>

          <div
            onMouseEnter={() => setMainImage("/img/jewelry-left.png")}
            onMouseLeave={() => setMainImage("/img/jewelry-right.png")}
            className="px-6 py-3 bg-blue-500 rounded-xl shadow-lg hover:bg-blue-600 transition cursor-pointer"
          >
            Gift For Him
          </div>
        </div>
      </div>
    </section>
  );
}
