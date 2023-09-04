import Loading from "../../assets/Loading.svg";
import style from "./style.module.scss"
export const LoadingPage = ()=>{
    return(
        <div className={style.loadingBox}>
            <img src={Loading} alt="loading-icon"/>
        </div>
    )
}