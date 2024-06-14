import "./css/headerItem.css";
const HeaderItem = ({ name, link }) => {
  return (
    <div className="headerItem">
      <a href={link}>{name}</a>
      <span className="underBar"></span>
    </div> 
  );
};
export default HeaderItem;
