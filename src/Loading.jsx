import React from 'react'
import Loader from "react-js-loader";

function Loading() {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      <Loader type="bubble-scale" bgColor={"#FA5A00"} title={"Loading..."} color={'#FFFFFF'} size={100} />
    </div>
  )
}

export default Loading
