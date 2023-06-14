import React from 'react'

const Ach = () => {
  return (
<div className='w-full h-full overflow-auto flex items-center justify-start flex-col'>
    <div className="w-[95%] min-h-[100px] mt-4 overflow-hidden bg-white flex items-center justify-evenly">
        <div className="details pl-4 py-2 bg-gray-900/25  h-full w-[80%]  flex items-start justify-evenly flex-col">
            <h1 className='text-black font-semibold text-2xl'>Hackathon</h1>
            <p className='overflow-auto text-black opacity-75 text-md '>participated in Hackathon arranged by SFIT Skill developemnt cell</p>
        </div>      
        <div className="download h-full w-[20%]  flex items-center justify-center text-[#FA5A00] sm:text-4xl text-2xl">
            <i class="fa-solid fa-file-arrow-down"></i>
        </div>
    </div>   
</div>
  )
}

export default Ach
