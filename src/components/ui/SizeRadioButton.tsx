type Props = {
  size: "small" | "medium" | "large" | "X-large";
  isSelected: boolean;
  sizeChanged: (size: string) => void;
  index: number;
};

const SizeRadioButton: React.FC<Props> = ({
  size,
  isSelected,
  sizeChanged,
  index,
}) => {
  return (
    <div className="relative">
      <label
        className={`cursor-pointer rounded-full px-5 py-[10px] hover:bg-black-700 hover:text-white md:px-6 md:py-3 ${isSelected ? "bg-black-700 text-white" : "bg-primary-300 text-black-700"}`}
        htmlFor={`size-${index}`}
      >
        {size}
      </label>
      <input
        type="radio"
        id={`size-${index}`}
        name="size"
        className="absolute h-0 w-0 opacity-0"
        onChange={() => {
          sizeChanged(size);
        }}
      />{" "}
    </div>
  );
};

export default SizeRadioButton;
