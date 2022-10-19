import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
