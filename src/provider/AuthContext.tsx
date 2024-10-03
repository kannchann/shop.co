import React, { createContext, useState, ReactNode, Children } from "react";
import { removeToken } from "../utils/token.utils";
import { Navigate, useNavigate } from "react-router-dom";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  setCredentials: (userData: User) => void;
  logout: () => void;
  isLoading: (state: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);

  const setCredentials = (user: User) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const isLoading = (state: boolean) => {
    setIsAuthenticating(state);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    removeToken();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setCredentials,
        logout,
        isAuthenticating,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
