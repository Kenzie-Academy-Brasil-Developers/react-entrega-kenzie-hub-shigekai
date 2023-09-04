import { RegisterForm } from "../../components/Forms/RegisterForm";
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";
import style from "./style.module.scss"

export const RegisterPage = ()=>{
    return(
        <div className="formDiv">
            <div className="container small">
                <div className={style.header}>
                    <img src={Logo} alt="logo" />
                    <Link to="/" className="headline bold grey0 button
                     small color-grey-3">Voltar</Link>
                </div>
    
                <RegisterForm/>
            </div>
        </div>
    )
}