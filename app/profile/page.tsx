"use client";

import { Settings, Leaf, DollarSign, Grid, Bookmark } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<'closet' | 'saved'>('closet');

    const closetItems = [
        { id: 1, image: "/vintage-denim.png" },
        { id: 2, image: "/patchwork.png" },
        { id: 3, image: "/vintage-denim.png" },
        { id: 4, image: "/patchwork.png" }
    ];

    return (
        <main className="min-h-screen bg-black pb-24 px-4 pt-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-heading font-bold text-white tracking-tight">@eco_style</h1>
                <button className="p-2 hover:bg-zinc-900 rounded-full transition"><Settings className="text-zinc-400" size={20} /></button>
            </div>

            <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary to-blue-500 shrink-0">
                    <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden relative">
                        {/* Placeholder Avatar */}
                        <div className="absolute inset-0 flex items-center justify-center text-3xl">😎</div>
                    </div>
                </div>
                <div>
                    <h2 className="text-white font-heading font-bold text-2xl">Alex River</h2>
                    <p className="text-zinc-400 text-sm mb-2">Sustainable Fashion Enthusiast 🌿</p>
                    <div className="flex gap-4 text-xs font-medium text-zinc-300">
                        <span><strong className="text-white">142</strong> Followers</span>
                        <span><strong className="text-white">45</strong> Following</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-500" />
                    <Leaf className="text-emerald-500 mb-2 relative z-10" size={24} />
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white font-heading">12.5k</p>
                        <p className="text-xs text-zinc-500 font-medium">Liters Water Saved</p>
                    </div>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex flex-col justify-between h-28 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />
                    <DollarSign className="text-amber-500 mb-2 relative z-10" size={24} />
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white font-heading">$450</p>
                        <p className="text-xs text-zinc-500 font-medium">Earned Reselling</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-zinc-800 mb-1">
                <button
                    onClick={() => setActiveTab('closet')}
                    className={`flex-1 pb-3 flex justify-center items-center gap-2 text-sm font-medium transition-colors relative
                    ${activeTab === 'closet' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    <Grid size={18} />
                    My Closet
                    {activeTab === 'closet' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-t-full" />}
                </button>
                <button
                    onClick={() => setActiveTab('saved')}
                    className={`flex-1 pb-3 flex justify-center items-center gap-2 text-sm font-medium transition-colors relative
                    ${activeTab === 'saved' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    <Bookmark size={18} />
                    Saved
                    {activeTab === 'saved' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-t-full" />}
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
                {activeTab === 'closet' && closetItems.map((item, i) => (
                    <div key={i} className="aspect-square bg-zinc-900 relative group overflow-hidden cursor-pointer">
                        <Image src={item.image} alt="closet item" fill className="object-cover transition duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                    </div>
                ))}
                {activeTab === 'closet' && (
                    <div className="aspect-square bg-zinc-900/50 flex items-center justify-center text-zinc-700 text-xs text-center p-2 border border-zinc-800/50 border-dashed">
                        Add New
                    </div>
                )}

                {activeTab === 'saved' && (
                    <div className="col-span-3 py-12 flex flex-col items-center justify-center text-zinc-500">
                        <Bookmark size={32} strokeWidth={1.5} className="mb-2 opacity-50" />
                        <p className="text-sm">No saved items yet.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
