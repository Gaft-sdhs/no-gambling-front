const SnailRace = ({ snailPng, snailIndex, position, speed, top }) => {
  return (
    <div
      className="snail"
      style={{
        left: `${position}%`,
        transition: `left ${speed}s linear`,
        top: `${top}%`,
      }}
    >
      <img src={snailPng} alt={`snail-${snailIndex}`} />
    </div>
  );
};

export default SnailRace;
