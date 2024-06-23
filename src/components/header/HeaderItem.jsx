import "./css/headerItem.css";
import { Link } from "react-router-dom";
const HeaderItem = ({ name, link }) => {
  return (
    <div className="headerItem">
      <Link to={link}>{name}</Link>
      <span className="underBar"></span>
    </div>
  );
};
export default HeaderItem;
