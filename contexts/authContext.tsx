import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ loggedIn: true });

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) return <></>;

  return <AuthContext.Provider value={{ loggedIn }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
