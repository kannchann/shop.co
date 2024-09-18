import React, { createContext, useState, ReactNode, Children } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  // login: (userData: User) => void;
  // logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({
    name: "kanchan",
    email: "dsadas@dasda.com",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const login = () => {
  //   setIsAuthenticated(true);
  // };

  // const logout = () => {
  //   setIsAuthenticated(false);
  // };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
