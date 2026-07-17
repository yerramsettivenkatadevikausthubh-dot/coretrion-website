import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CORETRION™",
  description: "Next Generation Semiconductor Computing Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}