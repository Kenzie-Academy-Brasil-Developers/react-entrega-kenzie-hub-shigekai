import { CreateTechModal } from "../../components/CreateTechModal";
import { Header } from "../../components/Header"
import { TechList } from "../../components/TechList";
import { UserInfo } from "../../components/UserInfo";
import style from "./style.module.scss";

export const Dashboard = ()=>{


    return(
        <div>
            <div>
                <Header/>
                <UserInfo/>
    
                <div className={style.dashDiv}>
                    <div className="container large">
                        <TechList/>
                    </div>
                </div>
            </div>
            <CreateTechModal/>
        </div>
    )
}