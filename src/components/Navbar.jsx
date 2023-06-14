import React from 'react'

const Navbar = () => {
  return (
      <div className="navbar h-full w-full flex items-center justify-center">
        <nav className='w-full sm:h-1/2 h-full text-xl text-[#FA5A00] flex items-center justify-evenly sm:flex-col flex-row list-none sm:text-2xl'>
            <a href=""><li><i class="fa-solid fa-house"></i></li></a>
            <a href=""><li><i class="fa-solid fa-user"></i></li></a>
            <a href=""><li><i class="fa-solid fa-lightbulb"></i></li></a>
            <a href=""><li><i class="fa-solid fa-phone"></i></li></a>
        </nav>
      </div>
  )
}

export default Navbar
