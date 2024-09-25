import React, { ReactNode, useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Outlet, redirect } from "react-router-dom";

const ProtectedLayout: React.FC = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { isAuthenticated } = userContext;

  if (!isAuthenticated) {
    redirect("/login");
    return;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
