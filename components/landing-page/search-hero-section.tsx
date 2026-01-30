"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

// Background image placeholder - easy to swap later
const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2070&q=80";

export function SearchHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search submission - can be connected to router or search API
      console.log("Search submitted:", searchQuery);
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero search section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay - gradient from top for better text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center px-6 md:px-8 w-full max-w-4xl mx-auto text-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold p-white mb-8 md:mb-12 tracking-tight"
        >
          Where would you like to begin?
        </motion.h1>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px]"
        >
          <div className="relative group">
            {/* Search Icon */}
            <Search
              className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-stone-600 transition-colors z-10"
              size={22}
              strokeWidth={2}
            />

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants, stays, or destinations"
              className="w-full py-4 md:py-5 pl-14 md:pl-16 pr-5 md:pr-6
                text-base md:text-lg text-stone-800 placeholder:text-stone-400
                bg-white/90 backdrop-blur-md
                rounded-full border-0
                shadow-lg shadow-black/10
                outline-none
                transition-all duration-300 ease-out
                focus:bg-white focus:shadow-xl focus:shadow-black/15
                focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Search restaurants, stays, or destinations"
            />

            {/* Optional Submit Button - appears on hover/focus for better UX */}
            <button
              type="submit"
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2
                px-4 md:px-6 py-2 md:py-2.5
                bg-stone-900 hover:bg-stone-800 active:bg-stone-950
                text-white text-sm md:text-base font-medium
                rounded-full
                opacity-0 group-focus-within:opacity-100 group-hover:opacity-100
                transition-all duration-300 ease-out
                focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Submit search"
            >
              Search
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
