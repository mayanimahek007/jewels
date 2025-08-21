"use client";

import { Truck, ShieldCheck, Headphones, Gem, Repeat, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-white" />,
    title: "Free Shipping & Returns",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "Free Lifetime Warranty",
  },
  {
    icon: <Headphones className="w-10 h-10 text-white" />,
    title: "24x7 Customer Support",
  },
  {
    icon: <Gem className="w-10 h-10 text-white" />,
    title: "Lifetime Diamond Upgrade",
  },
  {
    icon: <Repeat className="w-10 h-10 text-white" />,
    title: "Free 60 Day Resizing",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-white" />,
    title: "Certified Gold Jewellery",
  },
];

export default function GemsGlobalSet() {
  return (
    <section className="bg-[#2B4E4E] py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white">Gems Global's Promises</h2>
        <p className="text-gray-200 mt-2">
          Timeless Favourites, Always in Vogue
        </p>
        {/* Heading */}

        {/* Features */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-between gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#4a7d7d]">
                {feature.icon}
              </div>
              <p className="text-white text-sm font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
