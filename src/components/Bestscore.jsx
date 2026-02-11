import { useEffect, useState } from "react";

const Bestscore = () => {
  const [bestScore, setBestScore] = useState(null);

  useEffect(() => {
    const storedScore = localStorage.getItem("bestScore");
    if (storedScore !== null) {
      setBestScore(Number(storedScore));
    }
  }, []);

  return (
    <div className=" px-4 py-2 my-2 text-white bg-[#d1105a] rounded-lg shadow-[0px_0px_10px_#ffffff]">
      <p className="text-sm opacity-70">Best Score</p>
      <p className="text-2xl font-bold text-center">
        {bestScore !== null ? bestScore : "--"}
      </p>
    </div>
  );
};

export default Bestscore;
