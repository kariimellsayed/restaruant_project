"use client";
import React from "react";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 ml-44">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Menu</h1>
        
        {/* Menu Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Item 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <img src="/path/to/image1.jpg" alt="Menu Item 1" className="w-full h-40 object-cover rounded-t-lg"/>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Item 1</h2>
            <p className="text-gray-600 mt-2">Description for item 1. This could be a brief explanation of the dish or service.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Order Now</button>
          </div>
          
          {/* Menu Item 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <img src="/path/to/image2.jpg" alt="Menu Item 2" className="w-full h-40 object-cover rounded-t-lg"/>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Item 2</h2>
            <p className="text-gray-600 mt-2">Description for item 2. A brief explanation of this dish or service.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Order Now</button>
          </div>
          
          {/* Menu Item 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <img src="/path/to/image3.jpg" alt="Menu Item 3" className="w-full h-40 object-cover rounded-t-lg"/>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Item 3</h2>
            <p className="text-gray-600 mt-2">Description for item 3. Here is a brief description of the dish or service offered.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
