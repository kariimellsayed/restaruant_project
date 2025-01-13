import React from "react";
import { useRouter } from "next/router";

const CartPage = () => {
  const router = useRouter();
  const { cart } = router.query;
  const cartItems = cart ? JSON.parse(cart) : [];
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section className="min-h-screen bg-gray-100 py-10 md:pl-44 p-5 flex">
      {/* Main Content */}
      <div className="flex flex-col w-full ml-5 space-y-5">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800 inline-block border-b-4 border-[#F1D5BB] pb-2">
            CART
          </h1>
        </div>

        <div className="flex flex-wrap gap-5">
          {/* Cart Items */}
          <div className="flex-1 bg-[#F1D5BB] p-5 rounded-lg">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
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
          <div className="w-1/4 space-y-5">
            <div className="bg-[#F1D5BB] p-5 rounded-lg">
              <h2 className="text-lg font-bold text-gray-700 mb-5">Your Subtotal</h2>
              <p className="flex justify-between text-gray-700 mb-3">
                <span>Subtotal</span> <span>${cartTotal.toFixed(2)}</span>
              </p>
              <button className="w-full bg-black text-white py-2 rounded">
                Confirm Order
              </button>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-lg font-bold text-gray-700 mb-5">Promo Code</h2>
              <input
                type="text"
                placeholder="Enter promo code"
                className="w-full border border-gray-300 p-2 rounded mb-3"
              />
              <button className="bg-black text-white py-2 px-4 rounded">
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
