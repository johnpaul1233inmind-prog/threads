import Link from "next/link";
import { FeedItem } from "@/components/feed-item";

export default function Home() {
    const feedItems = [
        {
            id: "1",
            username: "eco_warrior",
            description: "Found this vintage denim jacket! 🌿 Needs a little love but totally worth it. #Thrifting #SustainableFashion",
            tags: ["Upcycle", "Vintage", "Denim"],
            imageUrl: "/vintage-denim.png",
            likes: 1240
        },
        {
            id: "2",
            username: "fashion_rebel",
            description: "Don't throw away your old tees! Turn them into yarn. 🧶 Here's how.",
            tags: ["DIY", "ZeroWaste", "Tutorial"],
            imageUrl: "/patchwork.png",
            likes: 856
        },
        {
            id: "3",
            username: "thrift_king",
            description: "Huge haul from the local bin store. Saving the planet one shirt at a time. 🌍",
            tags: ["Haul", "SecondHand", "Resale"],
            imageUrl: "/vintage-denim.png",
            likes: 2100
        }
    ];

    return (
        <main className="h-screen w-full bg-black flex flex-col">
            {/* App Header */}
            <header className="px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
                <div>
                    <h1 className="text-xl font-heading font-bold tracking-tighter text-white">THREADS</h1>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Sustainable Marketplace</p>
                </div>
            </header>

            <div className="flex-1 w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
                {feedItems.map(item => (
                    <FeedItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </main>
    );
}
