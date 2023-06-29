import React,{useState,useEffect} from 'react'
import Heading from './Heading'
import {motion} from 'framer-motion'
import Loader from "react-js-loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const new_date = new Date()
  const today_date = new_date.getDate().toString()+"/"+(new_date.getMonth()+1).toString()+"/"+new_date.getFullYear().toString()
  const [data,setData]=useState({
    "name":"",
    "email":"",
    message:"" ,
    "date":""
  })
  useEffect(()=>{
    var status = localStorage.getItem('submitted')
    if(status=='true'){
      setSubmitted(true)
    }
    else{
      setSubmitted(false)
    }
  },[])
  const [sub,setSub]=useState(null)
  const [load,setLoad]=useState(null)
  const [submitted,setSubmitted] = useState(false)
  const HandleInput = (e)=>{
    var name = e.target.name;
    var value = e.target.value;
    setData({...data,[name]:value,"date":today_date})
  }
  
  const HandleSubmit =(e)=>{
    console.log(data)
    e.preventDefault();
    if(data==={"name":"","email":"",message:""}|| data.name===""||data.email===""||data.message===""){
      toast.error('Please enter all the details!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
    else{
      setLoad('load')
      var new_url = "https://script.google.com/macros/s/AKfycbzIOflHah72A9FLBJQM5Z7lh3kVzb_L3hbzKRBghzO542wK7hmng9G9qLkIt9DZifg85g/exec?action=addContact"
      var url = "https://script.google.com/macros/s/AKfycbwoGZ8EVi4CcDT_Fl_y7j6owHrLhYrZMayq6AHuLC65_InRU-OQASPTJ8CPdfM9cI2vzA/exec?action=addContact"
      fetch(url,{method:'post',body:JSON.stringify(data)}).then(response=>{
        console.log(response)
        setSub('Submitted')
        setLoad(null)
        toast.success('Your details has been submitted!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
          setSubmitted(true)
          localStorage.setItem('submitted','true')
        setData({
          "name":"",
          "email":"",
          message:""  
        })
      })
    }
  }
  function socialmedia(name){
    var url = "https://script.google.com/macros/s/AKfycbzzfERIK1lr3gSR3OYicGpVh6srifF_U8LeMMdX2zSx8YmuN8rtUHSFCNp5ZK2iAnzQTA/exec?action=addSocial"
    fetch(url,{method:'post',body:JSON.stringify({"social_media":name,"count":"1"})}).then(response=>response.json()).then(data=>{console.log(data)})
  }
  return (
    <>
    <ToastContainer />
    <motion.div initial={{height:'0%'}} animate={{height:'100%'}} exit={{height:'0%',transition:{duration:0.5}}} className='h-full w-full flex items-center flex-col'>
        <div className=" relative content w-full h-[calc(100vh-10%)] overflow-auto flex items-center justify-end sm:flex-row flex-col">
           {
            !submitted?<div className="left  sm:w-1/2 sm:h-full  w-full h-[70%] flex items-center justify-center flex-col ">
            <p className='text-center text-white sm:text-2xl text-xl'>Impressed by having a dive into a portfolio...??</p>
            <p className='text-center sm:text-3xl text-xl sm:mt-2 mt-2 mb-2'>Thinking to <span className='sm:text-4xl text-2xl font-semibold text-[#FA5A00]'>Hire me ?</span>??</p>
            <form onSubmit={HandleSubmit}  className="sm:py-10 px-10 sm:mt-0 mt-4">
            <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
            <input  required type="text" value={data.name} onChange={HandleInput} name="name" className="peer block w-full appearance-none border-0 border-b border-orange-500 text-orange-300 bg-transparent py-2.5 px-0 text-sm text-[#FA5A00] focus:border-[#FA5A00] focus:outline-none focus:ring-0" placeholder=" " />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#FA5A00] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#FA5A00] peer-focus:dark:text-blue-500">Your name</label>
            </div>
            <div className="relative z-0">
            <input required type="email" value={data.email} name="email" onChange={HandleInput} className="peer block w-full appearance-none border-0 border-b border-orange-500 text-orange-300 bg-transparent py-2.5 px-0 text-sm text-[#FA5A00] focus:border-[#FA5A00] focus:outline-none focus:ring-0" placeholder=" " />
      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#FA5A00] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#FA5A00] peer-focus:dark:text-blue-500">Your email</label>
    </div>
    <div className="relative z-0 col-span-2">
      <textarea required name="message" value={data.message} rows="5" onChange={HandleInput} className="peer block w-full appearance-none border-0 border-b border-orange-500 bg-transparent text-orange-400 py-2.5 px-0 text-sm text-[#FA5A00] focus:border-[#FA5A00] focus:outline-none focus:ring-0" placeholder=" "></textarea>
      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#FA5A00] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#FA5A00] peer-focus:dark:text-blue-500">Your message</label>
    </div>
  </div>
  <button type="submit" className="mt-5 rounded-md bg-[#FA5A00] px-10 py-2 text-white">{load==null?'Submit':<Loader type="bubble-scale" bgColor={"black"}  size={30} />}</button>
</form>
        </div>:
<div class="flex justify-center items-center text-center h-full bg-black sm:items-center">
  <div class="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
    <div class="grid grid-cols-1">
      <div class="mt-4 mr-auto mb-4 ml-auto  max-w-lg">
        <div class="flex flex-col  text-[#FA5A00] items-center pt-6 pr-6 pb-6 pl-6">
        <i class="fa-solid fa-thumbs-up text-5xl sm:text-6xl"></i>
          <p class="mt-8 text-2xl text-center font-semibold leading-none text-[#FA5A00] tracking-tighter lg:text-3xl">Details submitted successfully!</p>
          <p class="mt-3 text-base leading-relaxed text-center text-[#FAA5A00]">We'll contact you via Gmail!!! Stay tuned</p>
        </div>
      </div>
    </div>
  </div>
</div>
}
            <div className="right  sm:w-1/2 sm:h-full w-full h-[30%] flex items-center justify-evenly flex-col">
                <p className="sm:text-2xl text-md sm:p-0 px-5 text-center">Shying by giving details ??  No issuse connect me via...</p>
                <div className="links w-full h-1/2 list-none flex items-center justify-center sm:flex-col flex-row  sm:gap-4 gap-10 text-[#FA5A00]">
                    <a onClick={()=>{socialmedia('linkedin')}} href="https://www.linkedin.com/in/akshar-parmar-59b33b24a/" target="_blank"><li class="text-3xl sm:text-5xl hover:text-white"><i class="fa-brands fa-linkedin"></i></li></a>
                    <a onClick={()=>{socialmedia('github')}} href="https://github.com/17Akshar" target='_blank'><li class="text-3xl sm:text-5xl hover:text-white"><i class="fa-brands fa-square-github"></i></li></a>
                    <a onClick={()=>{socialmedia('gmail')}} href="mailto:aksharparmar2002@gmail.com" target="_blank"><li class="text-3xl sm:text-5xl hover:text-white"><i class="fa-solid fa-envelope"></i></li></a>
                </div>
            </div>
          </div>
        <div className="headings  w-full h-[10%] flex items-center justify-center">
            <Heading/>
        </div>
    </motion.div>
    </>
  )
}

export default Contact
