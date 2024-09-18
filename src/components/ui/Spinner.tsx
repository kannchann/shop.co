type Props = {
  size?: number;
};

const Spinner: React.FC<Props> = ({ size = 20 }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={`animate-spin rounded-[50%] border-[5px] border-t-[5px] border-grey-100 border-t-primary-700`}
    ></div>
  );
};

export default Spinner;
