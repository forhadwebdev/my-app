import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forhad | Full Stack Web Developer",
  description: "Professional Portfolio and Resume of Md Forhad Hossen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0f172a] text-white antialiased min-h-screen flex flex-col`}
      >
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow pt-15 pb-6">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
