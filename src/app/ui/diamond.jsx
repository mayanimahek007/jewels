"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Gem, Sparkles, Heart, ShoppingCart, Filter, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Sample data. Replace with your real data or fetch from API ---
const DIAMONDS = [
  {
    id: "DIA-1001",
    title: "Round Brilliant 1.02ct",
    shape: "Round",
    color: "G",
    clarity: "VS1",
    carat: 1.02,
    price: 5850,
    image: "/img/diamonds/round-1.png",
    imageAlt: "/img/diamonds/round-1-alt.png",
  },
  {
    id: "DIA-1002",
    title: "Princess Cut 0.90ct",
    shape: "Princess",
    color: "F",
    clarity: "VVS2",
    carat: 0.9,
    price: 4990,
    image: "/img/diamonds/princess-1.png",
    imageAlt: "/img/diamonds/princess-1-alt.png",
  },
  {
    id: "DIA-1003",
    title: "Oval 1.20ct",
    shape: "Oval",
    color: "H",
    clarity: "SI1",
    carat: 1.2,
    price: 6299,
    image: "/img/diamonds/oval-1.png",
    imageAlt: "/img/diamonds/oval-1-alt.png",
  },
  {
    id: "DIA-1004",
    title: "Emerald 1.50ct",
    shape: "Emerald",
    color: "E",
    clarity: "VS2",
    carat: 1.5,
    price: 11200,
    image: "/img/diamonds/emerald-1.png",
    imageAlt: "/img/diamonds/emerald-1-alt.png",
  },
  {
    id: "DIA-1005",
    title: "Pear 0.70ct",
    shape: "Pear",
    color: "G",
    clarity: "SI1",
    carat: 0.7,
    price: 2890,
    image: "/img/diamonds/pear-1.png",
    imageAlt: "/img/diamonds/pear-1-alt.png",
  },
  {
    id: "DIA-1006",
    title: "Cushion 1.00ct",
    shape: "Cushion",
    color: "F",
    clarity: "VS1",
    carat: 1.0,
    price: 5599,
    image: "/img/diamonds/cushion-1.png",
    imageAlt: "/img/diamonds/cushion-1-alt.png",
  },
];

const SHAPES = ["Round", "Princess", "Oval", "Emerald", "Pear", "Cushion"]; 
const SORTS = [
  { key: "pop", label: "Most Popular" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "carat-desc", label: "Carat: High to Low" },
];

export default function DiamondSection1() {
  const [activeShapes, setActiveShapes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 12000]);
  const [sortBy, setSortBy] = useState("pop");
  const [wishlist, setWishlist] = useState({});

  const filtered = useMemo(() => {
    let items = DIAMONDS.filter((d) => {
      const inPrice = d.price >= priceRange[0] && d.price <= priceRange[1];
      const inShape = activeShapes.length ? activeShapes.includes(d.shape) : true;
      return inPrice && inShape;
    });

    switch (sortBy) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "carat-desc":
        items.sort((a, b) => b.carat - a.carat);
        break;
      default:
        // pop: keep original order
        break;
    }

    return items;
  }, [activeShapes, priceRange, sortBy]);

  const toggleShape = (shape) => {
    setActiveShapes((prev) =>
      prev.includes(shape) ? prev.filter((s) => s !== shape) : [...prev, shape]
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative w-full">
      {/* Hero / Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 sm:p-10 shadow-sm border border-slate-200">
        <div className="absolute -top-10 -right-10 opacity-20">
          <Sparkles className="h-32 w-32" />
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-medium">
              <Gem className="h-4 w-4" />
              Certified Diamonds
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Find Your Perfect Diamond
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Explore hand‑picked stones by shape, carat and price. Each diamond is
              independently graded and includes a 360° view.
            </p>
          </div>

          {/* Controls */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:flex items-center gap-3">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full sm:w-56 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Price:</span>
              <input
                type="number"
                min={0}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-20 rounded-md border border-slate-200 px-2 py-1 focus:outline-none"
              />
              <span className="text-slate-400">—</span>
              <input
                type="number"
                min={0}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-20 rounded-md border border-slate-200 px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Shape filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {SHAPES.map((shape) => {
            const active = activeShapes.includes(shape);
            return (
              <button
                key={shape}
                onClick={() => toggleShape(shape)}
                className={`rounded-2xl px-3 py-1.5 text-sm transition-all border ${
                  active
                    ? "bg-slate-900 text-white border-slate-900 shadow"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                }`}
              >
                {shape}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
        <span>
          Showing <strong>{filtered.length}</strong> of {DIAMONDS.length} diamonds
        </span>
        {activeShapes.length > 0 && (
          <button
            onClick={() => setActiveShapes([])}
            className="underline underline-offset-4 hover:text-slate-900"
          >
            Clear shape filters
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="mt-4 grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence>
          {filtered.map((d) => (
            <motion.div
              key={d.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm hover:shadow-md"
            >
              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(d.id)}
                aria-label="Wishlist"
                className="absolute right-3 top-3 z-10 rounded-full border border-slate-200 bg-white p-2 hover:shadow"
              >
                <Heart
                  className={`h-4 w-4 ${wishlist[d.id] ? "fill-slate-900 text-slate-900" : "text-slate-700"}`}
                />
              </button>

              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={d.imageAlt}
                  alt={`${d.title} alternate`}
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="mt-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 line-clamp-1">{d.title}</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      {d.shape} • {d.color} Color • {d.clarity} • {d.carat.toFixed(2)}ct
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">${d.price.toLocaleString()}</p>
                    <p className="text-[11px] text-slate-500">Incl. all taxes</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <button className="flex-1 rounded-xl bg-slate-900 px-3 py-2 text-white text-xs font-medium hover:opacity-90">
                    View Details
                  </button>
                  <button className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-900 hover:border-slate-400 flex items-center gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </button>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-medium text-slate-700 border border-slate-200 inline-flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> 360° View
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-10 text-center shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">Need help choosing?</h3>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Talk to our gem experts for a personalized shortlist based on your budget and preferences. No pressure, just guidance.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <button className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white text-sm font-medium hover:opacity-90">Chat with an Expert</button>
          <button className="rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:border-slate-400">Explore Settings</button>
        </div>
      </div>
    </section>
  );
}
