import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ isClosed }) => {
  const isLoggedIn = false;

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
