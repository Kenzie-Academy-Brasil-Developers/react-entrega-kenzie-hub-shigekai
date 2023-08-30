import { forwardRef, useState } from "react";
import {AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
export const InputPassword = forwardRef(({error, label, ...rest}, ref)=>{
    const[visible, setVisible] = useState(false);
    return(
        <div className="inputDiv">
            <label className="headline grey0 regular">{label}</label>

            <div>
                <input className="paragraph grey1" {...rest} ref={ref} type={visible ? "text" : "password"}/>
                <button onClick={()=>{setVisible(!visible)}} type="button">{visible ? <AiFillEye size={21} color="white"/> : <AiFillEyeInvisible size={21} color="white"/>}</button>
                {error ? <p className="headline regular negative">{error.message}</p> : null}
            </div>
           
        </div>
    )
})