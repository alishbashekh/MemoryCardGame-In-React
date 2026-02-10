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
    <div className="absolute top-6 right-6 px-6 py-4 text-white bg-[#d1105a] rounded-lg shadow-[0px_0px_10px_#ffffff]">
      <p className="text-sm opacity-70">Best Score</p>
      <p className="text-2xl font-bold text-center">
        {bestScore !== null ? bestScore : "--"}
      </p>
    </div>
  );
};

export default Bestscore;
