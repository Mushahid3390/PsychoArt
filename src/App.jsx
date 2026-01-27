import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-screen bg-linear-to-l from-[#181E41] to-[#984D38]'>
      <div className='px-30.5 flex flex-col items-center w-360 mx-auto h-screen pt-2.25'>
        <Navbar/>
     </div>
     </div>
    </>
  )
}

export default App
