import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Login from "./Login.js";
const NavBar = () => {
 const { push } = useHistory();
 const handleClick = (e) => {
  e.preventDefault();
  push("/");
 };
 return (
  <div className='NavBar'>
   <Router>
    <Link className='link' to='/login'>
     Login
    </Link>
    <Route exact path='/login' component={Login} />
    <Link onClick={handleClick} className='link' to='/'>
     Home
    </Link>
   </Router>

   <Link className='link' to='/shop'>
    Shop
   </Link>
   <Link className='link' to='/account'>
    Account
   </Link>

   <Link className='link' to='/register'>
    Register
   </Link>
   <button>Search</button>
  </div>
 );
};

export default NavBar;
