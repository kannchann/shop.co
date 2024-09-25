import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate, Outlet, redirect } from "react-router-dom";

const ProtectedLayout: React.FC = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { isAuthenticated } = userContext;

  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}</>;
};

export default ProtectedLayout;
