import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const isLoggedIn = localStorage.getItem('token')
  return (
    <div className="NavBar">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/account'>Account</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <button>Search</button>
    </div>
  )
}

export default NavBar
