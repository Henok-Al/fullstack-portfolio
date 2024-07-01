import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 wrapper pt-16"> {/* Adjust pt-16 to match the height of your Navbar */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
