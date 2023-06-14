import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Ps from './components/Ps'
import Contact from './components/Contact'
function App() {
  return (
   
    <div className='main h-[100vh] w-full bg-black flex items-center text-gray-100 sm:flex-row flex-col-reverse'>
        <div className='navbar sm:h-full sm:w-40 w-full h-16 bg-black '>
          <Navbar/>
        </div>
        <div className='sub-main w-full h-[calc(100vh-4rem)] bg-black sm:h-full sm:w-[calc(100%-10rem)]'>
          <Contact/>
        </div>
    </div>
   
  );
}

export default App;
