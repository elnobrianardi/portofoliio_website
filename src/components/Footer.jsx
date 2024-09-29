import React from "react";
import { linkedin_blue, github_blue, gmail_blue } from "../assets";
import { motion } from "framer-motion";
import { leftVariants, rightVariants } from "../../variant";

const Footer = () => {
  return (
    <section id="footer" className="bg-color-2 mt-10 h-full z-10">
      <div className="flex flex-row justify-between p-2">
        <motion.div initial='offscreen' whileInView='onscreen' variants={rightVariants} className="text-color-1 m-5 font-semibold text-[2.5vh]">My Socials</motion.div>
        <div>
          <ul className="flex flex-row text-color-1 font-semibold m-5 ">
            <a
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mr-4 cursor-pointer">
                <motion.img initial='offscreen' whileInView='onscreen' variants={leftVariants} whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }} src={linkedin_blue} alt="" className="w-[2.5vh] h-[2.5vh]" />
              </li>
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mr-4 cursor-pointer">
                <motion.img initial='offscreen' whileInView='onscreen' variants={leftVariants} whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }} src={github_blue} alt="" className="w-[2.5vh] h-[2.5vh]" />
              </li>
            </a>
            <a
              href="http://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer">
                <motion.img initial='offscreen' whileInView='onscreen' variants={leftVariants} whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }} src={gmail_blue} alt="" className="w-[2.5vh] h-[2.5vh]" />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
