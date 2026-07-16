import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ isClosed }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

ProtectedRoute.defaultProps = {
  isClosed: false,
};

ProtectedRoute.propTypes = {
  isClosed: PropTypes.bool,
};

export default ProtectedRoute;
