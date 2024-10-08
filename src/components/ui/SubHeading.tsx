import React from "react";

type Props = {
  headingText: string;
};

const SubHeading: React.FC<Props> = ({ headingText }) => {
  return <h3 className="font-satoshiBold text-xl md:text-lg">{headingText}</h3>;
};

export default SubHeading;
