"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

const BikeCard = ({ bike }) => {
  if (!bike) return null;

  const { brand, name, category, price, rating, image, details, weight, torque, color } = bike;

  return (
    <div className="group relative flex  flex-col rounded-[2.5rem] bg-white p-3 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 h-full">
      {/* Image Container with Gradient Overlay */}
      <div className="relative aspect-[4/4]  overflow-hidden rounded-[2rem] bg-slate-100 shadow-inner">
        <Image
          width={200}
          height={180}
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Top Badges */}
        <div className="absolute inset-x-4 top-4 flex justify-between items-start">
          <span className="rounded-2xl bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-gray-900 backdrop-blur-md">
            {category}
          </span>
          <div className="flex items-center gap-1 rounded-2xl bg-black/40 px-3 py-1.5 text-white backdrop-blur-md">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-[11px] font-bold">{rating}</span>
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col px-4 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
            {brand}
          </span>
          <h3 className="text-xl font-black italic tracking-tight text-slate-900 leading-tight">
            {name.toUpperCase()}
          </h3>
        </div>

        {/* Specs with Glass Icons */}
        <div className="my-5 grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 py-2 border border-slate-100">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Weight</span>
            <span className="text-[11px] font-extrabold text-slate-700">{weight}</span>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 py-2 border border-slate-100">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Torque</span>
            <span className="text-[11px] font-extrabold text-slate-700">{torque}</span>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 py-2 border border-slate-100">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Color</span>
            <span className="text-[11px] font-extrabold text-slate-700">{color}</span>
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
              Starting From
            </span>
            <span className="text-xl font-black tracking-tight text-slate-900">
              {price.split(" ")[0]}
              <span className="ml-1 text-xs text-blue-600 font-bold uppercase">
                {price.split(" ")[1]}
              </span>
            </span>
          </div>

          <Link
            href={`/allbikes/${bike._id}`}
            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-white transition-all duration-300 hover:w-28 group/btn hover:bg-blue-600"
          >
            <span className="absolute left-4 opacity-0 transition-all duration-300 group-hover/btn:opacity-100 font-bold text-xs uppercase">
              View
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform group-hover/btn:translate-x-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
