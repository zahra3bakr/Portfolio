import Link from "next/link";
import { Moon } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-6 md:px-12 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
            <div className="flex-shrink-0">
                <Link href="/">
                    <div className="w-10 h-10 bg-[#5CE1E6] rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer shadow-md hover:scale-105 transition-transform">
                        Z
                    </div>
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
                <Link href="/projects" className="hover:text-gray-900 transition-colors">Projects</Link>
                <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button aria-label="Toggle dark mode" className="p-2 text-gray-500 hover:text-gray-900 transition-all hover:scale-110 duration-200">
                    <Moon size={20} />
                </button>
                <button className="border border-white/40 bg-white/40 backdrop-blur-sm hover:bg-white/60 text-gray-700 px-6 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow">
                    Resume
                </button>
            </div>
        </header>
    );
}