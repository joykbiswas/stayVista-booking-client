import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Shared/Loader";

const HostRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  console.log(isLoading);
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (role === "host") return children;
  return <Navigate to="/dashboard"></Navigate>;
};

export default HostRoute;
