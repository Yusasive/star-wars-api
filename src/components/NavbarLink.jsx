import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarLink({name, toggleNav}) {
  return (
    <NavLink className="text-[#FFC107]" to={`/${name === 'Home' ? '' : name.toLowerCase()}`} onClick={toggleNav}>
      <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
        {name}
      </p>
    </NavLink>
  );
}

export default NavbarLink;