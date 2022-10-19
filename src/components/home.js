import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Context } from "../Context";

const Home = () => {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const { user, setUser } = useContext(Context);

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
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <h1>Home</h1>
      <p>Hello {data.username}</p>
      <p>Email: {user.email}</p>
      <button className="btn btn-outline-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
