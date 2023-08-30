import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { useState } from "react"

export const RoutesMain = ({toast})=>{
    const [user, setUser] = useState(null);
    return(
        <Routes>
            <Route path="/dash" element={<Dashboard user={user} setUser={setUser}/>}/>
            <Route path="/" element={<LoginPage setUser={setUser}/>}/>
            <Route path="/register" element={<RegisterPage toast={toast}/>}/>
        </Routes>
    )
}