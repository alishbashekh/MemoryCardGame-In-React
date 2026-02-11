const LevelBtn = ({ onLevelChange }) => {
  return (
    <div className="">
        <select
      onChange={(e) => onLevelChange(e.target.value)}
      className=" px-4 py-4 rounded-xl bg-[#d1105a] md:my-0 my-2 w-full cursor-pointer text-white shadow-[0px_0px_10px_#ffffff]"
    >
      <option value="" disabled>
        Select Level
      </option>

      <option value="easy" className="bg-gray-800">
        Easy
      </option>

      <option value="medium" className="bg-gray-800">
        Medium
      </option>

      <option value="hard" className="bg-gray-800">
        Hard
      </option>
    </select>
    </div>
   
  );
};

export default LevelBtn;
