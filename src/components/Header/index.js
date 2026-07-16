import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import * as actions from "store/modules/auth/actions";
import { Nav } from "./styled";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(actions.logoutRequest());
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24}></FaHome>
      </Link>
      {!isLoggedIn ? (
        <>
          <Link to="/register">
            <FaUserAlt size={24}></FaUserAlt>
          </Link>
          <Link to="/login">
            <FaSignInAlt size={24}></FaSignInAlt>
          </Link>
        </>
      ) : (
        <Link to="/logout" onClick={handleLogout}>
          <FaSignOutAlt size={24}></FaSignOutAlt>
        </Link>
      )}
    </Nav>
  );
};

export default Header;
