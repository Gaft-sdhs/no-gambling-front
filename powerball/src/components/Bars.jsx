const Bars = ({ bars }) => {
  return (
    <div className="bars">
      {bars.map((bar, index) => (
        <div className="bar" key={index} style={{ width: `${bar}%` }}></div>
      ))}
    </div>
  );
};

export default Bars;
