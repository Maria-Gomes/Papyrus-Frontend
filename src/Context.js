import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </Context.Provider>
  );
};
