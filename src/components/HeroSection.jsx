import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    // bg-slate-50 (Light mode) and dark:bg-zinc-950 (Dark mode)
    <section className="bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          {/* Accent color text for "New Arrival" */}
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-widest">
            New Arrival 2026
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            The Motorcycle <br />
            <span className="text-blue-600 dark:text-blue-500">Revolution</span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md text-lg">
            Discover the latest trend of high performance motorcycle with next‑level speed, design
            and durability.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/allbikes"
              className=" btn bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-medium hover:opacity-90 transition shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Image Section with a subtle glow/shadow */}
        <div className="relative flex items-center justify-center group">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full"></div>
          <img
            src="/R15.avif"
            alt="bike"
            className="relative w-auto max-w-md object-contain h-auto md:h-[450px] rounded-[2rem] drop-shadow-2xl transform group-hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};
