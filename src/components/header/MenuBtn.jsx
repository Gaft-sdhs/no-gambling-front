const MenuBtn = ({ Handler }) => {
  return (
    <button
      className="MenuBtn"
      onClick={() => {
        Handler();
      }}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default MenuBtn;
