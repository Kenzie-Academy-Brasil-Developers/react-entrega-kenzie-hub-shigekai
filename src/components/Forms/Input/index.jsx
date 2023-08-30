import { forwardRef } from "react"

export const Input = forwardRef(({error, label, ...rest}, ref)=>{
    return(
        <div className="inputDiv">
            <label className="headline grey0 regular">{label}</label>
            <input className="paragraph grey1" {...rest} ref={ref} />
            {error ? <p className="headline regular negative">{error.message}</p> : null}
        </div>
    )
})