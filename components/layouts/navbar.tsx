"use client"
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark" || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add("dark")
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setDarkMode(true)
        }
    }



    return (
        <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-6 md:px-12 bg-white/30 dark:bg-slate-950/30 backdrop-blur-md border-b border-white/20 dark:border-slate-800/10 shadow-sm transition-all duration-300">
            <div className="flex-shrink-0">
                <Link href="/">
                    <div className="w-10 h-10 bg-[#5CE1E6] rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer shadow-md hover:scale-105 transition-transform">
                        Z
                    </div>
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-300 font-medium">
                <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
                <Link href="/projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</Link>
                <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
                {/* Dark mode toggle button */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode" className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-200 cursor-pointer">
                    {darkMode ? <Sun size={20} className="text-white-400" /> : <Moon size={20} />}
                </button>

                {/* Resume button */}
                <button className="border border-white/40 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-900/60 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow">
                    Resume
                </button>
            </div>
        </header>
    );
}