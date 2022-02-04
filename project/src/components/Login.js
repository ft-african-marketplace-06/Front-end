import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {


    const [credentials, setCredentials] = useState({username:'', password:''})
    const handlePush = useHistory();

    const handleChange =(e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://build-week-african-marketplace.herokuapp.com/api/auth/login', credentials)
            .then(resp=> {
                localStorage.setItem('token', resp.data.token);
                // will not work until back end is updated
                localStorage.setItem('user_id', resp.data.user_id);
                handlePush.push('/owner')
                console.log(resp)
            })
            .catch(err => {
                console.log(err);
            })   
    }
    return (
        <div>
            <div className='container'>

            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
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

