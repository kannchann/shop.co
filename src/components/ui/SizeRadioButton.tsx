type Props = {
  text: string;
};

const SizeRadioButton: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <input
        type="radio"
        name="colors"
        className="absolute h-0 w-0 opacity-0"
      />
      <label
        className="relative block cursor-pointer rounded-full bg-primary-300 px-5 py-[10px] hover:bg-black-700 hover:text-white md:px-6 md:py-3"
        htmlFor="colors"
      >
        <span> {text}</span>
      </label>
    </div>
  );
};

export default SizeRadioButton;
