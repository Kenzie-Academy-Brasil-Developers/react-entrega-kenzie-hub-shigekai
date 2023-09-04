import {MdDelete, MdEdit} from "react-icons//md"

export const TechCard = ({tech})=>{
    return(
        <div>
            <h1 className="title1 grey0">
                {tech.title}
            </h1>
            <div>
                <p className="headline regular grey1">
                    {tech.status}
                </p>
                <button><MdDelete/></button>
                <button><MdEdit/></button>

            </div>
        </div>
    )
}