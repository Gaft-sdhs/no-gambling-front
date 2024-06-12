import "./css/headerItem.css";
const HeaderItem = ({ name }) => {
  return (
    <div className="headerItem">
      <a href="#none">{name}</a>
      <span className="underBar"></span>
    </div> 
  );
};
export default HeaderItem;
