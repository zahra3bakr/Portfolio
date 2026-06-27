import Link from "next/link";
import { Moon } from "lucide-react";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between py-6">
            <div className="flex-shrink-0">
                <Link href="/">
                    <div className="w-10 h-10 bg-[#5CE1E6] rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer">
                        Z
                    </div>
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-gray-500 font-medium">
                <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
                <Link href="/projects" className="hover:text-gray-900 transition-colors">Projects</Link>
                <Link href="/skills" className="hover:text-gray-900 transition-colors">Skills</Link>
                <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button aria-label="Toggle dark mode" className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
                    <Moon size={20} />
                </button>
                <button className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-full font-medium transition-colors">
                    Resume
                </button>
            </div>
        </header>
    );
}