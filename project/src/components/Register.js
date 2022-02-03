import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = () => {

    const [credentials, setCredentials] = useState({ username:'', password:'', is_owner: false });
    const handlePush = useHistory();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://build-week-african-marketplace.herokuapp.com/api/auth/register', credentials)
            .then(resp=> {
                handlePush.push('/login')
                console.log(resp)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleClick = (e) => {
        setCredentials({ ...credentials, is_owner: !credentials.is_owner });
        console.log(credentials.is_owner);
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
                <label>Register as an Owner?</label>
                <input 
                    type="checkbox"
                    name="is_owner"
                    onChange={handleClick}
                />
                <button>Submit</button>
            </form>
            </div>

        </div>
    )
}
export default Register;