import Home from './components/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Ps from './components/Ps'
import Contact from './components/Contact'
import NotFound from './components/NotFound';
import Edu from './components/Edu';
import Ach from './components/Ach';
import Project from './components/Project';
import Skills from './components/Skills';
import { useEffect, useState } from 'react';
import Loading from './Loading';
function App() {
  const [edu,Setedu] = useState(null)
  const [ach,Setach] = useState(null)
  const [project,Setproject] = useState(null)
  const [skills,Setskills] = useState(null)
  const [noti,Setnoti] = useState(null)
  useEffect(()=>{
    fetch('https://script.google.com/macros/s/AKfycbz_4ed1-A7GzRtg7GB6OyzX4Ma-cN7G7SDVOcBThypAp8y24_TncaH4zPmPE0elZkBHEA/exec').then(response=>response.json()).then(data=>{
      Setedu(data.education)
      Setach(data.ach)
      Setproject(data.project)
      Setskills(data.skill)
      Setnoti(data.notific)
    })
  },[])
  return (
  
    edu==null&&ach==null&&project==null&&skills==null&&noti==null?<Loading/>:
    <BrowserRouter>
    <div className='main h-[100vh] w-full bg-black flex items-center text-gray-100 sm:flex-row flex-col-reverse'>
        <div className='navbar sm:h-full sm:w-40 w-full h-16 bg-black '>
          <Navbar/>
        </div>
        <div className='sub-main w-full h-[calc(100vh-4rem)] bg-black sm:h-full sm:w-[calc(100%-10rem)]'>
            <Routes>
              <Route path='/home' element={<Home data={noti} />}/>
              <Route path='/about' element={<About/>}>
                <Route path='education' element={<Edu data={edu} />}/>
                <Route path='achivements' element={<Ach data={ach} />}/>
              </Route>
              <Route path='/project' element={<Ps/>}>
                <Route path='projects' element={<Project data={project} />}/>
                <Route path='skills'     element={<Skills data={skills} />}/>
              </Route>
              <Route path='/contact/' element={<Contact/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
);
}

export default App;
