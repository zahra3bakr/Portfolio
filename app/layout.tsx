import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
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
        <main className="flex h-full flex-col">{children}</main>
        <Footer />
      </body>
      
    </html>
  );
}
