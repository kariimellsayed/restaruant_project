"use client"
import React from 'react'
import Image from "next/image";

function page() {
  const items = [
    { id: 1, image: "/Rectangle 9.png", title: "Smashed Avo", description: "A delicious avocado toast topped with fresh herbs and a poached egg.", price: 10.99 },
    { id: 2, image: "/Rectangle 10.png", title: "Yin & Yang", description: "A perfect balance of savory and sweet flavors in every bite.", price: 12.99 },
    { id: 3, image: "/Rectangle 13.png", title: "Rancheros (Tofu)", description: "A plant-based twist on a classic dish, made with seasoned tofu and fresh veggies.", price: 8.99 },
  ]

  const chefs = [
    { id: 1, image: "/cook-1.jpg", name: "Chef Omar", bio: "Omar is known for his innovative approach to classic dishes, combining traditional techniques with modern flavors." },
    { id: 2, image: "/cook-2.jpg", name: "Chef Lina", bio: "Lina's passion for using local ingredients has made her a favorite among our regulars. She specializes in healthy, balanced meals." },
    { id: 3, image: "/cook-3.jpg", name: "Chef Ahmed", bio: "Ahmed is a master of blending spices and flavors, creating dishes that transport you to distant places with every bite." },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-10 md:ml-44 mt-5 p-5">
      <h2 className="text-center text-[25px] uppercase 
        font-bold text-gray-800 inline-block border-b-4 border-yellow-200 pb-2 mb-[15px]">About Our Restaurant</h2>

      <div className="text-center mb-[40px]">
        <p className="text-[18px] text-gray-700 max-w-2xl mx-auto">
          Welcome to our restaurant, where every dish tells a story. We focus on creating flavorful and memorable meals with fresh, high-quality ingredients. Our chefs bring their passion and creativity to every dish, ensuring you have a dining experience like no other.
        </p>
      </div>

      <h3 className="text-center text-[22px] font-bold text-gray-800 mb-8">Popular Dishes</h3>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-[1.5rem]'>
        {
          items.map((item) => (
            <div className='p-[15px] group' key={item.id}>
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  loading="lazy"
                  objectFit="cover"
                  className="mb-[6px] transition duration-300 transform group-hover:opacity-50"
                />
              </div>
              <h3 className='text-center text-black text-[18px]'>{item.title}</h3>
              <p className="text-center text-gray-600 text-[14px]">{item.description}</p>
              <p className="text-center text-black font-semibold">${item.price}</p>
            </div>
          ))
        }
      </div>

      <h3 className="text-center text-[22px] font-bold text-gray-800 mt-16 mb-8">Our Chefs</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
        {
          chefs.map((chef) => (
            <div className="p-[15px]" key={chef.id}>
              <div className="relative w-full h-[300px]">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  layout="fill"
                  loading="lazy"
                  objectFit="cover"
                  className="mb-[6px] rounded-full"
                />
              </div>
              <h3 className="text-center text-black text-[18px]">{chef.name}</h3>
              <p className="text-center text-gray-600 text-[14px]">{chef.bio}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page
