import React from 'react'
import {useLocation} from 'react-router-dom'
const Heading = () => {
 	const location = useLocation();
  if(location.pathname === '/project/projects' || location.pathname === '/project/skills' ||location.pathname === '/project'){
    return (
      <div>
          <div className="header sm:text-4xl text-3xl font-semibold opacity-50 ">
              <h1>Project and <span className='text-[#FA5A00]'>Skills</span></h1>
          </div>
      </div>
    )
  }
else if(location.pathname === '/about/education' || location.pathname === '/about/achivements' || location.pathname === '/about'){
  return (
    <div>
        <div className="header sm:text-4xl text-3xl font-semibold opacity-50 ">
            <h1>About <span className='text-[#FA5A00]'>Me</span></h1>
        </div>
    </div>
  )
}
else if(location.pathname === '/contact'){
  return (
    <div>
        <div className="header sm:text-4xl text-3xl font-semibold opacity-50 ">
            <h1>Contact <span className='text-[#FA5A00]'>Me</span></h1>
        </div>
    </div>
  )
}
else{
  return (
    <div>
        <div className="header sm:text-4xl text-3xl font-semibold opacity-50 ">
            <h1>Ho <span className='text-[#FA5A00]'>me</span></h1>
        </div>
    </div>
  )
}
}

export default Heading
