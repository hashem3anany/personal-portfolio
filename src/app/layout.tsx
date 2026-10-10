import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Hashem Nour El Anany | IT Specialist & Front-End Developer",
  description: "Portfolio of Hashem Nour El Anany - IT Specialist, Front-End Developer, and Cybersecurity Enthusiast based in Egypt.",
  openGraph: {
    title: "Hashem Nour El Anany | Portfolio",
    description: "IT Specialist | Front-End Developer | Cybersecurity Enthusiast",
    url: "https://hashem3anany.github.io",
    siteName: "Hashem Nour El Anany Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
