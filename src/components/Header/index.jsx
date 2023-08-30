import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";
import {toast} from "react-toastify";

export const Header = ({setUser})=>{
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("@token");
        navigate("/");
        setUser(null);
        toast.success("Logout realizado com sucesso", {
            theme: "dark"
        })
    }

    return(
        <div className={style.header}>
            <div className="container large">
                <img src={Logo} alt="logo" />
                <button onClick={logout} className="button small color-grey-3 headline bold grey0">Sair</button>
            </div>
        </div>
    )
}