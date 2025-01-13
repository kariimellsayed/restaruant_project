"use client"
import React from 'react'
import Image from "next/image";

function page() {
  const items = [  
    { id: 1, image: "fff", title: "Smashed Avo", description: "Description for item 1.", price: 10.99 },
    { id: 2, image: "/Rectangle 10.png", title: "Yin & Yang", description: "Description for item 2.", price: 12.99 },
    { id: 3, image: "/Rectangle 13.png", title: "Rancheros (Tofu)", description: "Description for item 3.", price: 8.99 },
  ]
  return (
    <div className="min-h-screen bg-gray-100 py-10 ml-44">
        <h2 className="text-center text-[25px] uppercase 
        font-bold text-gray-800 inline-block border-b-4 border-yellow-200 pb-2 mb-[15px]">About Page</h2>

        <div className='grid grid-cols-3 gap-[1.5rem]'>
          {
            items.map((item, index) => (
              <div className='p-[15px]' key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"  // مثال على استخدام fill  
                  objectFit="cover"
                  width={500}
                  height={300}
                  className="mb-[6px] transition duration-300 transform group-hover:opacity-50"
                />
                <h3 className='text-center text-black text-[18px]'>{item.title}</h3>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default page