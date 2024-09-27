import { addIcon, subtractIcon } from "../../assets";

const sizeStyles = {
  small: "px-[13.5px] py-[7.5px] lg:py-3 lg:px-5  ",
  medium: "lg:px-5 lg:py-[14px] px-3 py-4",
};

type Props = {
  stock: number;
  count: number;
  setCount: (count: number) => void;
  size?: "small" | "medium";
};

const QuantityCounter: React.FC<Props> = ({
  stock,
  count,
  setCount,
  size = "medium",
}) => {
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary-300 ${sizeStyles[size]}`}
    >
      <button onClick={handleDecrement}>
        <img
          src={addIcon}
          alt="add"
          className={size == "medium" ? "w-5 lg:w-6" : "w-4 lg:w-5"}
        />
      </button>
      <p className="bg-primary-300 px-7 text-center font-satoshiMedium text-sm md:text-base">
        {count}
      </p>

      <button onClick={handleIncrement}>
        <img
          src={subtractIcon}
          alt="subtract"
          className={size == "medium" ? "w-5 lg:w-6" : "w-4 lg:w-5"}
        />
      </button>
    </div>
  );
};

export default QuantityCounter;
