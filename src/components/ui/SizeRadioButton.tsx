type Props = {
  text: string;
};

const SizeRadioButton: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <input type="radio" name="colors" className="hidden after:content-['']" />
      <label className="hover:bg-black-700 relative block cursor-pointer rounded-full bg-primary-300 px-5 py-[10px] hover:text-white md:px-6 md:py-3">
        {text}
      </label>
    </div>
  );
};

export default SizeRadioButton;
