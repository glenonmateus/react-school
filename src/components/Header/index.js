import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";
import { Nav } from "./styled";

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24}></FaHome>
      </Link>
      <Link to="/register">
        <FaUserAlt size={24}></FaUserAlt>
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24}></FaSignInAlt>
      </Link>
    </Nav>
  );
};

export default Header;
