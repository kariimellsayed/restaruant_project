"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // لتتبع حالة القائمة

  const active = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "lociton", href: "/lociton", icon: <FaMapMarkerAlt />},
    { name: "Cart", href: "/cart", icon: <FaShoppingCart /> },
    { name: "Menu", href: "/menu", icon: <FaUtensils /> },
  ];

  return (
    <div>
      {/* زر القائمة */}
      <button
        className="fixed top-4 left-4 z-30 p-2 bg-black text-yellow-200 rounded-md md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* أيقونة القائمة */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* القائمة الجانبية */}

      <nav
        className={`fixed top-0 left-0 h-screen w-[137px] p-5  z-20 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:w-44`}
      >
        <ul className="flex flex-col justify-center items-center p-0 bg-black text-white border rounded-2xl w-32 h-full font-bold">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full">
              <Link
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false); // إغلاق القائمة عند اختيار رابط
                }}
                className={` py-2 px-4 text-center text-4xl mt-3 w-full flex justify-center items-center ${
                  link.href == active && "text-yellow-200"
                } focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300`}
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* إضافة خلفية باهتة عند فتح القائمة */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
