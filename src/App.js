import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import ProtectedRoute from "./components/protectedRoute";
import { Context, ContextProvider } from "./Context";

const App = () => {
  const { user, setUser } = useContext(Context);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
