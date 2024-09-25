type Props = {
  size?: number;
  position?: string;
};

const Spinner: React.FC<Props> = ({ size = 20 }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={`animate-spin rounded-[50%] border-[3px] border-t-[3px] border-grey-100 border-t-primary-700`}
    ></div>
  );
};

export default Spinner;
