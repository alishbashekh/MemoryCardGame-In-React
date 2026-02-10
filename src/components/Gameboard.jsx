import {Cat,Dog,Grape,Heart,Cherry,Star} from 'lucide-react';
import Card from './Card';
import LevelBtn from './LevelBtn';
import ResetBtn from './ResetBtn';
import { useState, useEffect } from 'react';
import MovesCount from './MovesCount';
import Bestscore from './Bestscore';

const ICONS = [Cat,Dog,Grape,Heart,Cherry,Star];
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
 
  const [level, setLevel] = useState('easy');
  const [gameCards, setGameCards] = useState(createCards(LEVELS.easy));
  const [moves, setmoves]=useState(0);

  const handleCardFlip = (id) => {
    setGameCards((prevCards) => {
      const flippedCards = prevCards.filter(
        (card) => card.isFlipped && !card.isMatched
      );
      if (flippedCards.length === 2) return prevCards;
      return prevCards.map((card) =>
        card.id === id && !card.isMatched
          ? { ...card, isFlipped: true }
          : card
      );
    });
  };
  useEffect(() => {
    const flippedCards = gameCards.filter(
      (card) => card.isFlipped && !card.isMatched
    );

    if (flippedCards.length === 2) {
      setmoves(prev=>prev+1)
      const [first, second] = flippedCards;

      if (first.icon === second.icon) {
        setGameCards((prevCards) =>
          prevCards.map((card) =>
            card.id === first.id || card.id === second.id
              ? { ...card, isMatched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setGameCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }
    }
  }, [gameCards]);
  useEffect(() => {
  const allMatched = gameCards.length > 0 &&
    gameCards.every(card => card.isMatched);

  if (allMatched) {
    const bestScore = localStorage.getItem("bestScore");

    if (!bestScore || moves < Number(bestScore)) {
      localStorage.setItem("bestScore", moves);
    }
  }
}, [gameCards, moves]);
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
    <Bestscore />
    <MovesCount moves={moves}/>
      <div className="absolute top-20">
        <LevelBtn onLevelChange={changeLevel} />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {gameCards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardFlip(card.id)}
          />
        ))}
      </div>

      <div>
        <ResetBtn onReset={resetGame} />
      </div>
    </>
  );
};

export default Gameboard;
