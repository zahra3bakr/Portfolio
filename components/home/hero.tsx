import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-5 px-5 gap-5">
            {/* Left side text content */}
            <div className="flex-1 space-y-6">
                <p className="text-[#36D1B7] text-xl font-medium">Hi, I&apos;m</p>
                <h1 className="text-6xl text-[#0B1B3D] font-medium leading-tight">
                    Zahra Abobakr
                </h1>
                <p className="text-xl text-gray-500 font-normal">
                    Full Stack Developer — MERN Stack
                </p>
                
                <p className="text-gray-500 text-base max-w-lg leading-relaxed mt-4">
                    I build scalable, user-focused web applications with React, Node, and MongoDB. 
                    Passionate about creating exceptional digital experiences through clean code and modern technologies.
                </p>

                <div className="flex items-center gap-4 pt-5">
                    <button className="bg-[#5CE1E6] hover:bg-[#4bc7cc] text-white px-5 py-3 rounded-full flex items-center gap-2 font-medium transition-colors">
                        View Projects
                        <ArrowRight size={18} />
                    </button>
                    <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-3 rounded-full flex items-center gap-2 font-medium transition-colors">
                        <Download size={18} />
                        Download Resume
                    </button>
                </div>
            </div>

            {/* Right side placeholder */}
            <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="w-[380px] h-[480px] bg-white/30 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] hover:scale-[1.02] transition-all duration-300">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                        <img 
                            src="/images/My image.jpeg" 
                            alt="Zahra Abobakr" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}