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
    <section className="">
      <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full sm:max-w-md">
          <div className="p-6 sm:p-8 font-main">
            <div className="grid justify-center items-center"> 
            <div className="w-full flex justify-center gap-6">
            <img src={logo1x} alt="" className="" />
            </div>
            <div>
            <h1 className='font-semibold text-primary text-[28px] leading-8 pb-3'>{title}</h1>
            <p className="text-base text-grey">{subTitle}</p>
            </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignUpFormWrapper;
