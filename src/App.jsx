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
        <p className='text-black font-black text-center'>05/04 be with you. All icons by <a target="_blank" href="https://icons8.com" className='text-white'>Icons8</a></p>
      </footer>
    </main>
  )
}

export default App
