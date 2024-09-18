import React, { createContext, useState, ReactNode, Children } from "react";
import { removeToken } from "../utils/token.utils";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  setCredentials: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const setCredentials = (user: User) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    removeToken();
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, setCredentials, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
