import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "THREADS - Sustainable Fashion Marketplace",
    description: "Recycle, Reuse, Resell, and Upcycle your wardrobe.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${outfit.variable} bg-background text-foreground pb-20 font-sans antialiased selection:bg-primary/30`}>
                {children}
                <BottomNav />
            </body>
        </html>
    );
}
