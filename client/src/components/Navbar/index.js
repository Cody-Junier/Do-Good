import React from 'react'
import logo from '../../../src/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
// import { AUTH_TOKEN } from '../constants';

// const Navbar = () => {
//     const navigate = useNavigate();
//   const authToken = localStorage.getItem(AUTH_TOKEN);
//   return ( <div className="">
//   <div className="">
//     <Link to="/" className="">
//       <div className="">Hacker News</div>
//     </Link>           
//     <Link to="/" className="">
//       new
//     </Link>
//     <div className="">|</div>
//     <Link
//       to="/search"
//       className=""
//     >
//       search
//     </Link>
//     {authToken && (
//       <div className="">
//         <div className="">|</div>
//         <Link
//           to="/create"
//           className=""
//         >
//           submit
//         </Link>
//       </div>
//     )}
//   </div>
//   <div className="">
//     {authToken ? (
//       <div
//         className=""
//         onClick={() => {
//           localStorage.removeItem(AUTH_TOKEN);
//           navigate(`/`);
//         }}
//       >
//         logout
//       </div>
//     ) : (
//       <Link
//         to="/login"
//         className=""
//       >
//         login
//       </Link>
//     )}
//   </div>
// </div>
// );
// };


const Navbar = () => {
    <nav className="Nav-bar">
    <img src={logo} className="App-logo"/>
    <ul className="NavList"> 
        <li><a href="" >Home</a></li>
        <li><a href="" >Log In</a></li>
    </ul>
 </nav>
}

export default Navbar