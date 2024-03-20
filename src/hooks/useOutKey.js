import { useEffect, useRef } from "react"

export const useOutKey = (keyName, callback)=>{
    const ref = useRef(null);

    useEffect(()=>{

        const handleKey = (event)=>{
            if(event.key === keyName){
                if(callback) callback(ref.current);
            }
        }

        window.addEventListener("keydown", handleKey)

        return ()=>{
            window.removeEventListener("keydown", handleKey)
        }
    },[]);

    return ref;
}