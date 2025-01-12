"use client";
import React, { useState } from 'react';

function Navbar() {
  // تخزين الرابط المفعل في حالة
  const [activeLink, setActiveLink] = useState('/menu'); // تعيين الرابط الأول كافتراضي

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Menu', href: '/menu' },
  ];

  return (
    <nav className='fixed w-44 h-screen flex flex-col justify-center items-center'>
      <ul className="flex flex-col justify-center items-center p-0 bg-black text-white w-36 my-5 h-full border rounded-3xl">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              onClick={() => setActiveLink(link.href)} // تحديث الرابط المفعل عند النقر
              className={`
                block py-2 px-4 text-center m-0 w-full
                ${activeLink === link.href ? 'bg-gray-900 text-yellow-500 font-bold' : 'hover:bg-gray-700 hover:text-yellow-400'}
                focus:outline-none focus:ring-2 focus:ring-yellow-500
                transition-all duration-300
              `}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
