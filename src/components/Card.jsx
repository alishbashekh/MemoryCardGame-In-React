const Card = ({ card, onClick }) => {
  const Icon = card.icon;

  return (
    <div
      onClick={onClick}
      className="card-3d w-24 h-32 sm:w-28 sm:h-40 md:w-32 md:h-44 cursor-pointer"
    >
      <div
        className={`card-inner ${card.isFlipped ? "is-flipped" : ""}`}
      >
        {/* Front side (closed card) */}
        <div className="card-face bg-gradient-to-tl to-[#5a189a] from-[#10002b] rounded-lg flex items-center justify-center shadow-lg shadow-[#5a189a]">
          <span className="text-2xl sm:text-3xl text-[#e7e8ea] select-none">?</span>
        </div>

        {/* Back side (opened card with icon) */}
        <div className="card-face card-back bg-gradient-to-tl to-[#5a189a] from-[#10002b] rounded-lg flex items-center justify-center shadow-lg shadow-[#5a189a]">
          <Icon size={45} className="text-[#e7e8ea]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
