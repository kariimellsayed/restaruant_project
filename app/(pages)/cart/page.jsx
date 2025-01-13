"use client"
import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Simulated promo code for demonstration
  const validPromoCodes = {
    "SAVE10": 0.10, // 10% discount
    "SAVE20": 0.20, // 20% discount
  };

  // Fetch cart data from localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const items = cartData ? JSON.parse(cartData) : [];
    
    const validItems = items.filter(item => item.price && typeof item.price === "number");

    setCartItems(validItems);
    setCartTotal(validItems.reduce((total, item) => total + item.price, 0));
  }, []);

  // Recalculate cart total when cart items change
  useEffect(() => {
    let total = cartItems.reduce((total, item) => total + item.price, 0);
    total = total - total * discount; // Apply discount
    setCartTotal(total);
  }, [cartItems, discount]);

  // Handle promo code application
  const handleApplyPromoCode = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
    } else {
      alert("Invalid promo code.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10 md:pl-44  flex mt-5 p-5">
      {/* Main Content */}
      <div className="flex flex-col w-full ml-5 space-y-5">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800 inline-block border-b-4 border-[#F1D5BB] pb-2">
            CART
          </h1>
        </div>

        <div className="md:flex flex-wrap gap-5">
          {/* Cart Items */}
          <div className="flex-1 bg-[#F1D5BB] p-5 rounded-lg">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex flex-col ml-4">
                    <span className="font-bold">{item.title}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Section */}
          <div className="flex  gap-2 my-5">
            <div className="bg-[#F1D5BB] p-5 rounded-lg">
              <h2 className="text-lg font-bold text-gray-700 mb-5">Your Subtotal</h2>
              <p className="flex justify-between text-gray-700 mb-3">
                <span>Subtotal</span> <span>${cartTotal.toFixed(2)}</span>
              </p>
              <button className="w-full bg-black text-white py-2 rounded">
                Confirm Order
              </button>
            </div>

            {/* Promo Code Section */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-lg font-bold text-gray-700 mb-5">Promo Code</h2>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="w-full border border-gray-300 p-2 rounded mb-3"
              />
              <button
                onClick={handleApplyPromoCode}
                className="bg-black text-white py-2 px-4 rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
