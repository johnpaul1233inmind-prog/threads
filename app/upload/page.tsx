"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Upload, Camera, Loader2 } from "lucide-react";
import { analyzeImageAction } from "@/app/actions";

export default function UploadPage() {
    const router = useRouter();
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsAnalyzing(true);

        try {
            const formData = new FormData();
            formData.append("image", file);

            // Call Server Action
            const result = await analyzeImageAction(formData);

            router.push(`/item/${result.id}`);
        } catch (error) {
            console.error("Analysis failed", error);
            setIsAnalyzing(false);
        }
    };

    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-secondary/10 animate-pulse pointer-events-none" />

            <div className="z-10 w-full max-w-md space-y-8 text-center">
                <h1 className="text-3xl font-heading font-bold text-white mb-2">
                    Scan Your Garment
                </h1>
                <p className="text-zinc-400">
                    Upload a photo or take a video to check its resale value and eco-impact.
                </p>

                {isAnalyzing ? (
                    <div className="flex flex-col items-center justify-center space-y-6 py-12">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-ping" />
                            <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Upload className="text-primary w-10 h-10 animate-pulse" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold text-white animate-pulse">Analyzing Fabric...</h2>
                            <p className="text-sm text-zinc-500">Detecting seams, material, and wear.</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full py-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-primary/50 transition flex flex-col items-center gap-3 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Upload className="w-6 h-6 text-zinc-300 group-hover:text-primary" />
                            </div>
                            <span className="font-semibold text-zinc-200">Upload Photo</span>
                        </button>

                        <button
                            className="w-full py-6 rounded-2xl bg-gradient-to-r from-primary to-emerald-600 hover:opacity-90 transition flex flex-col items-center gap-3"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-semibold text-white">Open Camera</span>
                        </button>
                    </div>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileSelect}
                />
            </div>
        </main>
    );
}
