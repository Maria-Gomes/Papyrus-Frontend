import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Home = () => {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const getData = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/home",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getData(), []);

  const logout = () => {
    axios({
      method: "DELETE",
      withCredentials: true,
      url: "http://localhost:3001/users/logout",
    })
      .then((res) => {
        setUser(null);
        console.log(user);
      })
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Hello {data.username}</p>
      <p>Email: {user.username}</p>
      <button className="btn btn-outline-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
