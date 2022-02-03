import React from 'react'
import { Link, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Login from './Login.js'

const NavBar = () => {
  const isLoggedIn = localStorage.getItem('token')
  return (
    <div className="NavBar">
      <Router>
        <Link to="/login">Login</Link>
        <Route exact path="/login" component={Login} />
        {isLoggedIn && <p>Welcome {localStorage.getItem('username')}</p>}
        <Link to="/">Home</Link>
      </Router>
      <button>Search</button>
    </div>
  )
}

export default NavBar
