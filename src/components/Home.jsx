import React,{useState,useEffect} from 'react'
import profile_pic from '../assets/profile_pic_with_grad.png'
import Loader from "react-js-loader";

const Home = (props) => {
  const [tag,setTag] = useState(null)
  useEffect(()=>{
    setTag(props.data)
  })
  return (
    <div className='w-full h-full flex item-center justify-center sm:flex-row flex-col-reverse'>
        <div className="left  sm:h-full sm:w-1/2 h-[40%] w-full flex items-center justify-center relative">
            <img src={profile_pic} alt="" className='sm:h-[70%] h-[90%] relative'/>
        </div>
        <div className="right sm:h-full sm:w-1/2 h-[60%] w-full flex items-center justify-center flex-col">
            <h1 className='sm:text-6xl text-4xl font-semibold'><span className='text-[#FA5A00]'>A</span>kshar <span className='text-[#FA5A00]'>P</span>armar</h1>
            <p className='sm:text-3xl text-xl text-[#FA5A00] font-semibold sm:mt-3 mt-2 tracking-wide'>Full Stack Developer</p>
            <p className='text-[#FFFFFF] sm:text-3xl text-center sm:mt-4 sm:px-40 px-10 mt-5'>I am a interested candidate in MERN stack development</p>
            <button className="bg-[#FA5A00] sm:px-8 sm:py-2 px-6 py-2 sm:text-xl text-lg rounded-lg mt-10">Resume</button>
            <div className='special-cards  sm:mt-16 mt-8 w-full h-20 overflow-auto flex items-center justify-evenly flex-wrap flex-row'>
            {
              tag==null?
              <p className='text-white'>
                <div className='w-full h-full'>
              <Loader type="bubble-scale" bgColor={"#FA5A00"} title={"Loading..."} color={'#FFFFFF'} size={50} />
                </div>
              </p>
              :
              tag.map((list)=>{
                if(list.id!=='id'){
                  return <div className="special-tags w-[90%]  h-20 bg-gray-900 flex items-center justify-center">
                <div className="left w-[25%] h-full shadow-3xl bg-white flex items-center justify-center">
                  <img className='w-[70%] sm:w-[40%] ' src={"https://drive.google.com/uc?export=view&id="+list.img_id} alt=""/>
                </div>
                <div className="right w-[75%] h-full bg-transparent flex items-center justify-center p-5 text-start sm:text-xl text-sm text-[#FA5A00]">
                  {list.desc}
                </div>
            </div>
                }
              })
            }
            </div>
        </div>
    </div>
  )
}

export default Home
