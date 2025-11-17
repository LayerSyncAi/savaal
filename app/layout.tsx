import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${poppins.variable} antialiased bg-[#040404] text-[#1f1f1f]`}
      >
        <Navbar />
        <div className="pt-28">{children}</div>
      </body>
    </html>
  );
}
