import { createContext } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useEffect } from "react";


export const UserContext = createContext({});


export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const[loadingUser, setLoadingUser] = useState(false);
    
        useEffect(()=>{
            const token = localStorage.getItem("@token");
            const requestUser = async ()=>{
                try{
                    setLoadingUser(true);    
                    const {data} = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(data);
                    navigate("/dash")
                } catch (error){
                    console.log(error);
                }   finally {
                    setLoadingUser(false);
                }
            }
    
            if(token){
                requestUser()
            }
        }, [])


    const navigate = useNavigate();

    const registerRequest = async (formData, setLoading)=>{
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

    const loginRequest = async (formData, setLoading)=>{
        try{
            setLoading(true)
            const {data} = await api.post("/sessions", formData)
            setUser(data.user);
            localStorage.setItem("@token", data.token);
            navigate("/dash");
            toast.success("Login realizado com sucesso", {
                theme: "dark"
            })
        } catch (error) {
            toast.error("Login inválido, tente novamente",{
                theme: "dark"
            })
        } finally {
            setLoading(false)
        }
    }

    const logout = ()=>{
        localStorage.removeItem("@token");
        navigate("/");
        setUser(null);
        toast.success("Logout realizado com sucesso", {
            theme: "dark"
        })
    }

    return(
        <UserContext.Provider value={{ user, setUser, registerRequest, loginRequest, logout, loadingUser}}>
            {children}
        </UserContext.Provider>
    )
}