"use client";
import React from "react";

const BikeBrand = ({ allbikes }) => {
  const uniqueBrands = [...new Set(allbikes.map((item) => item.brand))];

  return (
    // Fixed: lg screen-e width fixed thakbe, mobile-e full width
    <aside className="w-full lg:w-[280px] flex-shrink-0">
      <div className="bg-white border border-gray-100 rounded-[24px] lg:rounded-[32px] p-4 lg:p-5 shadow-sm lg:sticky lg:top-10 overflow-hidden">
        {/* Header Section - Mobile-e hidden rakhte paren space bachate */}
        <div className="px-2 mb-4 lg:mb-8 flex items-center justify-between lg:block">
          <div>
            <h3 className="text-xl lg:text-2xl font-black text-gray-900 tracking-tight italic">
              BRANDS<span className="text-orange-500">.</span>
            </h3>
            <p className="hidden lg:block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              Select Manufacturer
            </p>
          </div>
          {/* Mobile indicator */}
          <span className="lg:hidden text-[10px] bg-gray-100 px-2 py-1 rounded-md font-bold text-gray-500 uppercase">
            {uniqueBrands.length} Brands
          </span>
        </div>

        {/* Brand List Container */}
        <nav>
          {/* Mobile-e horizontal scroll hobe, Desktop-e normal vertical list */}
          <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible custom-scrollbar pb-3 lg:pb-0">
            {/* All Items Button */}
            <li className="flex-shrink-0">
              <button className="whitespace-nowrap group flex items-center gap-3 px-4 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-orange-500 text-white shadow-md lg:shadow-lg shadow-orange-200 transition-all hover:scale-[1.02] active:scale-95">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span className="font-bold text-xs lg:text-sm">All</span>
                <span className="text-[10px] font-black bg-orange-600/50 px-2 py-0.5 rounded-full">
                  {allbikes.length}
                </span>
              </button>
            </li>

            {/* Dynamic Brand List */}
            {uniqueBrands.map((brandName, index) => {
              const count = allbikes.filter((item) => item.brand === brandName).length;
              return (
                <li key={index} className="flex-shrink-0">
                  <button className="whitespace-nowrap group flex items-center gap-3 px-4 py-3 rounded-xl lg:rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 lg:border-transparent hover:border-gray-200 shadow-sm lg:shadow-none bg-white lg:bg-transparent">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all uppercase">
                      {brandName.charAt(0)}
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-gray-600 group-hover:text-gray-900">
                      {brandName}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-500">
                      ({count})
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px; /* Mobile horizontal scroll height */
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
      `}</style>
    </aside>
  );
};

export default BikeBrand;
