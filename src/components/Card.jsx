
const Card = ({card}) => {
  const Icon = card.value;
  return (
    <div className="w-24 h-24 rounded-lg bg-white flex items-center justify-center shadow">
      <Icon size = {40}/>
    </div>
  )
}

export default Card
