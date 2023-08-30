import style from "./style.module.scss"
export const UserInfo = ({user})=>{
    return(
        <div className={style.userDiv}>   
            <div className="container large">
                <h1 className="title1 grey0">Olá, {user?.name}</h1>
                <p className="headline regular grey1">{user?.course_module}</p>
            </div>
        </div>
    )
}