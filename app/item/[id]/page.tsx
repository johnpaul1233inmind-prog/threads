"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Share2, Scissors, ShoppingBag, MapPin, Leaf } from "lucide-react";
import Link from "next/link";
import { getAnalysisResultAction, AnalysisResult } from "@/app/actions";
import { cn } from "@/lib/utils";

export default function ResultPage() {
    const { id } = useParams();
    const [data, setData] = useState<AnalysisResult | null>(null);

    useEffect(() => {
        if (id) {
            getAnalysisResultAction(id as string).then(setData);
        }
    }, [id]);

    if (!data) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading result...</div>;

    return (
        <main className="min-h-screen bg-zinc-950 pb-24">
            {/* Header Image Area */}
            <div className="relative h-[40vh] bg-zinc-800 w-full overflow-hidden">
                <Link href="/upload" className="absolute top-6 left-6 z-20 p-2 bg-black/50 backdrop-blur rounded-full text-white">
                    <ArrowLeft size={24} />
                </Link>
                <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
                    GARMENT PHOTO
                </div>
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
            </div>

            <div className="px-6 -mt-12 relative z-10 w-full max-w-xl mx-auto space-y-8">

                {/* Title & Classification */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-white leading-tight">{data.title}</h1>

                    <div className="flex items-center gap-2">
                        <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                            data.category === 'Resale' ? "bg-emerald-500/20 text-emerald-500" :
                                data.category === 'Repair' ? "bg-amber-500/20 text-amber-500" :
                                    "bg-purple-500/20 text-purple-500"
                        )}>
                            {data.category}
                        </span>
                        <span className="text-zinc-400 text-xs uppercase tracking-widest">{data.garmentType}</span>
                    </div>
                </div>

                {/* Price & Sustainability */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                        <h3 className="text-zinc-400 text-xs uppercase mb-1">Deep Resale Value</h3>
                        <p className="text-2xl font-bold text-emerald-400">
                            {data.priceRange.currency} {data.priceRange.min}-{data.priceRange.max}
                        </p>
                    </div>
                    <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                        <h3 className="text-zinc-400 text-xs uppercase mb-1">Eco Impact</h3>
                        <p className="text-2xl font-bold text-blue-400">
                            {data.sustainabilityScore}/10
                        </p>
                    </div>
                </div>

                {/* Analysis Details */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-white">Analysis details</h2>
                    <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 space-y-4">
                        <div>
                            <span className="text-zinc-500 text-sm block mb-1">Material</span>
                            <p className="text-zinc-200">{data.material}</p>
                        </div>
                        <div>
                            <span className="text-zinc-500 text-sm block mb-1">Imperfections</span>
                            <ul className="list-disc list-inside text-zinc-300 space-y-1">
                                {data.imperfections.map((imp, i) => (
                                    <li key={i}>{imp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Actionable Suggestions */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-white">What to do next?</h2>

                    {data.upcyclingIdeas.map((idea, i) => (
                        <div key={i} className="flex gap-4 items-center bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <Scissors size={20} className="text-primary" />
                            </div>
                            <p className="text-sm text-zinc-300">{idea}</p>
                        </div>
                    ))}

                    {/* Local Recommendations */}
                    {data.localRecommendations.map((rec, i) => (
                        <div key={`loc-${i}`} className="flex gap-4 items-center bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                <MapPin size={20} className="text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-300 mb-0.5">{rec.message}</p>
                                <div className="text-xs text-blue-400 font-medium cursor-pointer hover:underline">
                                    Find nearby {rec.type}s &rarr;
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Caption Generator */}
                <div className="space-y-2 pt-4">
                    <h2 className="text-lg font-semibold text-white">Generated Video Caption</h2>
                    <div className="bg-black border border-zinc-800 p-4 rounded-xl relative group">
                        <p className="text-zinc-300 italic pr-8">"{data.caption}"</p>
                        <button className="absolute top-2 right-2 p-2 hover:bg-zinc-800 rounded-lg transition">
                            <Share2 size={16} className="text-zinc-400" />
                        </button>
                    </div>
                </div>

                <div className="h-20" /> {/* Spacer for fixed footer */}
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-900/80 backdrop-blur-xl border-t border-white/5 p-4 safe-pd pb-24 md:pb-4">
                <div className="max-w-xl mx-auto flex items-center gap-4">
                    <button className="p-3 bg-zinc-800 rounded-xl text-white hover:bg-zinc-700 transition">
                        <ShoppingBag size={24} />
                    </button>
                    <button className="flex-1 bg-white text-black font-bold py-3.5 rounded-xl hover:bg-zinc-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Add to Cart - {data.priceRange.currency} {data.priceRange.min}
                    </button>
                </div>
            </div>
        </main>
    );
}
