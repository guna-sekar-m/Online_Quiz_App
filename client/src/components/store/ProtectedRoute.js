'use client'
import { useRouter } from "next/navigation";
import useAuthStore from "./useAuthStore";
const ProtectedRoute = ({ children, allowedRoles }) => {

    const router = useRouter();
    const {isAuthenticated,decodeToken} = useAuthStore();
    const userRole = decodeToken() ? decodeToken().Role : null;
    if (!isAuthenticated) {
      typeof location !== 'undefined' ?router.push('/'):null;
      return null;
    }
  
    if (!allowedRoles.includes(userRole)) {
      typeof location !== 'undefined' ?router.push('/'):null;
      return null;
    }
  
    return children;
  };
  
  export default ProtectedRoute;