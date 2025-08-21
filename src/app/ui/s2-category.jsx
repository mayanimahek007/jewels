'use client';

import Image from 'next/image';
import Link from 'next/link';
import Heading from './heading';

export default function S2CategorySection() {
    const categories = [
        { title: 'Eternity Rings', img: '/img/category/eternity ring.png', link: '#' },
        { title: 'Pendants', img: '/img/category/pendent.png', link: '#' },
        { title: 'Earrings', img: '/img/category/earring.png', link: '#' },
        { title: 'Bracelets', img: '/img/category/bracelets.png', link: '#' },
        { title: 'Necklace', img: '/img/category/necklaces.png', link: '#' },
    ];

    return (
        <section className="py-10 bg-white pt-12">
            <Heading title="Explore Categories" />
            <div className="lg:grid lg:grid-cols-5 lg:gap-6
                flex lg:flex-none gap-4 overflow-x-auto scrollbar-hide px-4
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map((cat, index) => (
                    <Link
                        key={index}
                        href={cat.link}
                        className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition flex-shrink-0 w-52 sm:w-60 lg:w-auto"
                    >
                        {/* Image */}
                        <div className="w-full h-56 sm:h-64 xl:h-80 relative">
                            <Image
                                src={cat.img}
                                alt={cat.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 z-10">
                            <span className="bg-[#2B4E4E] text-white px-4 py-2 text-xs sm:text-sm font-medium shadow border-2 border-white">
                                {cat.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
