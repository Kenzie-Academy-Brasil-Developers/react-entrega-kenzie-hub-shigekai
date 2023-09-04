import { forwardRef } from "react";
import style from "./style.module.scss"

export const Select = forwardRef(({children, label}, ref)=>{
    return(

        <div className={style.selectDiv}>
            <label className="headline regular grey0">{label}</label>
            <select   className="paragraph grey1"ref={ref}>
                {children}
            </select>
        </div>
    )
})