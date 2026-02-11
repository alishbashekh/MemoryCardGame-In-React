import {Cat,Dog,Grape,Heart,Cherry,Star} from 'lucide-react';
import Card from './Card';
import LevelBtn from './LevelBtn';
import ResetBtn from './ResetBtn';
import { useState, useEffect } from 'react';
import MovesCount from './MovesCount';
import Bestscore from './Bestscore';
import Sound from './Sound';

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
  const [soundTrigger, setSoundTrigger] = useState(null);

  const handleCardFlip = (id) => {
    setSoundTrigger("flip");
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
         setSoundTrigger("match"); 
        setGameCards((prevCards) =>
          prevCards.map((card) =>
            card.id === first.id || card.id === second.id
              ? { ...card, isMatched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
           setSoundTrigger("wrong"); 
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
     setSoundTrigger("win"); 
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
    <Sound trigger={soundTrigger}/>
    <div className="relative w-full max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
      <Bestscore />
      <MovesCount moves={moves} />

      <div className="mt-20 flex justify-center">
        <LevelBtn onLevelChange={changeLevel} />
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
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
