import { useLocation, useParams } from "react-router-dom"
import Logo from "../assets/LogoByMathysG.jpg"
import Retour from "../assets/retour.png"
import style from './edit.module.css'

export const EditEntreprise = () => {
    const location = useLocation();
    console.log(location.state.test)
    const handleGoBack = () => {
        window.history.back();
      };

    return ( 
    <>
    
        <div className={style.containerImg}>
            <img src={Logo} alt="" className={style.logoImg} />
        </div>

        <div className={style.container}>
            <button className={style.buttonRetour}  onClick={handleGoBack}><img src={Retour} alt="" /></button>
            <div className={style.containerTxtEntreprise}>
                <p className={style.txtEntreprise}>Entreprise</p>
            </div>
        </div>
    <div className={style.formContainer}>
            <form className={style.edit_form}>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Entreprise:</p>
                        <div className={style.inputContainer}>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Contact:</p>
                        <div>
                        <div className={style.inputContainer}>
                            <input type="text" placeholder="Nom" />
                        </div>
                        <div className={style.inputContainer}>
                            <input type="text" placeholder="Prénom"/>
                        </div>
                    </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Téléphone:</p>
                        <div className={style.inputContainer}>
                        <input type="text" />
                        </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Email</p>
                        <div className={style.inputContainer}>
                            <input type="text" />
                        </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Identifiant</p>
                        <div className={style.inputContainer}>
                            <input type="text" />
                        </div>
                    </div> 
                    <div className={style.containerAdmin}>
                        <p className={style.admintxt}>Admin</p>
                        <input type="checkbox" className={style.checkboxSize}/>
                    </div>

                    <div>
                        <button className={style.SupprButton}>Supprimer</button>
                        <button className={style.TerminerButton}>Terminer</button>
                    </div>
            </form>
    </div>
    </> 
    
    )

} 