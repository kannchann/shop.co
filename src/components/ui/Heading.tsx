type Props = {
  headingText: string;
  position: string;
};

const Heading: React.FC<Props> = ({ headingText, position }) => {
  return (
    <h1
      className={`text-${position} font-IntegralBold text-3xl md:text-4xl lg:text-5xl`}
    >
      {headingText}
    </h1>
  );
};

export default Heading;
