import React from 'react'
import profile_pic from '../assets/profile_pic_with_grad.png'
const Home = () => {
  return (
    <div className='w-full h-full flex item-center justify-center sm:flex-row flex-col-reverse'>
        <div className="left  sm:h-full sm:w-1/2 h-[50%] w-full flex items-start sm:items-center justify-center relative">
            <img src={profile_pic} alt="" className='sm:h-[70%] h-[100%] relative'/>
        </div>
        <div className="right sm:h-full sm:w-1/2 h-[50%] w-full flex items-center justify-center flex-col">
            <h1 className='sm:text-6xl text-4xl font-semibold'><span className='text-[#FA5A00]'>A</span>kshar <span className='text-[#FA5A00]'>P</span>armar</h1>
            <p className='sm:text-3xl text-xl text-[#FA5A00] font-semibold sm:mt-3 mt-2 tracking-wide'>Full Stack Developer</p>
            <p className='text-[#FFFFFF] sm:text-3xl text-center sm:mt-4 sm:px-40 px-10 mt-5'>I am a interested candidate in MERN stack development</p>
            <button className="bg-[#FA5A00] sm:px-8 sm:py-2 px-6 py-2 sm:text-xl text-lg rounded-lg mt-10">Resume</button>
        </div>
    </div>
  )
}

export default Home
