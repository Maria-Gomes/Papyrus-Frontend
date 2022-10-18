import React, { Component, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState({});
  const [loginPassword, setLoginPassword] = useState({});
  const [user, setUser] = useState({});

  const login = () => {
    axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/users/login",
    })
      .then((res) => {
        setUser({ email: loginEmail, password: loginPassword });
      })
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Login</h3>
      <div>
        <fieldset>
          <label className="m-3">Email ID</label>
          <input
            placeholder="abc@example.com"
            required
            onChange={(e) => setLoginEmail(e.target.value)}
          ></input>
          <br></br>
          <label className="m-3">Password</label>
          <input
            required
            onChange={(e) => setLoginPassword(e.target.value)}
          ></input>
          <br></br>
          <button className="btn btn-secondary btn-sm m-3" type="reset">
            Reset
          </button>
          <button onClick={login} className="btn btn-primary btn-sm">
            Submit
          </button>
        </fieldset>
      </div>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Login;
