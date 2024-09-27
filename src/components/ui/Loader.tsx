import Spinner from "./Spinner";

type Props = {
  size?: number;
};

const Loader: React.FC<Props> = ({ size }) => {
  return (
    <div className="grid h-[100vh] w-full items-center justify-center">
      <Spinner size={50} />
    </div>
  );
};

export default Loader;
