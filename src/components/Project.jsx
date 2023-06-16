import React,{useState,useEffect} from 'react'
import Loader from "react-js-loader";

const Project = () => {
  const [project,setProject]=useState(null)
  useEffect(()=>{
    fetch('https://script.google.com/macros/s/AKfycbxDEVpz4M5KQG6dlivlV6Fjb-fleq5g6dPKG6HEvPMXzcmWYoXiM1T9YESkXS-BU8Zx/exec').then(response=>response.json()).then(data=>setProject(data.data))
  },[])
  return (
    <>
    {
            project==null?
            <div className='w-full h-full'>
              <Loader type="bubble-scale" bgColor={"#FA5A00"} title={"Loading..."} color={'#FFFFFF'} size={50} />
            </div>:
            <div className='w-full h-full flex sm:items-start  sm:justify-center sm:gap-7 sm:flex-row flex-col items-center justify-start sm:flex-wrap'>
            {
              project.map((list)=>{
                if(list.project_id!='project_id'){
                  return <div key={list.project_id} className="flex flex-row mt-4 bg-gradient-to-b from-[#FA5A00] to-orange-500 px-2 py-4 justify-evenly w-[300px] h-[100px] items-center">
                <div className="my-0 overflow-auto  h-full">
                  <div className="text-2xl text-purple-100 ">0{list.project_id} . {list.project_name}</div>
                </div>
                <a href={list.project_link} target='_blank'>
                <div className="text-[#FA5A00] text-xl my-auto bg-white rounded-lg  p-2">
                  <i className="fa-solid fa-eye"></i>
                </div>
                </a>
              </div>
                }
              })
            }
            </div>
          }
    </>
  )
}

export default Project;
