import React,{useState,useEffect, useRef} from 'react'
import Loader from "react-js-loader";
import { motion } from 'framer-motion';

const Home = (props) => {
  const ResumeDownload = ()=>{
    var new_date = new Date()
    var url = "https://script.google.com/macros/s/AKfycbw9PBj0kYHsi2DX7KHrKe6u6z6npwKataaHErjxQ7yywQrvzhT8F622sW7w-LBL8XC4yQ/exec?action=resume"

    fetch(url,{method:'post',body:JSON.stringify({"name":'resume',"count":'1',"date":new_date.getDate().toString()+"/"+(new_date.getMonth()+1).toString()+"/"+new_date.getFullYear().toString()})}).then(reponse=>reponse.json()).then(data=>console.log(data))
  }
  const [tag,setTag] = useState(null)
  useEffect(()=>{
    setTag(props.data)
    console.log(props.data)
  },[])
  const [all,setAll]=useState({
    'edu':[],'skill':[],'project':[],'noti':[]
  })
  useEffect(()=>{
    setAll({'edu':props.allData.edu,'skill':props.allData.skill,'project':props.allData.project,'noti':props.allData.noti})
  },[])
  return (

    <motion.div initial={{height:'0%'}} animate={{height:'100%'}} exit={{height:'0%',transition:{duration:0.5}}} className='w-full sm:h-[calc(100% - 40px)] flex item-center justify-center sm:flex-row flex-col-reverse'>
        {tag==null?
              <p className='text-white'>
                <div className='w-full h-full'>
              <Loader type="bubble-scale" bgColor={"#FA5A00"} title={"Loading..."} color={'#FFFFFF'} size={50} />
                </div>
              </p>
              :
              tag.map((list)=>{
                if(list.id!=='id'){
                  return <>
                  <div key={list.id} className="left  sm:h-full sm:w-1/2 h-[calc(30%-40px)]  w-full flex items-center justify-center relative">
                  <img  src={"https://drive.google.com/uc?export=view&id="+list.main_img_id} alt="" className='sm:h-[70%] h-[90%] relative'/>
                  </div>
                  <div className="right sm:h-full sm:w-1/2 h-[60%] w-full flex items-center justify-center flex-col">
                  <h1 className='sm:text-6xl text-4xl font-semibold'><span className='text-[#FA5A00]'>A</span>kshar <span className='text-[#FA5A00]'>P</span>armar</h1>
                  <p className='sm:text-3xl text-xl text-[#FA5A00] font-semibold sm:mt-3 mt-2 tracking-wide'>{list.name_desc}</p>
                  <p className='text-[#FFFFFF] sm:text-3xl text-center sm:mt-4 sm:px-40 px-10 mt-5'>{list.description}</p>
                  <a onClick={ResumeDownload} href={"https://drive.google.com/uc?export=download&id="+list.resume}><button className="bg-[#FA5A00] sm:px-8 sm:py-2 px-6 py-2 sm:text-xl text-lg rounded-lg mt-10">Resume</button></a>
                  <div className='special-cards  sm:mt-5 mt-8 w-full h-20 overflow-auto flex items-center justify-evenly flex-wrap flex-row'>
                  <div className="special-tags w-[90%] h-20 bg-gray-900 flex items-center justify-center">
  <div className="left w-[25%] h-full shadow-3xl bg-white flex items-center justify-center">
    <img className='w-[70%] sm:w-[40%] ' src={"https://drive.google.com/uc?export=view&id="+list.img_id} alt=""/>
  </div>
  <div className="right w-[75%] h-full bg-transparent flex items-center justify-center p-5 text-start sm:text-xl text-sm text-[#FA5A00]">
    {list.desc}
  </div>
  </div>
                  </div>
                  </div>
                  </>
                }
                
              })

        }
       
    </motion.div>
  )
}

export default Home


