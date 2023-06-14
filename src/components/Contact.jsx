import React from 'react'
import Heading from './Heading'

const Contact = () => {
  return (
    <>
    <div className='h-full w-full flex items-center flex-col'>
        <div className="content w-full h-[calc(100%-10%)] overflow-auto flex items-center justify-center sm:flex-row flex-col">
            <div className="left sm:w-1/2 sm:h-full  w-full h-[70%] flex items-center justify-center flex-col ">
                <p className='text-center sm:text-2xl text-xl'>Impressed by having a dive into a portfolio...??</p>
                <p className='text-center sm:text-3xl text-xl sm:mt-2 mt-2 mb-2'>Thinking to <span className='sm:text-4xl text-2xl font-semibold text-[#FA5A00]'>Hire me ?</span>??</p>
    <form action="" className="sm:p-40 px-10 sm:mt-0 mt-4">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-orange-500 text-orange-300 bg-transparent py-2.5 px-0 text-sm text-[#FA5A00] focus:border-[#FA5A00] focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#FA5A00] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#FA5A00] peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-orange-500 text-orange-300 bg-transparent py-2.5 px-0 text-sm text-[#FA5A00] focus:border-[#FA5A00] focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#FA5A00] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#FA5A00] peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-orange-500 bg-transparent text-orange-400 py-2.5 px-0 text-sm text-[#FA5A00] focus:border-[#FA5A00] focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#FA5A00] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#FA5A00] peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-[#FA5A00] px-10 py-2 text-white">Submit</button>
    </form>

            </div>
            <div className="right  sm:w-1/2 sm:h-full w-full h-[30%] flex items-center justify-evenly flex-col">
                <p className="sm:text-2xl text-md sm:p-0 px-5 text-center">Shying by giving details ??  No issuse connect me via...</p>
                <div className="links w-full h-1/2 list-none flex items-center justify-center sm:flex-col flex-row sm:text-6xl text-3xl sm:gap-4 gap-10 text-[#FA5A00]">
                    <a href=""><li><i class="fa-brands fa-linkedin"></i></li></a>
                    <a href=""><li><i class="fa-brands fa-square-github"></i></li></a>
                    <a href=""><li><i class="fa-solid fa-envelope"></i></li></a>

                </div>
            </div>
        </div>
        <div className="headings w-full h-[10%] flex items-center justify-center">
            <Heading/>
        </div>
    </div>
    </>
  )
}

export default Contact
