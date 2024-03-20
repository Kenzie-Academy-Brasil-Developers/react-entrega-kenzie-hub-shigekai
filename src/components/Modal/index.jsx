import { MdClose } from "react-icons/md";
import style from"./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { useClick } from "../../hooks/useClick";
import { useOutKey } from "../../hooks/useOutKey";

export const Modal = ({children, modalName, modalStateFunction})=>{

    const modalRef = useClick(()=>{
        modalStateFunction(false);
    });

    const closeButtonRef = useOutKey("Escape", (element)=>{
        element.click();
    })


    return(
        <div className={style.modalOverlay} role="dialog">
            <div ref={modalRef} className={style.modalBox}>
                <div className={style.modalHeader}>
                    <h2 className="title2 grey0">{modalName}</h2>
                    <button ref={closeButtonRef} 
                    onClick={()=> modalStateFunction(false)}
                    className={style.closeButton}>
                    <MdClose size={21} color="white"/>
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}