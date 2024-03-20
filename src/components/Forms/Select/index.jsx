import { forwardRef } from "react";
import style from "./style.module.scss"

export const Select = forwardRef(({children, label, ...rest}, ref)=>{
    return(

        <div className={style.selectDiv}>
            <label className="headline regular grey0">{label}</label>
            <select {...rest}  className="paragraph grey1"ref={ref}>
                {children}
            </select>
        </div>
    )
})