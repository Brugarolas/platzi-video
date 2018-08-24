import React from 'react';
import './navbar.css';

function Navbar (props) {
  return (
    <nav className='navbar'>{ props.children }</nav>
  )
}

export default Navbar;
