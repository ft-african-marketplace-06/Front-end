import React, { useState } from 'react'

const Login = () => {

  const [credentials, setCredentials] = useState({usename:'', password:''})

const handleChange =(e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}
const handleSubmit = (e) => {
    e.preventDefault()
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