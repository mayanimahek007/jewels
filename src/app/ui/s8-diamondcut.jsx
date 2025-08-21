"use client";

import Image from "next/image";
import Heading from "./heading";

export default function DiamondShowcase() {
  const diamonds = [
    {
      title: "Brilliant Cut",
      image: "/img/M1/11.png", // replace with your image
      link: "#",
    },
    {
      title: "Old Cut",
      image: "/img/M1/1112.png",
      link: "#",
    },
    {
      title: "Antique Cut",
      image: "/img/M1/1113.png",
      link: "#",
    },
    {
      title: "Color Diamonds",
      image: "/img/M1/1114.png",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
                   <Heading title="Lab Grown Diamond" />
         
          
          <p className="mt-2 text-base sm:text-lg text-gray-600">
            A Shape for Every Story – Antique to IGI-Certified
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {diamonds.map((diamond, index) => (
            <div key={index} className="text-center">
              {/* Image Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="relative w-full aspect-[4/6]">
                  <Image
                    src={diamond.image}
                    alt={diamond.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title Outside */}
              <a
                href={diamond.link}
                className="mt-4 block font-semibold text-[#2B4E4E] hover:underline"
              >
                {diamond.title} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
