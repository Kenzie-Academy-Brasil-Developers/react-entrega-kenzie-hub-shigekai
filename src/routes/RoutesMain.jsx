import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { PrivateRoutes } from "./PrivateRoutes"

export const RoutesMain = ()=>{
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route element={<PrivateRoutes />}>
                <Route path="/dash" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}