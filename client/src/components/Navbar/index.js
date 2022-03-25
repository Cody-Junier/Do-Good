import React, { Component } from 'react';
import logo from '../../../src/images/logo.svg';

const Navbar = () => {
    return (
      <nav className="nav-bar">
      <img src={logo} className="app-logo"/>
      <ul className="nav-list">
          <li className='nav-ul'><a href="/" >Home</a></li>
          <li className='nav-ul'><a href="/login" >Log In</a></li>
          <li className='nav-ul'><a href='/add'>Suggest a Charity</a></li>
      </ul>
   </nav>
    )
  }
  export default Navbar