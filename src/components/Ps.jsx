import React from 'react'
import Heading from './Heading'
import Project from './Project'
import Skills from './Skills'
const Ps = () => {
  return (
    <div className='h-full w-full flex items-center flex-col'>
        <div className="sub-nav w-full h-[10%] sm:text-xl font-semibold flex items-center justify-evenly list-none">
            <a href=""><li>Projects</li></a>
            <a href=""><li>Skills</li></a>
        </div>
        <div className="content w-full h-[calc(100%-20%)] overflow-auto">
            <Skills/>
        </div>
        <div className="headings w-full h-[10%] flex items-center justify-center">
            <Heading/>
        </div>
    </div>
  )
}

export default Ps
