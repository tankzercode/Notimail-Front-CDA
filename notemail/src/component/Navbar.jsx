import { useContext, useEffect } from "react"
import Logo from "../assets/notimailPng.png"
import style from '../css/navbar.module.css'
import UserContext from "../userContext"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {

    const user = useContext(UserContext)

    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
    }, [])
    return (
        <>
            <header>
                <div className={style.containerLogo}>
                    <img src={Logo} alt="" className={style.logo} />
                </div>
                <div className={style.containerOfHeader}>
                    <p className={style.entreprisegit}>
                        {user.user &&

                            <p>{user.user.is_admin ? "Admin" : "Utilisateur"}</p>
                        }</p> {/* il faudra faire des modifs pour que le nom de (du compte)l'entreprise s'affiche  */}
                    <a onClick={() => {
                        user.setUser(false);
                        navigate('/');
                    }} className={style.disconnect}>Déconnexion</a>
                </div>
            </header>

        </>
    )
}