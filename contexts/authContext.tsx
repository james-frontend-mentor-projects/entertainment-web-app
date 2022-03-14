import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  loggedIn: boolean;
  logOut: () => void;
  logIn: () => void;
}

const AuthContext = createContext<Props>({ loggedIn: true, logOut: () => {}, logIn: () => {} });

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  function logOut() {
    setLoggedIn(false);
  }
  function logIn() {
    setLoggedIn(true);
  }

  return <AuthContext.Provider value={{ loggedIn, logOut, logIn }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
