import React, { Component, useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Context } from "../Context";

const Login = () => {
  let navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState({});
  const [loginPassword, setLoginPassword] = useState({});
  const { user, setUser } = useContext(Context);

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
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

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
