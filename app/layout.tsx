import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { PageFade } from "@/components/page-fade";
import { Toaster } from "@/components/ui/sonner";

const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../public/fonts/Poppins/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Savaal Guide | Cultural Hospitality in Africa",
  description:
    "The Savaal Guide celebrates cultural hospitality excellence across Zimbabwe and Africa with curated listings, consultancy, and curated experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-[--foreground] text-[#1f1f1f]`}
      >
        <Navbar />
        <PageFade>{children}</PageFade>
        <Toaster richColors />
      </body>
    </html>
  );
}
