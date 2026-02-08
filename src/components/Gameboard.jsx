import { Cat, Dog, Grape, Heart } from 'lucide-react'
import Card from './Card'


const Gameboard = () => {
  const basecards=[Dog,Cat,Grape,Heart];
  const paircards= [...basecards, ...basecards]

  const cards= paircards.map((Icon,index)=>({
    id:index + 1,
    value:Icon,
    isFlipped: false,
    isMatched: false,
  }))
  .sort(()=>
  Math.random()-0.5) ;
  return (
    <div className='grid grid-cols-4 gap-4'>
       {cards.map((card)=>(
        <Card key={card.id} card={card}/>
       ))}
    </div>
  
  )
}

export default Gameboard
