import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import SearchResult from "./SearchResults";

function NavBar() {
  let navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState({});
  const handleSearch = () => {
    console.log("reached handlesearch");
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:3001/search?book_title=${searchQuery}`,
    })
      .then((res) => {
        navigate("/search", { state: { results: res.data } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="NavBar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="p-3"
      >
        <Container>
          <Navbar.Brand href="#home">Papyrus</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="pt-1">
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-white" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  className="text-decoration-none text-white"
                  to="/register"
                >
                  About
                </Link>
              </Nav.Link>
              <div className="form-inline">
                <input
                  placeholder="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
