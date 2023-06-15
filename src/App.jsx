import Home from './components/Home';
import { BrowserRouter, Routes, Route, Router, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Ps from './components/Ps'
import Contact from './components/Contact'
import NotFound from './components/NotFound';
import Edu from './components/Edu';
import Ach from './components/Ach';
import Project from './components/Project';
import Skills from './components/Skills';
function App() {
  return (
    <BrowserRouter>

    <div className='main h-[100vh] w-full bg-black flex items-center text-gray-100 sm:flex-row flex-col-reverse'>
        <div className='navbar sm:h-full sm:w-40 w-full h-16 bg-black '>
          <Navbar/>
        </div>
        <div className='sub-main w-full h-[calc(100vh-4rem)] bg-black sm:h-full sm:w-[calc(100%-10rem)]'>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}>
                <Route path='education' element={<Edu/>}/>
                <Route path='achivements' element={<Ach/>}/>
              </Route>
              <Route path='/project' element={<Ps/>}>
                <Route path='projects' element={<Project/>}/>
                <Route path='skills' element={<Skills/>}/>
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
