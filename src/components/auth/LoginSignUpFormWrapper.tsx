import React, { ReactNode } from "react";
import logo1x from "../../assets/logo-3x.svg";

interface props {
  title: string;
  subTitle: string;
  children: ReactNode;
}

const LoginSignUpFormWrapper: React.FC<props> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <section className="mx-auto flex flex-col items-center justify-center px-4 py-8 lg:py-0">
      <div className="w-full p-6 font-main sm:max-w-md sm:p-8">
        <div className="grid items-center justify-center gap-6">
          <div className="flex w-full justify-center">
            <img src={logo1x} alt="logo" />
          </div>
          <div>
            <h1 className="pb-3 text-[28px] font-semibold leading-8 text-black-100">
              {title}
            </h1>
            <p className="text-base text-grey-200">{subTitle}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-5">{children}</div>
      </div>
    </section>
  );
};

export default LoginSignUpFormWrapper;
