"use client"; // Mark this file as a client component

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Global/Navbar";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import Footer from "@/Components/Global/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current path
  const shouldShowNavbar = pathname !== "/"; // Conditionally show the Navbar

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Render Navbar only if the path is not "/" */}
        {shouldShowNavbar && <Navbar />}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
