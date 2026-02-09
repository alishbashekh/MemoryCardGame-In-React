import { Cat, Dog, Grape, Heart } from 'lucide-react'
import Card from './Card'

const cards = [
  { 
    icon : Cat,
    isFlipped : false,
    isMatched : false,
  },
   {
    icon : Dog,
    isFlipped : false,
    isMatched : false,
  },
  {
    
    icon : Grape,
    isFlipped : false,
    isMatched : false,
  },
 {
    icon : Heart,
    isFlipped : false,
    isMatched : false,
  },
];
const paircards= [...cards, ...cards].map((card, index)=>({
  ...card,
  id : index + 1,
}))

const Gameboard = () => {
 
  

 
  return (
    <div className='grid grid-cols-4 gap-4'>
       {paircards.map((card, index)=>(
      
        <Card key={card.id} card={card}/>
       ))}
    </div>
  
  )
}

export default Gameboard;



 // const cards= paircards.map((Icon,index)=>({
  //   id:index + 1,
  //   value:Icon,
  //   isFlipped: false,
  //   isMatched: false,
  // }))
  // .sort(()=>
  // Math.random()-0.5) ;