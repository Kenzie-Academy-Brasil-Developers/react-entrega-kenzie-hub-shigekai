import { useEffect, useRef } from "react"

export const useClick = (callback)=>{
    const ref = useRef(null)

    useEffect(()=>{

        const handleClick = (event)=>{
            if(!ref.current?.contains(event.target)){
                if(callback) callback();
            }
        }

        window.addEventListener("mousedown", handleClick);
        
        return ()=>{
            window.removeEventListener("mousedown", handleClick);
        }
    }, []);

    return ref;
}