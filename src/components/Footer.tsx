import { footerItems } from "../utils/constants";
import { githubIcon, instaIcon, logo, twitterIcon } from "../assets";
import SocialIcon from "./ui/SocialIcon";
import { Link } from "react-router-dom";

const icons = [
  {
    id: 1,
    icon: instaIcon,
    url: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: githubIcon,
    url: "https://www.github.com/",
  },
  {
    id: 3,
    icon: twitterIcon,
    url: "https://x.com/",
  },
];

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-20 bg-primary-200">
      <div className="container py-12">
        <div className="flex flex-wrap justify-start gap-20 border-b border-black-700 border-opacity-10 pb-12 md:justify-between">
          <div className="w-full space-y-4 md:w-1/5">
            <img src={logo} alt="" />
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-3">
              {icons.map((item) => (
                <SocialIcon
                  activeIcon={item.icon}
                  key={item.id}
                  link={item.url}
                />
              ))}
            </div>
          </div>
          {footerItems.map((items) => (
            <div key={items.id}>
              <h3 className="pb-6 font-satoshiMedium leading-5 tracking-[3px]">
                {items.title.toUpperCase()}
              </h3>
              <ul>
                {items.links.map((link) => (
                  <Link
                    to="/"
                    key={link.id}
                    className="block pb-3 hover:text-black-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="pt-6 text-center text-black-700 opacity-60 md:text-start">
          Shop.co &copy; 2000-{date.getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
