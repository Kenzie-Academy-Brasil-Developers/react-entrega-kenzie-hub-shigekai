import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { TechCard } from "./TechCard";
import {BiPlusCircle} from "react-icons/bi"
import style from "./style.module.scss"
export const TechList = ()=>{
    const {techList, setNewTechModal} = useContext(TechContext);
    const isTech = techList.length > 0 ? true : false;

    return(
        <section className={style.techContainer}>
            <div className={style.header}>
                <h1 className="title1 grey0">Tecnologias</h1>
                <button className={style.newTechButton} onClick={()=> setNewTechModal(true)}><BiPlusCircle size={22} color="white"/></button>
            </div>
            { isTech ?
            <div className={style.techListContainer}>
                {techList.map((tech)=>(
                    <TechCard tech={tech} key={tech.id}/>
                ))}
            </div>
            : null
            }
        </section>
    )
}