import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Register() {
  const [regEmail, setRegEmail] = useState({});
  const [regPassword, setRegPassword] = useState({});
  const [regUsername, setRegUsername] = useState({});

  const register = () => {
    axios({
      method: "POST",
      data: {
        email: regEmail,
        username: regUsername,
        password: regPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/users/register",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Register</h3>
      <div>
        <fieldset>
          <label className="m-3">Email ID</label>
          <input
            placeholder="abc@example.com"
            required
            onChange={(e) => setRegEmail(e.target.value)}
          ></input>
          <br></br>
          <label className="m-3">Username</label>
          <input
            required
            onChange={(e) => setRegUsername(e.target.value)}
          ></input>
          <br></br>
          <label className="m-3">Password</label>
          <input
            required
            onChange={(e) => setRegPassword(e.target.value)}
          ></input>
          <br></br>
          <button className="btn btn-secondary btn-sm m-3" type="reset">
            Reset
          </button>
          <button onClick={register} className="btn btn-primary btn-sm">
            Submit
          </button>
        </fieldset>
      </div>
      <Link to={"/"}>Back to Login</Link>
    </div>
  );
}

export default Register;
