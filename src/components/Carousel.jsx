import React, { useState, useEffect } from "react";
import { foodOrder1, foodOrder2, foodOrder3 } from "../assets"; // Ensure these paths are correct
import { motion } from "framer-motion";

const images = [foodOrder1, foodOrder2, foodOrder3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <motion.img 
        whileHover={{ scale: 1.1 }} // Slightly scale up on hover
        transition={{ duration: 0.3 }} // Smooth transition effect
        src={images[currentIndex]} 
        alt={`Food Order ${currentIndex + 1}`} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button 
          onClick={prevImage} 
          className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
        >
          &lt;
        </button>
        <button 
          onClick={nextImage} 
          className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
