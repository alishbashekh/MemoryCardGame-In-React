import { Volume, Volume2, VolumeX } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import flipcard from '../sounds/flipcard.mp3'
import gamewin from '../sounds/gamewin.mp3'
import matchcard from '../sounds/matchcard.mp3'
import wrongcard from '../sounds/wrongcard.mp3'

import useSound from 'use-sound'

const Sound = ({trigger}) => {
      
    const [soundOn , setSoundOn]=useState(true);

    const [playflip] = useSound(flipcard,{volume:0.5});
    const [playmatch] = useSound(gamewin,{volume:0.5});
    const [playwin] = useSound(matchcard,{volume:0.5});
    const [playwrong] = useSound(wrongcard,{volume:0.5});

   useEffect(() => {
    if (!trigger || !soundOn) return;

    switch (trigger) {
      case "flip":
        playflip();
        break;
      case "match":
        playmatch();
        break;
      case "wrong":
        playwrong();
        break;
      case "win":
        playwin();
        break;
      default:
        break;
    }
  }, [trigger,soundOn, playflip, playmatch, playwrong, playwin]);
  return (
     <div className="absolute top-6 left-6 cursor-pointer">
      <button
        onClick={() => setSoundOn(!soundOn)}
        className="bg-[#d1105a] p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        {soundOn ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </button>
    </div>
  );
};

export default Sound
