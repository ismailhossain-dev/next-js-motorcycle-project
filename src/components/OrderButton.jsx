"use client";
import React from "react";
import { toast } from "react-toastify";

const OrderButton = () => {
  return (
    <button
      onClick={() => toast.success("Bike order successfully")}
      className="w-full bg-slate-900 dark:bg-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-slate-800 dark:hover:bg-green-700 transition-all active:scale-95 shadow-lg shadow-green-900/20"
    >
      Order Now
    </button>
  );
};

export default OrderButton;
