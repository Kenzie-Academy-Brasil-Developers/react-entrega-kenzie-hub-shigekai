import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";
import {toast} from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = ()=>{
    const {logout} = useContext(UserContext);



    return(
        <div className={style.header}>
            <div className="container large">
                <img src={Logo} alt="logo" />
                <button onClick={logout} className="button small color-grey-3 headline bold grey0">Sair</button>
            </div>
        </div>
    )
}