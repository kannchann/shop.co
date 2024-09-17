import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
