import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
