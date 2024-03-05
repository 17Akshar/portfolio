import React from 'react'
import Heading from './Heading'
import { Outlet, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div initial={{height:'0%'}} animate={{height:'100%'}} exit={{height:'0%',transition:{duration:0.5}}} className='h-full w-full flex items-center flex-col'>
        <div className="sub-nav w-full h-[10%] sm:text-xl font-semibold flex items-center justify-evenly list-none">
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100 sm:text-3xl text-xl' : 'opacity-25 text-md')} to="/about/education"><li>Education</li></NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100 sm:text-3xl text-xl' : 'opacity-25 text-md')} to="/about/achivements"><li>Achivements</li></NavLink>
        </div>
        <div className="content w-full h-[calc(100%-20%-40px)] overflow-auto">
            <Outlet/>
        </div>
        <div className="headings w-full h-[10%] flex items-center justify-center">
            <Heading/>
        </div>
    </motion.div>
  )
}

export default About
