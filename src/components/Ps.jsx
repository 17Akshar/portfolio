import React from 'react'
import Heading from './Heading'
// import Project from './Project'
// import Skills from './Skills'
import { NavLink,Outlet } from 'react-router-dom'
const Ps = () => {
  return (
    <div className='h-full w-full flex items-center flex-col'>
        <div className="sub-nav w-full h-[10%] sm:text-xl font-semibold flex items-center justify-evenly list-none">
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100 sm:text-3xl text-xl' : 'opacity-25 text-md')} to="/project/projects"><li>Projects</li></NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100 sm:text-3xl text-xl' : 'opacity-25 text-md')} to="/project/skills"><li>Skills</li></NavLink>
        </div>
        <div className="content w-full h-[calc(100%-20%)] overflow-auto">
            <Outlet/>
        </div>
        <div className="headings w-full h-[10%] flex items-center justify-center">
            <Heading/>
        </div>
    </div>
  )
}

export default Ps
