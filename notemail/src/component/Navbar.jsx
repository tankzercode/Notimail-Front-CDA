import { useContext } from "react"
import Logo from "../assets/notimailPng.png"
import style from '../css/navbar.module.css'
import userContext from "./context"

export const Navbar = () => {

    const user = useContext(userContext)
    console.log(user)
    return(
        <>
                <header>
                <div className={style.containerLogo}>
                    <img src={Logo} alt="" className={style.logo} />
                </div>
                    <div className={style.containerOfHeader}>
                        <p className={style.entreprisegit}>
                        {user.user.is_admin ? "Admin" : "Utilisateur" } </p> {/* il faudra faire des modifs pour que le nom de (du compte)l'entreprise s'affiche  */}
                        <a href="#" className={style.disconnect}>Déconnexion</a>
                    </div>
                </header>
                
        </>
    )
}