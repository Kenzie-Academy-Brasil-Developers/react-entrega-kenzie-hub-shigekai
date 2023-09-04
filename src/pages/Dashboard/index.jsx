import { Header } from "../../components/Header"
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
                        <h1 className="title1 grey0">Que pena ! Estamos em desenvolvimento</h1>
                        <p className="paragraph grey0">Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}