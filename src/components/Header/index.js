import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import * as actions from "store/modules/auth/actions";
import { Nav } from "./styled";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = async () => {
    dispatch(actions.logoutRequest({ navigate }));
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
        <>
          <Link to="/student">
            <FaUserAlt size={24}></FaUserAlt>
          </Link>
          <Link onClick={handleLogout}>
            <FaSignOutAlt size={24}></FaSignOutAlt>
          </Link>
        </>
      )}
    </Nav>
  );
};

export default Header;
