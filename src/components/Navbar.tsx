import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../provider/AuthContext";
import { navLinks } from "../utils/constants";
import MobileNavbar from "./MobileNavbar";
import Button from "./ui/Button";
import { cartIcon, logo, searchIcon } from "../assets";
import { accountIcon } from "../assets";
import DropDown from "./ui/DropDown";

type Props = {};

const Navbar = (props: Props) => {
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
      onclick: () => {
        logout();
      },
    },
  ];

  const userContext = useContext(AuthContext);
  if (!userContext) {
    throw new Error("somthing went wrong");
  }
  const { isAuthenticated, logout } = userContext;

  return (
    <nav className="border-b border-grey-100">
      <div className="container flex justify-between py-[18px]">
        <div className="flex items-center gap-4">
          <MobileNavbar />
          <div className="max-w-[160px]">
            <img src={logo} alt="My Image" className="object-contain" />
          </div>
          {/* Hide nav links on tablet and smaller devices */}
          <ul className="hidden items-center gap-3 md:flex">
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

        <div className="flex items-center justify-between space-x-4">
          <button>
            <img src={searchIcon} alt="Search" />
          </button>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/orders" className="flex items-center">
                <button>
                  <img src={cartIcon} alt="Cart" />
                </button>
              </Link>

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
                to="/signup"
                buttonText="Sign up"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
