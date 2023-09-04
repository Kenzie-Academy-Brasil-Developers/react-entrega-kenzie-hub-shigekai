import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { TechCard } from "./TechCard";

export const TechList = ()=>{
    const {techList} = useContext(TechContext);

    return(
        <section>
            <div>
                <h1 className="title1 grey0">Tecnologias</h1>
                <button></button>
            </div>
            <div>
                {techList.map((tech)=>(
                    <TechCard tech={tech}/>
                ))}
            </div>
        </section>
    )
}