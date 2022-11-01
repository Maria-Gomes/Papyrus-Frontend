import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import SearchResult from "./components/SearchResults";
import ProtectedRoute from "./components/protectedRoute";
import { Context, ContextProvider } from "./Context";
import NavBar from "./components/NavBar";
import BookDetails from "./components/bookDetails";

const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute user={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/search" element={<SearchResult />}></Route>
          <Route path="/book/:key" element={<BookDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
