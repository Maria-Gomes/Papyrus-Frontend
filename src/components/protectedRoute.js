import { BrowserRouter as Router, Navigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  console.log(user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
