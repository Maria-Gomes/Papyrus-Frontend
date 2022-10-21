import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Context } from "../Context";
import CollectionPreview from "./collectionPreview";
import { useCookies } from "react-cookie";

const Home = () => {
  let navigate = useNavigate();

  const { user, setUser } = useContext(Context);
  const [collectionData, setCollections] = useState([0]);
  const [cookies, setCookie] = useCookies(["connect.sid"]);
  const collections = collectionData.map((collection) => {
    return (
      <CollectionPreview
        collection={collection}
        key={collection._id}
      ></CollectionPreview>
    );
  });

  const getCollections = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/collections",
    })
      .then((res) => {
        setCollections(res.data.collections);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getCollections(), []);

  const logout = () => {
    axios({
      method: "DELETE",
      withCredentials: true,
      url: "http://localhost:3001/users/logout",
    })
      .then((res) => {
        localStorage.removeItem("user");
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
      <p>Email: {user.email}</p>
      <h2>Collections</h2>
      {collections}
      <button className="btn btn-outline-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
