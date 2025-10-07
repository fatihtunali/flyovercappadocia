import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flyover Cappadocia - Hot Air Balloon Rides in Cappadocia",
  description: "Experience the breathtaking views of Cappadocia with our hot air balloon rides. Book your unforgettable adventure today!",
  keywords: "Cappadocia, hot air balloon, Turkey, balloon rides, sunrise flight, Göreme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
