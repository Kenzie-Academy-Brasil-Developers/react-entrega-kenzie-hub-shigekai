import { useContext } from "react";

import { Header } from "../../components/Header"
import { TechList } from "../../components/TechList";
import { UserInfo } from "../../components/UserInfo";
import { TechContext } from "../../providers/TechContext";
import { Modal } from "../../components/Modal";
import { NewTechForm } from "../../components/Forms/NewTechForm";
import { EditTechForm } from "../../components/Forms/EditTechForm";

export const Dashboard = ()=>{
    const {newTechModal, setNewTechModal, editTech, setEditTech} = useContext(TechContext);


    return(
        <div>
            <div>
                <Header/>
                <UserInfo/>
    
                <div>
                    <div className="container large">
                        <TechList/>
                    </div>
                </div>
            </div>
            {newTechModal ? 
            <Modal modalName="Cadastrar Tecnologia"
            modalStateFunction={setNewTechModal}>
                <NewTechForm/>
            </Modal>
            : null}
            {
                editTech ? 
                <Modal modalName="Editar"
                modalStateFunction={setEditTech}>
                    <EditTechForm/>
                </Modal>
                : null
            }
        </div>
    )
}