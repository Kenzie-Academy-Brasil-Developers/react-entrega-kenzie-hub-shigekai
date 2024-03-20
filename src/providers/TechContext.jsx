import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({})

export const TechProvider = ({children})=>{
    const {user} = useContext(UserContext)
    const[techList, setTechList] = useState([]);
    const[editTech, setEditTech] = useState(null);
    const[newTechModal, setNewTechModal] = useState(false);


    useEffect(()=>{
        setTechList(user.techs)
    }, []);

    const newTech = (formData)=>{
        const token = localStorage.getItem("@token")
        const registerTech = async ()=>{
            try {
                const {data} = await api.post("/users/techs", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setTechList([...techList, data])
                setNewTechModal(false)
                toast.success("Nova tecnologia cadastrada",{
                    theme: "dark"
                })
            } catch (error) {
                console.log(error);
            }
        }

        registerTech()
    }

    const removeTech = async (techId)=>{
        const token = localStorage.getItem("@token");
        try {
            await api.delete(`users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            const newTechList = techList.filter((tech)=>(
                tech.id !== techId
            ));
            setTechList(newTechList);
            toast.info("Tecnologia removida", {
                theme: "dark"
            })
        } catch (error) {
            console.log(error)
        } 
    }

    const updateTech = async (formData)=>{
        const token = localStorage.getItem("@token");
        try {
                api.put(`/users/techs/${editTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.map((tech)=>{
                if(editTech.id === tech.id){
                    return {
                        ...tech,
                        status: formData.status
                    }
                } else {
                    return tech
                }
            })
            setTechList(newTechList);
            setEditTech(null);
            toast.success("Tecnologia editada com sucesso", {
                theme: "dark"
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <TechContext.Provider value={{newTechModal, setNewTechModal, techList, newTech, removeTech, setEditTech, editTech, updateTech}}>
            {children}
        </TechContext.Provider>
    )
}