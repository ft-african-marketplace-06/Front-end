import React, { useState } from 'react'
// import axios from 'axios'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from './utils/axiosWithAuth'

const Login = () => {

  const [credentials, setCredentials] = useState({usename:'', password:''})
  const handlePush = useHistory()

const handleChange =(e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}
console.log(credentials)
const handleSubmit = (e) => {
    e.preventDefault()
   axiosWithAuth()
   .post('http://localhost:3000/api/auth/login', credentials)
   .then(resp=> {
       console.log(resp.data)
      localStorage.setItem('token')
       
   })
}
    return (
        <div>
            <div className='container'>

            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="userName"
                    placeholder='Username'
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    placeholder='Password'
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            </div>

        </div>
    )
}
export default Login;