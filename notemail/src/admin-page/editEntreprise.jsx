import { useLocation, useParams } from "react-router-dom"
import Logo from "../assets/LogoByMathysG.jpg"
import Retour from "../assets/retour.png"
import style from './edit.module.css'

export const EditEntreprise = () => {
    const location = useLocation();
    console.log(location.state.test)
    return ( 
    <>
        <div className={style.containerImg}>
            <img src={Logo} alt="" className={style.logoImg} />
        </div>

        <div className={style.container}>
            <button><img src={Retour} alt="" /></button>
            <div className={style.containerTxtEntreprise}>
                <p className={style.txtEntreprise}>Entreprise</p>
            </div>
        </div>

        <div></div>
    
    </> 
    
    )

} 