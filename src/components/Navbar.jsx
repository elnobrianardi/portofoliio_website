import React, { useEffect, useState } from "react";
import { navLinks } from "../constant";
import { close, menu_blue, menu_yellow, close_yellow, close_blue } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent')
  const [textColor, setTextColor] = useState('text-color-2')
  const [menuColor, setMenuColor] = useState(menu_blue)
  const [closeColor, setCloseColor] = useState(close_blue)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = window.innerHeight * 0.1
      // Change the background color after scrolling 100vh
      if (scrollPosition > threshold) {
        setBgColor('bg-color-1');
        setTextColor('text-color-2');
        setMenuColor(menu_yellow);
        setCloseColor(close_yellow);
      } else {
        setBgColor('bg-color-2');
        setTextColor('text-color-1');
        setMenuColor(menu_blue);
        setCloseColor(close_blue);
      }
    };
    //Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    //Cleanup listener on compunt umnount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[toggle])

  

  

  return (
    <nav className= {`${bgColor} w-full p-5 flex flex-row justify-between items-center fixed top-0 z-50 transition duration-300`}>
      <div className={`${textColor} font-semibold`}>Elno Brianardi</div>
      <ul className="text-color-2 list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${textColor} font-poppins cursor-pointer text-[16px] font-semibold ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center relative">
        <motion.img
          whileHover={{ scale: 1.2 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: toggle ? 360 : 0 }}
          transition={{ duration: 0.3 }}
          src={toggle ? closeColor : menuColor}
          alt=""
          className="w-6 h-6 object-contain color-black cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <AnimatePresence>
          {toggle && (
        <motion.div key='menu' initial={{opacity: 0, y:-20}} animate={{opacity: toggle ? 1 : 0, y: toggle ? 0 : -20}} exit={{ opacity: 0, y: -20 }} transition={{duration: 0.3, ease: "easeInOut"}} className={`${toggle ? "flex" : "hidden"} p-6 bg-color-2 absolute top-10 -right-5 mx-4 my-2 min-w-[150px] rounded-xl z-10`} >
          <ul className="list-none sm:hidden flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-color-1 font-poppins font-semibold cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
