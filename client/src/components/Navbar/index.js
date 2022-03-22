import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems" class="bg-gray-400 items-center justify-between flex-wrap ">
               
               <ul>
                   <li className="ml-6"><a href="" class="text-stone-600 hover:text-stone-900">Home</a></li>
                   <li className="ml-6"><a href="" class="text-stone-600 hover:text-stone-900">Log In</a></li>
               </ul>
            
            
            </nav>
        )
    }
}

export default Navbar;