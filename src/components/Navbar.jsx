import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
      <div className="navbar h-full w-full flex items-center justify-center">
        <nav className='w-full sm:h-1/2 h-full text-xl text-[#FA5A00]  flex items-center justify-evenly sm:flex-col flex-row list-none sm:text-2xl'>
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-25')} to="/home"><i class="fa-solid fa-home "></i></NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-25')} to='/about/education'><i class="fa-solid fa-user "></i></NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-25')} to='/project/projects'><i class="fa-solid fa-lightbulb "></i></NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-25')} to='/contact'><i class="fa-solid fa-phone "></i></NavLink> 
        </nav>
      </div>
  )
}

export default Navbar
