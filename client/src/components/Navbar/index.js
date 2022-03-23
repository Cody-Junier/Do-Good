import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
               <img src="././logo.svg" alt="do good logo"></img>
               <ul>
                   <li><a href="/" class="text-stone-600 hover:text-stone-900">Home</a></li>
                   <li><a href="/" >Log In</a></li>
               </ul>
            
            
            </nav>
        )
    }
}

export default Navbar;