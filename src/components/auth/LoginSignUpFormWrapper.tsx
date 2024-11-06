import React, { ReactNode } from "react";

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
      <div className="font-main w-full p-6 sm:max-w-md sm:p-8">
        <div className="grid items-center justify-center gap-5">
          <div className="flex w-full justify-center"></div>
          <div className="text-center">
            <h1 className="pb-1 text-[28px] font-semibold leading-8 text-black-100">
              {title}
            </h1>
            <p className="text-base text-grey-200">{subTitle}</p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default LoginSignUpFormWrapper;
