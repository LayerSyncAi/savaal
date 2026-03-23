import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { PageFade } from "@/components/page-fade";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";
import { NavigationProgress } from "@/components/navigation-progress";
import { ConvexClientProvider } from "./convex-provider";

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

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savaal Guide | Cultural Hospitality in Zimbabwe",
  description:
    "The Savaal Guide celebrates cultural hospitality excellence across Zimbabwe with curated listings, consultancy, and curated experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} antialiased bg-[--foreground] text-[#1f1f1f]`}
      >
        <ConvexClientProvider>
          <NavigationProgress />
          <Navbar />
          <PageFade>{children}</PageFade>
          <Footer />
          <Toaster richColors />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
