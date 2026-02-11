import { Cat, Dog, Grape, Heart, Cherry, Star } from "lucide-react";
import Card from "./Card";
import LevelBtn from "./LevelBtn";
import ResetBtn from "./ResetBtn";
import { useState, useEffect } from "react";
import MovesCount from "./MovesCount";
import Bestscore from "./Bestscore";


const ICONS = [Cat, Dog, Grape, Heart, Cherry, Star];
const LEVELS = {
  easy: 4,
  medium: 7,
};

const createCards = (pairs) => {
  const selectedIcons = ICONS.slice(0, pairs);

  return [...selectedIcons, ...selectedIcons]
    .map((icon, index) => ({
      id: index + 1,
      icon,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5);
};

const Gameboard = () => {
  const [level, setLevel] = useState("easy");
  const [gameCards, setGameCards] = useState(createCards(LEVELS.easy));
  const [moves, setmoves] = useState(0);


  const handleCardFlip = (id) => {
  
    setGameCards((prevCards) => {
      const flippedCards = prevCards.filter(
        (card) => card.isFlipped && !card.isMatched,
      );
      if (flippedCards.length === 2) return prevCards;
      return prevCards.map((card) =>
        card.id === id && !card.isMatched ? { ...card, isFlipped: true } : card,
      );
    });
  };
  useEffect(() => {
    const flippedCards = gameCards.filter(
      (card) => card.isFlipped && !card.isMatched,
    );

    if (flippedCards.length === 2) {
      setmoves((prev) => prev + 1);
      const [first, second] = flippedCards;

      if (first.icon === second.icon) {
        
        setGameCards((prevCards) =>
          prevCards.map((card) =>
            card.id === first.id || card.id === second.id
              ? { ...card, isMatched: true }
              : card,
          ),
        );
      } else {
        setTimeout(() => {
         
          setGameCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card,
            ),
          );
        }, 1000);
      }
    }
  }, [gameCards]);

  const resetGame = () => {
    setGameCards(createCards(LEVELS[level]));
    setmoves(0);
  };
  const changeLevel = (newLevel) => {
    setLevel(newLevel);
    setGameCards(createCards(LEVELS[newLevel]));
    setmoves(0);
  };

  return (
    <>
      <div className=" max-w-xl px-4 sm:px-6 py-6 sm:py-8 rounded-xl bg-[#b6b5b55c]">
        <div className=" flex justify-between md:flex-row flex-col">
          <div className="order-2 md:order-1">
            <MovesCount moves={moves} />
          </div>
          <div className="md:order-2 order-3">
            <LevelBtn onLevelChange={changeLevel} />
          </div>
          <div className="md:order-3 order-2">
            <Bestscore />
          </div>
        </div>

        <div className="mt-8 flex gap-2 flex-wrap justify-center ">
          {gameCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={() => handleCardFlip(card.id)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <ResetBtn onReset={resetGame} />
        </div>
      </div>
    </>
  );
};

export default Gameboard;
