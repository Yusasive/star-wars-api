import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className='font-agdasima'>
      <div className="fixed top-0">
        <Navbar />
      </div>

      <div className="bg-white min-h-screen pt-[5rem]">
        <Outlet />
      </div>

      <footer className='relative bg-[#FFC107]'>
        <p className='text-black font-black text-center'>Crafted by <a target="_blank" href="https://github.com/Yusasive" className='text-white'>YUSASIVE</a></p>
      </footer>
    </main>
  )
}

export default App
