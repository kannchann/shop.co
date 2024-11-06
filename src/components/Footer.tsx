import React from "react";
import { footerItems } from "../utils/constants";
import { githubIcon, instaIcon, logo, twitterIcon } from "../assets";
import SocialIcon from "./ui/SocialIcon";

type Props = {};

const icons = [instaIcon, githubIcon, twitterIcon];

const Footer = (props: Props) => {
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
                <SocialIcon activeIcon={item} key={item} />
              ))}
            </div>
          </div>
          {footerItems.map((items) => (
            <div>
              <h3 className="pb-6 font-satoshiMedium leading-5 tracking-[3px]">
                {items.title.toUpperCase()}
              </h3>
              <ul>
                {items.links.map((link) => (
                  <p className="pb-3">{link.label}</p>
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
