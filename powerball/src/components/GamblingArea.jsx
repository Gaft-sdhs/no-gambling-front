const GamblingArea = ({ target, values, showResults }) => {
  return (
    <div className="main-content">
      <div className="gambling-area"></div>
      <div className="gambling-list">
        <div className="circle" id="target">{target}</div>
        {values.slice(1).map((value, index) => (
          <div className="circle" key={index} id={`value${index + 1}`}>{showResults ? value : ''}</div>
        ))}
      </div>
    </div>
  );
};

export default GamblingArea;
