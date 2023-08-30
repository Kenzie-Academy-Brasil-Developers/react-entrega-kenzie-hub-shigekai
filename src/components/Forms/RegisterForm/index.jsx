import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Select } from "../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { useState } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";


export const RegisterForm = ({toast})=>{
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registerRequest = async (formData)=>{
        try{
            setLoading(true);
            await api.post("/users", formData);
            toast.success("Usuário cadastrado com sucesso",{
                theme: "dark"
            })
            navigate("/");
        } catch (error) {
            const message = error.response.data.message;
            toast.error(message === "Email already exists" ? "Email já existe" : "Erro de servidor",{
                theme: "dark"
            })
        } finally {
            setLoading(false);
        }
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema)
    })

    const submit = (formData)=>{
        registerRequest(formData)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)} className="form">
                <div className="text">
                    <h1 className="title1 grey0">Crie sua conta</h1>
                    <p className="headline grey1 regular">Rápido e grátis, vamos nessa !</p>
                </div>
                <Input disabled={loading}  error={errors.name} {...register("name")}
                 type="text" label="Nome"
                  placeholder="Digite aqui seu nome"/>
                <Input disabled={loading} error={errors.email}
                 {...register("email")} type="email" label="Email"
                  placeholder="Digite aqui seu email"/>
                <InputPassword disabled={loading} error={errors.password} {...register("password")}
                 label="Senha" placeholder="Digite aqui sua senha"/>
                <InputPassword disabled={loading}  error={errors.confirmPassword}
                 label="Confirmar Senha"
                  placeholder="Confirme sua senha"
                  {...register("confirmPassword")} />
                <Input disabled={loading}  error={errors.bio} {...register("bio")} type="text"
                 label="Bio" placeholder="Fale sobre você"/>
                <Input disabled={loading}  error={errors.contact} {...register("contact")}
                 type="text" label="Contato" placeholder="Opção de contato"/>
                <Select disabled={loading} error={errors.course_module} {...register("course_module")}>
                    <option className="headline regular grey0">Primeiro Módulo</option>
                    <option className="headline regular grey1">Segundo Módulo</option>
                    <option className="headline regular grey1">Terceiro Módulo</option>
                    <option className="headline regular grey1">Quarto Módulo</option>
                    <option className="headline regular grey1">Quinto Módulo</option>
                    <option className="headline regular grey1">Sexto Módulo</option>
                </Select>
                <button disabled={loading} className="title2 grey0 button full color-negative">{loading ? "Cadastrando..." : "Cadastre-se"}</button>


            </form>
        </div>
    )
}