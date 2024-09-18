import { Link } from "react-router-dom";
import { logo1x } from "../assets";
import { navLinks } from "../utils/constants";
import MobileNavbar from "./MobileNavbar";
import Button from "./ui/Button";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

type Props = {};

const Navbar = (props: Props) => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { isAuthenticated, logout } = userContext;
  return (
    <nav className="border-b border-grey-100 px-4 py-[18px] font-main md:px-8 lg:px-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 pr-5">
            <img src={logo1x} alt="My Image" />
            <p className="text-base font-semibold">Company Name</p>
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
            <div className="hidden space-x-2 md:flex">
              <Button
                variant="secondary"
                size="small"
                to="/login"
                buttonText="Log out"
                onClick={logout}
              />
              <Button
                variant="primary"
                size="small"
                to="dashboard"
                buttonText="Go to Dashboard"
              />
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
