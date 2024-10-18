import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex">

        <div className={`${open ? 'min-w-72' : 'w-10'} duration-300 h-screen bg-blue-600 relative`}>

          <img src='./src/assets/images/logout.png' className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-blue-600 bg-white ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
          <h1 className='p-4 text-white bg-blue-500 text-2xl flex items-center'> <img src="./src/assets/images/user.png" className='bg-white rounded-full w-9' /> Wilson Muchiri <img src="./src/assets/images/star.png" className='bg-white rounded-full w-9' /></h1>
          <ul>
            <Link to="/"><li className='hover:bg-blue-700 cursor-pointer text-2xl p-6 flex'> <img src="./src/assets/images/dashboard.png" className='w-9' /> Home</li></Link>
            <Link to="/contact"><li className='hover:bg-blue-700 cursor-pointer text-2xl p-6 flex'> <img src="./src/assets/images/members.png" className='w-9' /> Contacts</li></Link>
            <Link to="/skills"><li className='hover:bg-blue-700 cursor-pointer text-2xl p-6 flex'> <img src="./src/assets/images/setting.png" className='w-9' /> Skills</li></Link>
            <Link to="/projects"><li className='hover:bg-blue-700 cursor-pointer text-2xl p-6 flex'> <img src="./src/assets/images/rewards.png" className='w-9' /> Projects</li></Link>
            <Link to="/resume"><li className='hover:bg-blue-700 cursor-pointer text-2xl p-6 flex'> <img src="./src/assets/images/reports.png" className='w-9' /> Resume</li></Link>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
