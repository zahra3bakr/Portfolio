import Navbar from "@/components/layouts/navbar";
import "./globals.css";

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
  return (
    <html>
      <body className="bg-grid min-h-screen relative overflow-x-hidden bg-[#FAFBFD] text-gray-900">
        {/* Glow blobs to make Glassmorphism shine */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5CE1E6]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[#36D1B7]/15 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-[#5CE1E6]/15 rounded-full blur-[130px] pointer-events-none -z-10" />

        <Navbar />
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
