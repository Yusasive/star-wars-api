import { useState } from 'react';
import Logo from '../assets/svgs/icons8-star-wars-black-orange.svg';
import { NavLink } from 'react-router-dom';
import Switcher from "./Switcher";
import ClickAwayListener from 'react-click-away-listener';
import NavbarLink from './NavbarLink';


const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prevValue) => !prevValue)
  }

  const links = [
    "Home",
    "Films",
    "People",
    "Planets",
    "Starships",
    "Species",
    "Vehicles"
  ];

  return (
    <div className='relative'>
      <nav className='flex flex-row bg-white dark:bg-black w-screen shadow-lg'>
        <div className='self-center ml-5'>
          <button className="menu outline-sm" onClick={toggleNav}>
            <svg viewBox="0 0 100 80" width="40" height="25">
              <rect width="100" height="15" fill="#FFC107"></rect>
              <rect y="30" width="100" height="15" fill="#FFC107"></rect>
              <rect y="60" width="100" height="15" fill="#FFC107"></rect>
            </svg>
          </button>
        </div>

        <div className='m-auto'>
          <img src={Logo} alt="logo" />
        </div>

        <div className='flex items-center justify-center mr-7 mt-[1.3rem]'>
          <Switcher />
        </div>


      </nav>

      {navOpen &&
        <ClickAwayListener onClickAway={toggleNav}>
          <div className='absolute top-[5rem] h-screen bg-white dark:bg-black flex flex-col shadow-xl divide-y border-y w-screen sm:w-[30vw]'>
            
            {links.map(link => (
              <NavbarLink name={link} key={link} toggleNav={toggleNav} />
            ))}

          </div>
        </ClickAwayListener>
      }
    </div>
  )
}

export default Navbar