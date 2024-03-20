import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Select } from "../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = ()=>{
    const[loading, setLoading] = useState(false);
    const {registerRequest} = useContext(UserContext);

    const {register, handleSubmit, watch,  formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema)
    })

    const submit = (formData)=>{
        registerRequest(formData, setLoading);
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
                <Select value={watch("course_module")} label="Selecionar Módulo" disabled={loading} error={errors.course_module} {...register("course_module")}>
                    <option className="headline regular grey0" value="Primeiro Módulo">Primeiro Módulo</option>
                    <option className="headline regular grey1" value="Segundo Módulo">Segundo Módulo</option>
                    <option className="headline regular grey1" value="TerceiroMódulo">Terceiro Módulo</option>
                    <option className="headline regular grey1" value="Quarto Módulo">Quarto Módulo</option>
                    <option className="headline regular grey1" value="Quinto Módulo">Quinto Módulo</option>
                    <option className="headline regular grey1" value="Sexto Módulo">Sexto Módulo</option>
                </Select>
                <button disabled={loading} className="title2 grey0 button full color-negative">{loading ? "Cadastrando..." : "Cadastre-se"}</button>


            </form>
        </div>
    )
}