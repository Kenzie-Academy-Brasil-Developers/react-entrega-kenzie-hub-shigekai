import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Select } from "../Select";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";


export const EditTechForm = ()=>{
    const {editTech, updateTech} = useContext(TechContext);
    
    const {register, handleSubmit} = useForm({
        values:{
            status: editTech.status
        }
    });


    const submit = (formData)=>{
        updateTech(formData)
    }

    return(
        <form className="form" onSubmit={handleSubmit(submit)}>
            <Input placeholder="Digite sua nova tecnologia"
            label="Nome"
            type="text"
            value={editTech.title}
            disabled={true}/>

            <Select label="Selecionar Status" {...register("status")}  >
                <option value="Iniciante" className="headline regular grey1">Iniciante</option>
                <option value="Intermediário" className="headline regular grey1">Intermediário</option>
                <option value="Avançado" className="headline regular grey1">Avançado</option>
            </Select>
            <button type="submit" className="title2 grey0 button full color-primary submitButton">Cadastrar Tecnologia</button>
        </form>
    )
}