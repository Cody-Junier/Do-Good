import React from 'react'
import logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="nav-bar">
    <img src={logo} className="app-logo"/>
    <ul className="nav-list"> 
        <li><a href="/" >Home</a></li>
        <li><a href="/login" >Get Started</a></li>
        <li><a href='/add'> Suggest a Charity</a></li>
    </ul>
 </nav>
  )}
// class Navbar extends Component {
//     render() {
//         return(
//             <nav className="NavbarItems">
//                <img src="././logo.svg" alt="do good logo"></img>
//                <ul>
//                    <li><a href="/">Home</a></li>
//                    <li><a href="/login" >Log In</a></li>
//                </ul>
            
            
//             </nav>
//         )
//     }
// }

export default Navbar