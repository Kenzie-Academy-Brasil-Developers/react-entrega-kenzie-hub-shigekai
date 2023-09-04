import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export const TechProvider = ({children})=>{
    const {user} = useContext(UserContext)
    const[techList, setTechList] = useState([]);

    useEffect(()=>{
        setTechList(user.techs);
    }, []);

    const newTech = (formData)=>{
        const token = localStorage.getItem("@token")
        const registerTech = async ()=>{
            console.log(formData)
            try {
                await api.post("/users/techs", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(techList);
            } catch (error) {
                console.log(error);
            }
        }

        registerTech()
    }

    return(
        <TechContext.Provider value={{techList, newTech}}>
            {children}
        </TechContext.Provider>
    )
}