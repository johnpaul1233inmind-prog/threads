import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface FeedItemProps {
    username: string;
    description: string;
    tags: string[];
    imageUrl: string;
    likes: number;
}

export function FeedItem({ username, description, tags, imageUrl, likes }: FeedItemProps) {
    return (
        <div className="relative h-[85vh] w-full snap-start shrink-0 rounded-xl overflow-hidden bg-zinc-900 border-b border-white/5">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-zinc-700">
                {imageUrl && <Image src={imageUrl} alt={description} fill className="object-cover opacity-90" />}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Overlay UI */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pb-8 flex items-end justify-between">

                <div className="flex-1 mr-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                            {username[0]}
                        </div>
                        <span className="font-semibold text-white text-sm">@{username}</span>
                    </div>
                    <p className="text-white text-sm leading-snug mb-2">{description}</p>
                    <div className="flex flex-wrap gap-1">
                        {tags.map(tag => (
                            <span key={tag} className="text-xs text-primary font-medium">#{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center mb-2">
                    <ActionIcon icon={Heart} label={likes.toString()} />
                    <ActionIcon icon={MessageCircle} label="42" />
                    <ActionIcon icon={Share2} label="Share" />
                    <ActionIcon icon={MoreHorizontal} />
                </div>
            </div>
        </div>
    );
}

function ActionIcon({ icon: Icon, label }: { icon: any, label?: string }) {
    return (
        <div className="flex flex-col items-center gap-1">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition">
                <Icon size={24} className="text-white" />
            </button>
            {label && <span className="text-xs text-white font-medium">{label}</span>}
        </div>
    )
}
