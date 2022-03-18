import React from 'react'
import logo from '../../../src/images/logo.svg';

const Navbar = () => {
  return (
    <nav className="Nav-bar">
    <img src={logo} className="App-logo"/>
    <ul className="NavList"> 
        <li><a href="" >Home</a></li>
        <li><a href="" >Log In</a></li>
    </ul>
 </nav>
  )
}

export default Navbar