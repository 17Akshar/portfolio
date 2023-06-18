import React, {useState,useEffect}from 'react'
import Loader from "react-js-loader";

const Edu = (props) => {
  const [edu,setEdu]=useState(null)
  useEffect(()=>{
    setEdu(props.data)
  },[])
  
    return (
      <div>
          {
            edu==null?
            <div className='w-full h-full'>
              <Loader type="bubble-scale" bgColor={"#FA5A00"} title={"Loading..."} color={'#FFFFFF'} size={50} />
            </div>:
            <div  className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <div className="border-l-2 mt-10">
              {edu.map((list)=>{
                if(list.education_id!=='education_id'){
                  return <div key={list.education_id} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gradient-to-t from-[#FA6000] to-[#C24A00] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                      <div className="w-5 h-5 bg-[#FA5A00] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                      <div className="w-10 h-1 bg-[#FFB385] absolute -left-10 z-0"></div>
                      <div className="flex-auto">
                        <h1 className="text-xl font-bold mt-0">{list.school_name}</h1>
                        <h3>{list.start_year}-{list.end_year}</h3>
                      </div>
                      <p className="text-end absolute bottom-2 right-2 text-4xl sm:text-5xl font-semibold text-black opacity-50 hover:text-gray-300">0{list.education_id}</p>
                    </div>
              } 
              })}
            </div>
          </div>
        }
      </div>
      )
  
  
}

export default Edu






