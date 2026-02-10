const MovesCount = ({ moves }) => {
  return (
    <div className="absolute top-6 left-6 px-6 py-4 text-white bg-[#d1105a] rounded-lg shadow-[0px_0px_10px_#ffffff]">
      <p className="text-sm opacity-70">Moves</p>
      <p className="text-2xl font-bold text-center">{moves}</p>
    </div>
  );
};

export default MovesCount;
