import Spinner from "./Spinner";

const Loader: React.FC = () => {
  return (
    <div className="grid h-[100vh] w-full items-center justify-center">
      <Spinner size={50} />
    </div>
  );
};

export default Loader;
