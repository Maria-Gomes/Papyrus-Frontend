import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Context } from "../Context";
import CollectionPreview from "./collectionPreview";

const Home = () => {
  let navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [collectionData, setCollections] = useState([]);
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
        if (res.data.error_msg) {
          localStorage.removeItem("isAuthenticated");
          setIsAuthenticated(null);
        } else {
          setCollections(res.data.collections);
        }
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
        localStorage.removeItem("isAuthenticated");
        setIsAuthenticated(null);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Home</h1>
      <h2>Collections</h2>
      {collections}
      <button className="btn btn-outline-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
