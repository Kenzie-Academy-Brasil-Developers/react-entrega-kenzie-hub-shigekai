
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { TechProvider } from "../../providers/TechContext";

export const PrivateRoutes = ()=>{
    const {user} = useContext(UserContext);
    

    return user ? <TechProvider> <Outlet/> </TechProvider> : <Navigate to="/"/>
}