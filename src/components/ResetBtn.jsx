const ResetBtn = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="mt-6 sm:mt-8 text-white bg-[#d1105a] w-28 sm:w-32 py-2 px-4 rounded-xl transition duration-500 hover:shadow-[0px_0px_10px_#ffffff]"
    >
      Reset
    </button>
  );
};

export default ResetBtn;