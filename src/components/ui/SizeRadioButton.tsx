type Props = {
  size: "small" | "medium" | "large" | "X-large";
  isSelected: boolean;
  onChange: (size: string) => void;
};

const SizeRadioButton: React.FC<Props> = ({ size, isSelected, onChange }) => {
  return (
    <div className="relative">
      <input
        type="radio"
        name="size"
        className="absolute h-0 w-0 opacity-0"
        onChange={() => onChange(size)}
      />
      <label
        className={`cursor-pointer rounded-full bg-primary-300 px-5 py-[10px] hover:bg-black-700 hover:text-white md:px-6 md:py-3 ${isSelected ? "active:bg-black-700 active:text-white" : ""}`}
        htmlFor="size"
      >
        {size}
      </label>
    </div>
  );
};

export default SizeRadioButton;
