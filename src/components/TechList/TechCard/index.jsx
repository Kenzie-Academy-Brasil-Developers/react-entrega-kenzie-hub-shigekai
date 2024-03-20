import { useContext } from "react"
import {MdDelete, MdEdit} from "react-icons//md"
import { TechContext } from "../../../providers/TechContext"
import style from "./style.module.scss"

export const TechCard = ({tech})=>{
    const {removeTech, setEditTech} = useContext(TechContext);

    return(
        <div className={style.cardContainer}>
            <div>
                <h1 className="title1 grey0">
                    {tech.title}
                </h1>
            </div>
            <div>
                <p className="headline regular grey1">
                    {tech.status}
                </p>
                <button onClick={()=>{removeTech(tech.id)}}><MdDelete color="grey"/></button>
                <button onClick={()=>{setEditTech(tech)}}><MdEdit color="grey"/></button>

            </div>
        </div>
    )
}