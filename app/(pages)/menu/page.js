"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Function to fetch menu items from JSON file
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("/menu.json");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  // Function to add item to the cart
  const addToCart = (item) => {  
    setCart((prevCart) => {  

      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);  
      
      if (existingItemIndex >= 0) {  

        const updatedCart = prevCart.map((cartItem, index) => {  
          if (index === existingItemIndex) {  
            return {  
              ...cartItem,  
              quantity: cartItem.quantity + 1 
            };  
          }  
          return cartItem;  
        });  
  
 
        const newTotal = updatedCart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);  
        setCartTotal(newTotal);  
  
 
        localStorage.setItem("cart", JSON.stringify(updatedCart));  
  
        return updatedCart;  
      } else { 
        const newItem = { ...item, quantity: 1 };  
        const updatedCart = [...prevCart, newItem];  
  
 
        const newTotal = updatedCart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);  
        setCartTotal(newTotal);  
  

        localStorage.setItem("cart", JSON.stringify(updatedCart));  
  
        return updatedCart;  
      }  
    });  
  };

  return (
    <div className="min-h-screen  py-10 md:ml-44 mt-5 p-5">
      <div className="flex justify-between items-center mb-10">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-800 inline-block border-b-4 border-[#F1D5BB] pb-2">
          SUSHI FOOD
        </h1>
        {/* Cart Section */}
        <div className="bg-white shadow-md py-2 px-4 flex items-center gap-4 rounded-md">
          <h2 className="text-lg font-bold">Cart: {cart.length} items</h2>
          <p className="text-lg font-bold">Total: ${cartTotal.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-black shadow-lg h-60 rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105 group relative overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition duration-300 transform group-hover:opacity-50"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 p-3 group-hover:opacity-100 transition duration-300">
              <h2 className="text-2xl font-semibold text-white mt-4">
                {item.title}
              </h2>
              <p className="text-gray-200 mt-2 text-center">{item.description}</p>
              <div className="flex gap-3 items-center mt-4">
                <p className="text-gray-200 text-lg">${item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="px-6 py-2 bg-white text-black border rounded-md hover:bg-black hover:text-white transition duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
