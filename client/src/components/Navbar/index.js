import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
               <img src="././logo.svg" alt="do good logo"></img>
               <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/login" >Log In</a></li>
                   <li><a href='/add'> Suggest a Charity</a></li>
               </ul>
            
            
            </nav>
        )
    }
}

export default Navbar;