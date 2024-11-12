import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../provider/AuthContext";
import { navLinks } from "../utils/constants";
import MobileNavbar from "./MobileNavbar";
import Button from "./ui/Button";
import { cartIcon, logo, searchIcon } from "../assets";
import { accountIcon } from "../assets";
import DropDown from "./ui/DropDown";
import Search from "./ui/Search";
import { useCart } from "../provider/CartContext";

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

  const { cartItemCount } = useCart();

  return (
    <nav className="">
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-4 md:gap-5 lg:gap-10">
          <MobileNavbar />
          <div className="h-auto max-w-[160px]">
            <Link to="/">
              <img src={logo} alt="My Image" className="object-contain" />
            </Link>
          </div>
          {/* Hide nav links on tablet and smaller devices */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li
                className="text-base font-normal text-black-100 hover:font-extrabold"
                key={link.id}
              >
                <Link to={link.path}> {link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={isAuthenticated ? "md:flex-grow" : ""}>
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Search />
              <Link to="/orders" className="flex items-center">
                <button className="relative">
                  <img src={cartIcon} alt="Cart" className="h-6 w-6" />
                  <div className="absolute -right-2 -top-5 h-6 w-6 rounded-full bg-red-700 font-satoshiMedium text-white">
                    {cartItemCount}
                  </div>
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
