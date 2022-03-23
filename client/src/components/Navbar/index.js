import React from 'react'
import logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="nav-bar">
    <img src={logo} className="app-logo"/>
    <ul className="nav-list"> 
        <li><a href="" >Home</a></li>
        <li><a href="" >Get Started</a></li>
    </ul>
 </nav>
  )
}

export default Navbar