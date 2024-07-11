// 막대 그래프를 렌더링하는 컴포넌트

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