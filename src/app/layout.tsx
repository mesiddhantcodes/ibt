import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Infinite Building Technologies",
  description: "Design, Development & Project Management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`min-h-screen flex flex-col ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
