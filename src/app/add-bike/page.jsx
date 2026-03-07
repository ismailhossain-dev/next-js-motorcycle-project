"use client";

import React from "react";
import { addFormServer } from "../api/allBikes/route";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddBikeForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bikeData = Object.fromEntries(formData.entries());

    // console.log("Submitting Bike Data:", bikeData);
    // Server action call
    const response = await addFormServer(bikeData);
    console.log(response);
    if (response.success) {
      toast.success("Added bike");
    }
    router.push("/allbikes");
  };

  const inputStyle = `
    w-full bg-transparent border-2 border-gray-200 dark:border-gray-800 
    rounded-xl px-4 py-2.5 outline-none transition-all duration-200
    focus:border-orange-600 focus:ring-4 focus:ring-orange-600/10
    dark:text-white text-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-600
  `;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Add New <span className="text-orange-600">Bike</span>
          </h2>
        </div>

        <div className="bg-white dark:bg-[#111111] shadow-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            {/* Section 1: General Info */}
            <div>
              <h3 className="text-lg font-bold text-orange-600 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-1 bg-orange-600 rounded-full"></span>
                General Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Bike Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={inputStyle}
                    placeholder="Enter model name..."
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    className={inputStyle}
                    placeholder="e.g. Yamaha, Honda..."
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    className={inputStyle}
                    placeholder="e.g. Sports, Cruiser..."
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    className={inputStyle}
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-100 dark:border-gray-800" />

            {/* Section 2: Technical Specs */}
            <div>
              <h3 className="text-lg font-bold text-orange-600 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-1 bg-orange-600 rounded-full"></span>
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Material
                  </label>
                  <input
                    type="text"
                    name="material"
                    className={inputStyle}
                    placeholder="e.g. Alloy Steel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Color
                  </label>
                  <input
                    type="text"
                    name="color"
                    className={inputStyle}
                    placeholder="e.g. Matte Black"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Weight
                  </label>
                  <input
                    type="text"
                    name="weight"
                    className={inputStyle}
                    placeholder="e.g. 160 kg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Frame Size
                  </label>
                  <input
                    type="text"
                    name="framesize"
                    className={inputStyle}
                    placeholder="e.g. Trellis Frame"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Torque
                  </label>
                  <input
                    type="text"
                    name="torque"
                    className={inputStyle}
                    placeholder="e.g. 15 Nm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Chain Type
                  </label>
                  <input
                    type="text"
                    name="chain"
                    className={inputStyle}
                    placeholder="e.g. O-Ring"
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-100 dark:border-gray-800" />

            {/* Section 3: Media & Details */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                  Description
                </label>
                <textarea
                  name="details"
                  rows="4"
                  className={`${inputStyle} resize-none`}
                  placeholder="Describe the bike..."
                ></textarea>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-600/20 transition-all duration-300 active:scale-[0.98]"
              >
                List Bike for Sale
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBikeForm;
