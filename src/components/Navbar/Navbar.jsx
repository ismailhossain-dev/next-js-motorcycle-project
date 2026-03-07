"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginButton from "../LoginButton";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathName = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/allbikes" },
    { name: "About", path: "/about" },
    { name: "Featured", path: "/feature" },
    { name: "Add Bike", path: "/add-bike" },
    { name: "Manage Bike", path: "/manage-bike" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-[#111111] text-white px-4 md:px-6 py-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 1. Logo */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center tracking-tighter">
              B<span className="w-2.5 h-2.5 bg-orange-600 rounded-full mt-2 mx-0.5"></span>ike
            </h1>
          </Link>
        </div>

        {/* 2. Desktop Navigation (Sudhu Common Links) */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`py-2 px-4 lg:px-5 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                pathName === link.path
                  ? "bg-orange-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. User Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {session?.user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 group focus:outline-none"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-orange-600 p-0.5 transition-transform group-hover:scale-105">
                  <img
                    src={session.user.image || "https://i.ibb.co/5GzXkwq/user.png"}
                    alt="User"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </button>

              {/* Dropdown Menu (Desktop) */}
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-3 w-56 md:w-64 bg-white text-gray-800 rounded-2xl shadow-2xl py-4 z-50 border border-gray-100 overflow-hidden transform origin-top-right">
                    <div className="px-5 pb-3 border-b border-gray-100">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {session.user.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
                    </div>
                    <div className="py-2">
                      <Link href="/profile" className="block px-5 py-2.5 text-sm hover:bg-gray-50">
                        My Profile
                      </Link>
                    </div>
                    <div className="px-4 pt-2">
                      <button
                        onClick={() => signOut()}
                        className="w-full text-center py-2 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
              <LoginButton />
              <Link
                href="/register"
                className="bg-orange-600 px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold hover:bg-orange-700 transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* 4. Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 5. Mobile Sidebar Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[260px] bg-[#111111] z-[50] p-6 shadow-2xl transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold italic tracking-widest text-orange-500">MENU</h2>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 text-2xl">
              ✕
            </button>
          </div>

          <div className="space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-semibold ${pathName === link.path ? "text-orange-500" : "text-gray-300 hover:text-white"}`}
              >
                {link.name}
              </Link>
            ))}

            {!session?.user && (
              <div className="pt-5 border-t border-gray-800 space-y-4">
                <LoginButton />
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 bg-orange-600 text-center rounded-xl font-bold"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
