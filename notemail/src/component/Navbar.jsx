import { useContext, useEffect } from "react"
import Logo from "../assets/notimailPng.png"
import style from '../css/navbar.module.css'
import UserContext from "../userContext"

export const Navbar = () => {

    const user = useContext(UserContext)
    console.log(user)

    
    useEffect(()=> {

    },[])
    return(
        <>
                <header>
                <div className={style.containerLogo}>
                    <img src={Logo} alt="" className={style.logo} />
                </div>
                    <div className={style.containerOfHeader}>
                        <p className={style.entreprisegit}>
                            {user && user.user} </p>
                        <a href="#" className={style.disconnect}>Déconnexion</a>
                    </div>
                </header>
                
        </>
    )
}