import { Link, useNavigate } from "react-router-dom"
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { loginSchema } from "./loginSchema.js";
import {zodResolver} from "@hookform/resolvers/zod";
import { InputPassword } from "../InputPassword";
import style from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";


export const LoginForm = ()=>{
    const { loginRequest } = useContext(UserContext);

    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver: zodResolver(loginSchema)
    });

    const[loading, setLoading] = useState(false);
    


    const submit = (formData)=>{
        loginRequest(formData, setLoading)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)} className="form">
                <h1 className="title1 grey0 text">Login</h1>
                <Input placeholder="Digite seu email" disabled={loading} label="Email" type="email" {...register("email")} error={errors.email} />
                <InputPassword  placeholder="Digite sua senha" disabled={loading} label="Senha"  {...register("password")} error={errors.password}/>
                <div className={style.buttonsDiv}>
                    <button disabled={loading} className="title2 grey0 button full color-primary" type="submit">{loading ? "Entrando..." : "Entrar"}</button>
                    <p className="headline regular grey1">Ainda não tem conta ?</p>
                    <Link disabled={loading} className="title2 grey0 button full color-grey-1 " to="/register" >Cadastre-se</Link>
                </div>
            </form>
        </div>
       
    )
}