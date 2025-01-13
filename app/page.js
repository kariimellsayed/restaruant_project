"use client";
import React, { useState, useEffect } from "react";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/196724540_5880500331990883_8450598370022078994_n.jpeg",
      caption: "Slide 1",
      description: "This is a brief description for Slide 1. Highlighting its content or purpose.",
    },
    {
      id: 2,
      image: "/IMG_1420-1.webp",
      caption: "Slide 2",
      description: "This is a brief description for Slide 2. Providing more context or details.",
    },
    {
      id: 3,
      image: "/Taverna_Raw_Bar_15-2-1440x1000.jpg",
      caption: "Slide 3",
      description: "This is a brief description for Slide 3. Summarizing its importance or focus.",
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <main
      className="relative h-screen w-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image}), linear-gradient(to right, #4e54c8, #8f94fb)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
        >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40 text-white text-center space-y-4">
  <h2 className="text-3xl font-bold">{slide.caption}</h2>
  <p className="text-lg">{slide.description}</p>
  <div className="flex space-x-4">
  <button
    onClick={() => window.location.href = '/'}
    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition duration-300"
  >
    About
  </button>
  <button
    onClick={() => window.location.href = '/menu'}
    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md transition duration-300"
  >
    Menu
  </button>
</div>

</div>

        </div>
      ))}

    
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>
    </main>
  );
};

export default Home;
