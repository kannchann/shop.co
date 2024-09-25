import Spinner from "./Spinner";

type Props = {
  size?: number;
};

const Loader: React.FC<Props> = ({ size }) => {
  return (
    <div className="grid h-screen w-full items-center justify-center">
      <Spinner size={100} />
    </div>
  );
};

export default Loader;
