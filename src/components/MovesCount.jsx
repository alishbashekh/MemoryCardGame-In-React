const MovesCount = ({ moves }) => {
  return (
    <div className="px-4 py-2 my-2 md:my-0 text-white bg-[#d1105a] rounded-lg shadow-[0px_0px_10px_#ffffff]">
      <p className="text-sm opacity-70">Moves</p>
      <p className="text-2xl font-bold text-center">{moves}</p>
    </div>
  );
};

export default MovesCount;
