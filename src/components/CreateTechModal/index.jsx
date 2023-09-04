import { useContext, useState } from "react"
import { MdClose } from "react-icons/md";
import { Input } from "../Forms/Input";
import { useForm } from "react-hook-form";
import { Select } from "../Forms/Select";
import { TechContext } from "../../providers/TechContext";

export const CreateTechModal = ()=>{
    const [visible, setVisible] = useState(false);
    const {newTech} = useContext(TechContext);

    const {register, handleSubmit} = useForm();
    const submit = (formData)=>{
        console.log(formData)
        newTech(formData);
    }
    
    return(
        <div className={visible ? "visible" : "invisible"}>
            <div>
                <h1>Cadastrar tecnologia</h1>
                <button><MdClose/></button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input {...register("title")} type="text" label="Nome"/>
                <Select {...register("status")}>
                    <option className="headline regular grey1">Iniciante</option>
                    <option className="headline regular grey1">Intermediário</option>
                    <option className="headline regular grey1">Avançado</option>
                </Select>
                <button className="title2 grey0 button full color-primary">Cadastrar Tecnologia</button>
            </form>
        </div>
    )
}