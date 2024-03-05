import Home from './components/Home';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Ps from './components/Ps'
import Contact from './components/Contact'
import NotFound from './components/NotFound';
import Edu from './components/Edu';
import Ach from './components/Ach';
import Project from './components/Project';
import Skills from './components/Skills';
import { useEffect, useState} from 'react';
import Loading from './Loading';
import { AnimatePresence } from 'framer-motion';
import profile from '../src/assets/profile_pic_with_grad.png'
function App() {
  const [edu,Setedu] = useState(null)
  const [ach,Setach] = useState(null)
  const [project,Setproject] = useState(null)
  const [skills,Setskills] = useState(null)
  const [noti,Setnoti] = useState(null)
  useEffect(()=>{
    fetch('https://script.google.com/macros/s/AKfycbxvtpE45_38Xy-_Rn556jCumb-kJ1NzQA3Oq1zIfzgAtuSy0S6IOKnLMRYaD02a2iWZPQ/exec').then(response=>response.json()).then(data=>{
      Setedu(data.education)
      Setach(data.ach)
      Setproject(data.project)
      Setskills(data.skill)
      Setnoti(data.notific)
    })
  },[])
  const location = useLocation();
  return (
    edu==null&&ach==null&&project==null&&skills==null&&noti==null?<Loading/>:

    <div className='main h-[100vh] w-full bg-black flex items-center text-gray-100 sm:flex-row flex-col-reverse overflow-hidden'>
        <div className='navbar sm:h-full sm:w-40 w-full h-16 bg-black '>
          <Navbar/>
        </div>
        <div className='sub-main w-full h-[calc(100vh-4rem)] bg-black sm:h-[100vh] sm:w-[calc(100%-10rem)]'>
            <div className='w-full bg-red-900 sm:h-[40px] h-[50px] flex items-center justify-center overflow-hidden'>
              <p className='flex whitespace-nowrap'>Redesigned website launching soon! 🚀</p>
            </div>
            <AnimatePresence>
            <Routes location={location} key={location.pathname.split('/')[1]}>
            <Route path='/portfolio/' element={<Home data={noti} allData={{'edu':edu,'noti':noti,'project':project,'skill':skills}} />}/>
            <Route path='/' element={<Home data={noti} allData={{'edu':edu,'noti':noti,'project':project,'skill':skills}} />}/>
            <Route path='/home' element={<Home data={noti} allData={{'edu':edu,'noti':noti,'project':project,'skill':skills}} />}/>
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
            </AnimatePresence>
        </div>
    </div>
);
}

export default App;
