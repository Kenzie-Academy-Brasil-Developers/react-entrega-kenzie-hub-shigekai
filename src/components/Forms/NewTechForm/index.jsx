import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Select } from "../Select";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";


export const NewTechForm = ()=>{
    const {register, handleSubmit, watch} = useForm();
    const {newTech} = useContext(TechContext);

    const submit = (formData)=>{
        newTech(formData)
    }

    return(
        <form className="form" onSubmit={handleSubmit(submit)}>
            <Input placeholder="Digite sua nova tecnologia"
            label="Nome"
            type="text"
            {...register("title")}/>

            <Select value={watch("status")} label="Selecionar Status" {...register("status")} >
                <option className="headline regular grey1">Iniciante</option>
                <option className="headline regular grey1">Intermediário</option>
                <option className="headline regular grey1">Avançado</option>
            </Select>
            <button type="submit" className="title2 grey0 button full color-primary submitButton">Cadastrar Tecnologia</button>
        </form>
    )
}