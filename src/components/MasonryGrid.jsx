import React from 'react';
import { motion } from 'framer-motion';
import { desVariants } from '../../variant';
import { projectImages } from '../constant';

const MasonryGrid = () => {

  
  return (
    <div className="p-5 md:p-10">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5">
        <div>
        {
            projectImages.map((image) =>
            (<a key={image.id} href={image.link} target="_blank"><motion.img initial='offscreen' whileInView='onscreen' variants={desVariants} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} alt={image.alt} className="w-full mb-4 rounded-lg cursor-pointer" src={image.src}/></a>)
            )
        }
      </div>
    </div>
    </div>
  );
};

export default MasonryGrid;
