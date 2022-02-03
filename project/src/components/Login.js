import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ usename: "", password: "" });
  const handlePush = useHistory();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/login", credentials)
      .then((resp) => {
        handlePush.push("/owner");
        console.log(resp);
      }, []);
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
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
  );
};
export default Login;
