import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { titleVariants } from "../../variant";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // State to hold max stretch values based on screen size
  const [frontendStretch, setFrontendStretch] = useState(10);
  const [developerStretch, setDeveloperStretch] = useState(10);
  const [marginBottom, setMarginBottom] = useState("15vw");
  const [marginTop, setMarginTop] = useState("15vw");
  const [scrollSpeed, setScrollSpeed] = useState(0.2);

  // Effect to set stretch values and margins based on screen size
  useEffect(() => {
    const updateStretchValues = () => {
      const width = window.innerWidth;

      if (width < 640) { // Mobile
        setFrontendStretch(10);
        setDeveloperStretch(10);
        setMarginBottom("25vw");
        setMarginTop("25vw");
        setScrollSpeed(0.1);
      } else if (width < 768) { // Small screens (sm)
        setFrontendStretch(12);
        setDeveloperStretch(12);
        setMarginBottom("32vw");
        setMarginTop("30vw");
        setScrollSpeed(0.1);
      } else if (width < 1024) { // Medium screens (md)
        setFrontendStretch(8); // Smaller stretch on larger screens
        setDeveloperStretch(8);
        setMarginBottom("10vw");
        setMarginTop("25vw");
        setScrollSpeed(0.1);
      } else if (width < 1280) { // Large screens (lg)
        setFrontendStretch(6);
        setDeveloperStretch(6);
        setMarginBottom("12vw");
        setMarginTop("12vw");
        setScrollSpeed(0.1);
      } else { // Extra large screens (xl)
        setFrontendStretch(4); // Minimal stretch on extra large screens
        setDeveloperStretch(4);
        setMarginBottom("6vw");
        setMarginTop("6vw");
        setScrollSpeed(0.1);
      }
    };

    // Initial call
    updateStretchValues();
    // Update on resize
    window.addEventListener("resize", updateStretchValues);
    
    return () => {
      window.removeEventListener("resize", updateStretchValues);
    };
  }, []);

  // Stretch 'FRONTEND' vertically as you scroll
  const frontendScaleY = useTransform(scrollYProgress, [0, scrollSpeed], [2, frontendStretch]);

  // 'DEVELOPER' returns to normal vertical size as you scroll
  const developerScaleY = useTransform(scrollYProgress, [0, scrollSpeed], [developerStretch, 2]);

  return (
    <section className="bg-transparent w-full h-[100vh] sm:h-[100%] flex flex-col justify-center items-center py-20">
      <div className="w-full flex flex-col items-center">
        {/* FRONTEND: Vertical stretch only */}
        <motion.h1
        initial='offscreen'
        whileInView={'onscreen'}
        variants={titleVariants}
          style={{ scaleY: frontendScaleY, scaleX: 1, marginBottom }} // Apply margin dynamically
          className="text-[15vw] text-color-2 font-bold text-center w-full z-0"
        >
          FRONTEND
        </motion.h1>

        {/* DEVELOPER: Vertical shrink back to normal */}
        <motion.h1
        initial='offscreen'
        whileInView={'onscreen'}
        variants={titleVariants}
          style={{ scaleY: developerScaleY, scaleX: 1, marginTop }} // Apply margin dynamically
          className="text-[15vw] text-color-2 font-bold text-center w-full z-0"
        >
          DEVELOPER
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
