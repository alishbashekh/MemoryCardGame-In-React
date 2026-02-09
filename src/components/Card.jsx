const Card = ({ card, onClick }) => {
  const Icon = card.icon;

  return (
    <div
      onClick={onClick}
      className="w-28 h-40 bg-gradient-to-tl to-[#5a189a] from-[#10002b] rounded-lg flex items-center justify-center shadow-lg transition duration-300 shadow-[#5a189a] cursor-pointer transform hover:-translate-y-2"
    >
      {card.isFlipped && <Icon size={45} className="text-[#e7e8ea]" />}
    </div>
  );
};

export default Card;
