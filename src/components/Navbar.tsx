import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../provider/AuthContext";
import { navLinks } from "../utils/constants";
import MobileNavbar from "./MobileNavbar";
import Button from "./ui/Button";
import { logo } from "../assets";
import { accountIcon } from "../assets";
import DropDown from "./ui/DropDown";

type Props = {};

const Navbar = (props: Props) => {
  const userContext = useContext(AuthContext);
  const action = [
    {
      label: "My profile",
      link: "/profile",
    },
    {
      label: "My Orders",
      link: "/orders",
    },
    {
      label: "Logout",
      link: () => {
        logout;
      },
    },
  ];
  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { isAuthenticated, logout } = userContext;
  return (
    <nav className="border-b border-grey-100">
      <div className="container flex justify-between py-[18px]">
        <div className="flex items-center space-x-3">
          <div className=" ">
            <img src={logo} alt="My Image" />
          </div>
          {/* Hide nav links on tablet and smaller devices */}
          <ul className="hidden items-center space-x-3 md:flex">
            {navLinks.map((link) => (
              <li
                className="text-base font-normal text-black-100"
                key={link.id}
              >
                <Link to={link.path}> {link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <div className="relative hidden space-x-2 md:flex">
              <DropDown actions={action} imgSrc={accountIcon} />
            </div>
          ) : (
            <div className="hidden space-x-2 md:flex">
              <Button
                variant="secondary"
                size="small"
                to="/login"
                buttonText="Log in"
              />
              <Button
                variant="primary"
                size="small"
                to="signup"
                buttonText="Sign up"
              />
            </div>
          )}

          {/* Show hamburger on medium and smaller devices */}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
