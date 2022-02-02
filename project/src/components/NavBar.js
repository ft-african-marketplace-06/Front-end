import React from 'react';
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 

import Login from './Login.js';

const NavBar = () => {
    return(
        <div className='NavBar'>
            <Router>
                <Link to="/login">Login</Link>
                <Route exact path= '/login' component={Login}/>      
                <Link to='/'>Home</Link>
            </Router>
            <button>Search</button>
        </div>
    )
}

export default NavBar;