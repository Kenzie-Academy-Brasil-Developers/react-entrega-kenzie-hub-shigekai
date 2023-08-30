import { forwardRef } from "react";
import style from "./style.module.scss"

export const Select = forwardRef(({children}, ref)=>{
    return(

        <div className={style.selectDiv}>
            <label className="headline regular grey0">Selecionar módulo</label>
            <select   className="paragraph grey1"ref={ref}>
                {children}
            </select>
        </div>
    )
})