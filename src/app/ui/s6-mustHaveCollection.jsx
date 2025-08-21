"use client";

import Image from "next/image";
import { useState } from "react";
import Heading from "./heading";

export default function MustHaveCollection() {
  const [activeTab, setActiveTab] = useState(0);

  const collections = [
    {
      title: "Loved by Jewellery Enthusiasts Worldwide",
      description:
        "From expert core tips and styling advice to the latest trends and timeless stories, curated just for you.",
      image: "/img/M1/1.png",
      highlights: [
        "Expert styling tips",
        "Trending jewellery insights",
        "Stories behind timeless pieces",
      ],
    },
    {
      title: "Loved by Jewellery Enthusiasts Worldwide",
      description:
        "From expert core tips and styling advice to the latest trends and timeless stories, curated just for you.",
      image: "/img/M1/2.png",
      highlights: [
        "Expert styling tips",
        "Trending jewellery insights",
        "Stories behind timeless pieces",
      ],
    },
    {
      title: "Loved by Jewellery Enthusiasts Worldwide",
      description:
        "From expert core tips and styling advice to the latest trends and timeless stories, curated just for you.",
      image: "/img/M1/3.png",
      highlights: [
        "Expert styling tips",
        "Trending jewellery insights",
        "Stories behind timeless pieces",
      ],
    },
    // {
    //   title: "Timeless Classics for Every Occasion",
    //   description:
    //     "Discover pieces that transcend trends and become cherished heirlooms for generations to come.",
    //   image: "/img/M1/2.png",
    //   highlights: [
    //     "Perfect for weddings & parties",
    //     "Made with premium craftsmanship",
    //     "Heirloom-worthy designs",
    //   ],
    // },
    // {
    //   title: "Elegance That Lasts",
    //   description:
    //     "Pieces designed to shine through every season with timeless grace and durability.",
    //   image: "/img/M1/3.png",
    //   highlights: [
    //     "Sophisticated craftsmanship",
    //     "Durable and elegant",
    //     "A style for every moment",
    //   ],
    // },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <Heading title="Our Must Have's Collection" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
            Timeless Favourites, Always in Vogue
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-2">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)}
                  className={`pb-2 px-2 text-sm sm:text-base font-medium transition-colors ${
                    activeTab === index
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Collection {index + 1}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                {collections[activeTab].title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {collections[activeTab].description}
              </p>

              {/* Highlights */}
              <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                {collections[activeTab].highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <button className="bg-[#2B4E4E] text-white text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-primary-dark transition-colors">
                Explore Collection
              </button>
            </div>
          </div>

          {/* Right Column - Fixed Image Size */}
          <div className="relative group">
            <div className="w-full aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={collections[activeTab].image || "/placeholder.jpg"}
                alt={collections[activeTab].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden mt-10">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {collections.map((collection, index) => (
              <div
                key={index}
                className={`flex-1 min-w-[260px] p-4 sm:p-6 rounded-lg border-2 cursor-pointer transition ${
                  activeTab === index
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {collection.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {collection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
