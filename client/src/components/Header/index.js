import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <header >

      <Link to="/">
        <h1>D0-Good</h1>
      </Link>


      <nav className="text-center">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

    </header>
  );
};

export default Header;
