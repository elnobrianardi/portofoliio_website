import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import MasonryGrid from './MasonryGrid';
import { titleVariants } from '../../variant';

const Project = () => {
  return (
    <section id='project' className='bg-transparent my-10'>
      <motion.h1 initial='offscreen' whileInView='onscreen' variants={titleVariants} className='text-color-2 text-start text-[5vh] m-10'>My Projects</motion.h1>
      <div className='flex flex-col sm:flex-row justify-between items-center p-2 relative'>
        {/* Container for the stacked images */}
        <div className='bg-color-2-blur rounded-[50px] text-white p-2 m-5 sm:mt-0 sm:ml-6 absolute inset-0'></div>
        <div className='relative z-10 p-5'>
        <MasonryGrid/>
        </div>
      </div>
    </section>
  );
};

export default Project;
