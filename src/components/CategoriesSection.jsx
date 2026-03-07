import React from "react";
import { dbConnect } from "@/lib/dbConnect";

export const CategoriesSection = async () => {
  let bikes = [];

  try {
    bikes = await dbConnect("bikeData").find().toArray();
  } catch (error) {
    console.error("Failed to load bikes for CategoriesSection:", error);
  }

  // Unique categories collection
  const singleCategory = [...new Set(bikes.map((bike) => bike.category))];

  return (
    <section className="bg-slate-50 dark:bg-[#0b0c10] py-24 px-6 md:px-20 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow Effect - Light mode-e blueish, Dark-e orangish */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 dark:bg-orange-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-orange-600 dark:text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-3">
            Exploration
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-zinc-900 dark:text-white">
            Our Bike <span className="text-orange-600">Categories</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
        </div>

        {/* Dynamic Grid Layout */}
        {singleCategory.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {singleCategory.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                {/* Category Icon Container */}
                <div className="w-20 h-20 rounded-3xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-[15deg] group-hover:bg-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-orange-600 dark:text-orange-500 group-hover:text-white transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.59 10.37m6 4a14.94 14.94 0 0 1-9.75 3.51"
                    />
                  </svg>
                </div>

                {/* Category Title */}
                <h3 className="font-bold text-xl uppercase tracking-tighter text-zinc-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
                  {category}
                </h3>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                  Premium collection of {category.toLowerCase()} bikes.
                </p>

                {/* Action Button */}
                <button className="mt-auto w-full py-4 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                  Discover
                </button>

                {/* Inner Glow Decorative */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-zinc-500 dark:text-zinc-400">
            No categories available right now.
          </p>
        )}
      </div>
    </section>
  );
};
