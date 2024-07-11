import pageLogo from "../../assets/pageLogo.png";
import { Link } from "react-router-dom";

const Logo = ()=>{
  return (
    <Link to={"/"} className="logo" >
      <img src={pageLogo} alt="logo" />
    </Link>
  )
}
export default Logo;