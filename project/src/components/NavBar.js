import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Login from "./Login.js";
const NavBar = () => {
 return (
  <div className='NavBar'>
   <Router>
    <Link to='/login'>Login</Link>
    <Route exact path='/login' component={Login} />
    <Link to='/'>Home</Link>
   </Router>

   <Link to='/shop'>Shop</Link>
   <Link to='/account'>Account</Link>

   <Link to='/register'>Register</Link>
   <button>Search</button>
  </div>
 );
};

export default NavBar;
