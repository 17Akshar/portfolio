import React,{useState,useEffect} from 'react'
import Loader from "react-js-loader";
const Project = (props) => {
  const project_view = (name)=>{
    var url = "https://script.google.com/macros/s/AKfycbz3VGTQ1Imx3Yfpi9l6r7N-oX-Abd1b4ybAOazVw6Jw1gK3VDq0ogUdjXVhbd9WxeUv6A/exec?action=projectView"
    fetch(url,{method:'post',body:JSON.stringify({name:name,count:1})}).then(response=>response.json()).then(res=>{console.log(res)})
    console.log("name",name)
  }
  const [project,setProject]=useState(null)
  useEffect(()=>{
    setProject(props.data)
  },[])
  return (
    <>
    {
            project==null?
            <div className='w-full h-full'>
              <Loader type="bubble-scale" bgColor={"#FA5A00"} title={"Loading..."} color={'#FFFFFF'} size={50} />
            </div>:
            <div  className='w-full h-full flex sm:items-start  sm:justify-center sm:gap-7 sm:flex-row flex-col items-center justify-start sm:flex-wrap'>
            {
              project.map((list)=>{
                if(list.project_id!=='project_id'){
                  return <div key={list.project_id} className="flex flex-row mt-4 bg-gradient-to-b from-[#FA5A00] to-orange-500 px-2 py-4 justify-evenly w-[300px] h-[100px] items-center">
                <div className="my-0 overflow-auto  h-full">
                  <div className="text-2xl text-purple-100 ">0{list.project_id} . {list.project_name}</div>
                </div>
                <a href={list.project_link} target='_blank'>
                <div onClick={()=>{project_view(list.project_name)}} className="text-[#FA5A00] text-xl my-auto bg-white rounded-lg  p-2">
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
