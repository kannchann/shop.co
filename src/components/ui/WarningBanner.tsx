type Props = {
  warningText: string;
};

const WarningBanner: React.FC<Props> = ({ warningText }) => {
  return (
    <div className="mt-4 grid w-full justify-center rounded-sm border-l-8 border-l-primary-700 bg-[#d6e6ff] p-2 text-center text-sm shadow-sm">
      <p className="font-bold">Warning!!</p>
      {warningText}
    </div>
  );
};

export default WarningBanner;
