import React from 'react'

const Project = () => {
  return (
    <div className='w-full h-full flex sm:items-start  sm:justify-center sm:gap-7 sm:flex-row flex-col items-center justify-start sm:flex-wrap'>
      <div className="flex flex-row mt-4 bg-gradient-to-b from-[#FA5A00]  to-orange-500 px-2 py-4 justify-evenly min-w-[300px]">
        <div className="my-auto">
          <div className="text-2xl text-purple-100">01 . Product Card</div>
        </div>
        <div className="text-[#FA5A00] text-xl my-auto bg-white rounded-lg  p-2">
          <i className="fa-solid fa-eye"></i>
        </div>
      </div>
    </div>
  )
}

export default Project;
