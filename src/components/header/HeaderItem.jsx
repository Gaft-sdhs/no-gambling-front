import "./css/headerItem.css";
import { Link } from "react-router-dom";
const HeaderItem = ({ name, link }) => {
  return (
    <li className="headerItem">
      <Link to={link}>{name}</Link>
      <span className="underBar"></span>
    </li>
  );
};
export default HeaderItem;
