import React ,{useState,useEffect} from 'react'
import Loader from "react-js-loader";

const Ach = (props) => {
  const [ach,setAch] = useState(null)
  useEffect(()=>{
    setAch(props.data)
    console.log(ach)
  })
  return (
    <>
    {
            ach==null?
            <div className='w-full h-full'>
              <Loader type="bubble-scale" bgColor={"#FA5A00"} title={"Loading..."} color={'#FFFFFF'} size={50} />
            </div>:
            
            <div className='w-full h-full overflow-auto flex items-center justify-start flex-col'>
            {
              ach.map((list)=>{
                if(list.ach_id!=='ach_id'){
                  return  <div key={list.ach_id} className="w-[95%] min-h-[100px] mt-4 overflow-hidden bg-white flex items-center justify-evenly">
                <div className="details pl-4 py-2 bg-gray-900/25  h-full w-[80%]  flex items-start justify-evenly flex-col">
                    <h1 className='text-black font-semibold text-2xl'>{list.ach_name}</h1>
                    <p className='overflow-auto text-black opacity-75 text-md '>{list.ach_desc}</p>
                </div>      
                <div className="download h-full w-[20%]  flex items-center justify-center text-[#FA5A00] sm:text-4xl text-2xl">
                   <a href={"https://drive.google.com/uc?export=download&id="+list.ach_file_id} download={list.ach_name}><i class="fa-solid fa-file-arrow-down"></i></a>
                </div>
            </div> 
                }
              })
            }  
        </div>
          }
    </>
  )
}

export default Ach
