import React from 'react'
import Heading from './Heading'
import Edu from './Edu'
import Ach from './Ach'
import { Outlet, NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div className='h-full w-full flex items-center flex-col'>
        <div className="sub-nav w-full h-[10%] sm:text-xl font-semibold flex items-center justify-evenly list-none">
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100 sm:text-3xl text-xl' : 'opacity-25 text-md')} to="/about/education"><li>Education</li></NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100 sm:text-3xl text-xl' : 'opacity-25 text-md')} to="/about/achivements"><li>Achivements</li></NavLink>
        </div>
        <div className="content w-full h-[calc(100%-20%)] overflow-auto">
<<<<<<< HEAD
            <Edu/>
=======
            <Outlet/>
>>>>>>> a52001bf801745111b493d6342bca6373c95deee
        </div>
        <div className="headings w-full h-[10%] flex items-center justify-center">
            <Heading/>
        </div>
    </div>
  )
}

export default About
