import Navbar from "@/components/layouts/navbar";
import "./globals.css";

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="bg-grid min-h-screen">
          <div className="max-w-7xl mx-auto px-6 pt-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
