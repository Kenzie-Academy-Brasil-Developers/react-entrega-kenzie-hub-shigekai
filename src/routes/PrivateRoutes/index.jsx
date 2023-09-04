
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export const PrivateRoutes = ()=>{
    const {user} = useContext(UserContext);
    

    return user ? <div> <Outlet/> </div>: <Navigate to="/"/>
        
}