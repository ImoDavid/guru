import { Navigate, Outlet,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SecureRoutes = () => {
  const { isActive, jwt } = useSelector((state) => state.user);
  const location = useLocation();

  return isActive && jwt? <Outlet /> : <Navigate to="/plans" state={{ from: location }} replace />;
};

export default SecureRoutes;
