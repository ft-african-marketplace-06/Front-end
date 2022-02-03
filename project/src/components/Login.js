import React, { useState } from 'react'
// import axios from 'axios'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from './utils/axiosWithAuth'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const history = useHistory()

  const handleChange = (e) => {
      console.log(credentials)
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post('http://localhost:3000/api/auth/login', credentials)
      .then((resp) => {
        console.log(resp)
        localStorage.setItem('token')
        history.push('/owner')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Login
