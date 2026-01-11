"use server";

import { redirect } from "next/navigation";

export type GarmentType = 'shirt' | 'dress' | 'saree' | 'jeans' | 'jacket' | 'other';

export interface AnalysisResult {
    id: string;
    title: string; // New field
    garmentType: GarmentType;
    material: string;
    imperfections: string[];
    category: 'Resale' | 'Repair' | 'Upcycle';
    priceRange: {
        min: number;
        max: number;
        currency: string;
    };
    upcyclingIdeas: string[];
    localRecommendations: {
        type: 'tailor' | 'upcycler' | 'entrepreneur';
        message: string;
    }[];
    caption: string;
    environmentalBenefit: string;
    sustainabilityScore: number;
}

// Mock database to store results temporarily for the demo
// In a real serverless env, this would be Redis or Postgres.
// For a running instance, this global var might persist a bit, but better to just return data.
// We will return the data to the client, or store in a simple Map if needed for persistence across pages (not reliable in serverless but okay for local dev).
const resultsCache = new Map<string, AnalysisResult>();

export async function analyzeImageAction(formData: FormData): Promise<AnalysisResult> {
    const file = formData.get("image") as File;

    // Simulate AI Processing Delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock AI Logic
    const result: AnalysisResult = {
        id: crypto.randomUUID(),
        title: "Vintage Levi's 501 Jeans",
        garmentType: 'jeans',
        material: 'Denim (100% Cotton)',
        imperfections: ['Fraying at pockets', 'Fade on thighs'],
        category: 'Resale',
        priceRange: {
            min: 45,
            max: 80,
            currency: 'USD'
        },
        upcyclingIdeas: [
            'Distress further for grunge look',
            'Convert into denim maxi skirt'
        ],
        localRecommendations: [
            {
                type: 'upcycler',
                message: 'High demand for vintage denim in local thrift loops.'
            }
        ],
        caption: "Found gold ✨. Original 501s with the perfect fade. #Vintage #Levis #ThriftHaul",
        environmentalBenefit: "Reselling these saves ~9000 liters of water vs manufacturing new denim.",
        sustainabilityScore: 9
    };

    // Store for retrieval by ID
    resultsCache.set(result.id, result);

    return result;
}

export async function getAnalysisResultAction(id: string): Promise<AnalysisResult | null> {
    // In real app, fetch from DB
    // Here we try to get from our memory cache, or return a default mock if missing (for reload)

    if (resultsCache.has(id)) {
        return resultsCache.get(id)!;
    }

    // Fallback mock if server restarted
    return {
        id: id,
        title: "Vintage Denim Jacket",
        garmentType: 'jacket',
        material: 'Denim (Heavyweight)',
        imperfections: ['Broken button', 'Stain on cuff'],
        category: 'Repair',
        priceRange: {
            min: 30,
            max: 45,
            currency: 'USD'
        },
        upcyclingIdeas: [
            'Replace buttons with vintage brass',
            'Add embroidery over stain'
        ],
        localRecommendations: [
            {
                type: 'tailor',
                message: 'Easy fix for a tailor: Button replacement.'
            }
        ],
        caption: "A little love is all it needs. 🧥❤️ #RepairDontReplace #SustainableFashion",
        environmentalBenefit: "Extending this jacket's life reduces carbon footprint by 8kg.",
        sustainabilityScore: 7
    };
}
