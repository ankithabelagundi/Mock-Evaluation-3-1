import { Navigate } from "react-router-dom";


function ProtectedRoute({childern}){
    const isAuth= localStorage.getItem("isAuth")==="true";
    if(isAuth){
        return <Navigate to="/login"/>;
    }
    return childern;
}
export default ProtectedRoute;