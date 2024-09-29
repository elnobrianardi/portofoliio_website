import React from 'react'
import { avatar } from '../assets'
import { motion } from 'framer-motion'
import { leftVariants, rightVariants, titleVariants } from '../../variant'

const Profile = () => {
  return (
    <section id='profile' className='bg-transparent mx-5'>
      <div className='flex flex-col-reverse md:flex-row flex-grow justify-center'>
        <motion.div initial='offscreen' whileInView='onscreen' variants={rightVariants} className='text-white text-center xl:w-[75vw] m-0 md:my-10 md:mx-10'>
        <motion.h1 initial='offscreen' whileInView='onscreen' variants={titleVariants} className='text-color-2 text-[5vh] text-center mb-5'>About Me</motion.h1>
          <p className='text-[2.5vh]'>Hi! I'm Elno Brianardi, a frontend developer from Indonesia, specializing in React and Next.js. I have extensive experience building dynamic, responsive web applications with modern technologies.</p>
            <br />
            <p className='text-[2.5vh]'>
            Whether it's creating seamless user interfaces or ensuring optimal performance, I am passionate about bringing designs to life with clean, efficient code. 
            I'm always eager to collaborate on exciting projects and help you achieve your vision. 
            </p> 
            <br />
            <p className='text-[2.5vh]'>
            Let's work together to create something amazing!
            </p>
        </motion.div>
        <motion.div initial='offscreen' whileInView='onscreen' variants={leftVariants} className='flex justify-center m-auto md:mr-5 bg-color-2-blur rounded-[50px] h-[100%] object-cover'>
          <img src={avatar} className='max-w-1/2 xl:max-w-[25vw] h-auto object-contain '></img>
        </motion.div>
      </div>
    </section>
  )
}

export default Profile