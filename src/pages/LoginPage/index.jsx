import { LoginForm } from "../../components/Forms/LoginForm";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss"

export const LoginPage = ({setUser})=>{
    return(
        <div className="formDiv">
            <div className="container small">
                <div className={style.header}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <LoginForm setUser={setUser}/>
            </div>
        </div>
    )
}