export type GarmentType = 'shirt' | 'dress' | 'saree' | 'jeans' | 'jacket' | 'other';

export interface AnalysisResult {
    id: string;
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
    sustainabilityScore: number; // 1-10
}

export async function analyzeImage(file: File): Promise<AnalysisResult> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Mock logic to return different results based on random chance or filename
    // For demo purposes, we'll return a fixed high-quality result

    return {
        id: crypto.randomUUID(),
        garmentType: 'jeans',
        material: 'Denim (98% Cotton, 2% Elastane)',
        imperfections: ['Minor fading at knees', 'Loose hem on left leg'],
        category: 'Repair',
        priceRange: {
            min: 15,
            max: 25,
            currency: 'USD'
        },
        upcyclingIdeas: [
            'Turn into denim shorts with frayed edges',
            'Use fabric for patchwork on a denim jacket',
            'Create a denim tote bag'
        ],
        localRecommendations: [
            {
                type: 'tailor',
                message: 'Perfect project for a local tailor to hem.'
            },
            {
                type: 'upcycler',
                message: 'Great raw material for custom denim creators.'
            }
        ],
        caption: "POV: You just saved these gems 👖✨. Little fade, big potential. #Thrifting #SustainableFashion #Upcycle",
        environmentalBenefit: "Saving these jeans saves ~3,781 liters of water compared to making new ones.",
        sustainabilityScore: 8
    };
}

export async function getAnalysisResult(id: string): Promise<AnalysisResult> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return the same mock data for demo purposes
    return {
        id: id,
        garmentType: 'jeans',
        material: 'Denim (98% Cotton, 2% Elastane)',
        imperfections: ['Minor fading at knees', 'Loose hem on left leg'],
        category: 'Repair',
        priceRange: {
            min: 15,
            max: 25,
            currency: 'USD'
        },
        upcyclingIdeas: [
            'Turn into denim shorts with frayed edges',
            'Use fabric for patchwork on a denim jacket',
            'Create a denim tote bag'
        ],
        localRecommendations: [
            {
                type: 'tailor',
                message: 'Perfect project for a local tailor to hem.'
            },
            {
                type: 'upcycler',
                message: 'Great raw material for custom denim creators.'
            }
        ],
        caption: "POV: You just saved these gems 👖✨. Little fade, big potential. #Thrifting #SustainableFashion #Upcycle",
        environmentalBenefit: "Saving these jeans saves ~3,781 liters of water compared to making new ones.",
        sustainabilityScore: 8
    };
}
