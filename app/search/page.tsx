"use client";

import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock Data for Search
const MOCK_ITEMS = [
    { id: 101, title: "Vintage Levi's 501", price: "45.00", category: "Denim", image: "/vintage-denim.png", user: "denim_head" },
    { id: 102, title: "Patchwork Tee", price: "28.00", category: "Upcycled", image: "/patchwork.png", user: "art_wear" },
    { id: 103, title: "Oversized Hoodie", price: "35.00", category: "Streetwear", image: "/placeholder-1.jpg", user: "cozy_fits" }, // Fallback to vintage if placeholder fails
    { id: 104, title: "Y2K Cargo Pants", price: "55.00", category: "Y2K", image: "/vintage-denim.png", user: "retro_girl" },
    { id: 105, title: "Reworked Flannel", price: "42.00", category: "Upcycled", image: "/patchwork.png", user: "flannel_flip" },
    { id: 106, title: "90s Graphic Tee", price: "22.00", category: "Vintage", image: "/vintage-denim.png", user: "thrift_god" },
];

const CATEGORIES = ["All", "Denim", "Vintage", "Upcycled", "Streetwear", "Y2K"];

export default function DiscoverPage() {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = MOCK_ITEMS.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        return matchesQuery && matchesCategory;
    });

    return (
        <main className="min-h-screen bg-black pb-24 px-4 pt-4">

            {/* Search Header */}
            <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl pb-4 pt-2 -mx-4 px-4 border-b border-white/5">
                <h1 className="text-3xl font-heading font-bold text-white mb-4 tracking-tight">Discover</h1>

                <div className="relative mb-6 group">
                    <SearchIcon className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-white transition-colors" size={20} />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search tailored jeans, vintage tees..."
                        className="w-full bg-zinc-900/80 border border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-lg shadow-black/50"
                    />
                    {query && (
                        <button onClick={() => setQuery("")} className="absolute right-4 top-3.5 text-zinc-500 hover:text-white">
                            <X size={16} />
                        </button>
                    )}
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
                    {CATEGORIES.map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                            ${activeCategory === cat
                                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] transform scale-105'
                                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Grid */}
            <div className="mt-6 columns-2 gap-4 space-y-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <Link href={`/item/${item.id}`} key={item.id} className="block group break-inside-avoid relative">
                            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 transition-transform duration-500 group-hover:-translate-y-1">
                                <div className="aspect-[4/5] relative bg-zinc-800">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                </div>

                                <div className="absolute bottom-0 inset-x-0 p-3">
                                    <p className="text-white font-heading font-bold text-sm leading-tight mb-0.5">${item.price}</p>
                                    <p className="text-zinc-400 text-[10px] uppercase tracking-wider line-clamp-1">{item.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full pt-12 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-4 text-zinc-600">
                            <SearchIcon size={32} />
                        </div>
                        <h3 className="text-white font-medium mb-1">No results found</h3>
                        <p className="text-zinc-500 text-sm">Try adjusting your search or category.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
