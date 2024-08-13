import "./css/headerItem.css";
import { Link } from "react-router-dom";
const HeaderItem = ({ name, action, type }) => {
  if (type === "NONE") {
    return (
      <li className={"headerItem " + type}>
        <a
          onClick={() => {
            action();
          }}
        >
          {name}
        </a>
        <span className="underBar"></span>
      </li>
    );
  }
  return (
    <li className="headerItem">
      <Link to={action}>{name}</Link>
      <span className="underBar"></span>
    </li>
  );
};
export default HeaderItem;
