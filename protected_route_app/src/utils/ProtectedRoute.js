import { parse } from "cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const cookies = parse(document.cookie);
  const userCookieValue = cookies.user;
  if (userCookieValue !== "admin") return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
