type Props = {
  headingText: string;
};

const Heading: React.FC<Props> = ({ headingText }) => {
  return (
    <h1 className="text-center font-IntegralBold text-3xl md:text-4xl lg:text-5xl">
      {headingText}
    </h1>
  );
};

export default Heading;
