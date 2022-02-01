import React from 'react';
import { Route } from "react-router-dom";

import Login from './Login.js'

const NavBar = () => {
    return(
        <div className='NavBar'>
            <Login>Login</Login>
            <button>Search</button>
        </div>
    )
}

export default NavBar;