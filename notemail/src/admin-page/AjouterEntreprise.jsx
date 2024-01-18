import { useLocation, useParams } from "react-router-dom"
import Logo from "../assets/LogoByMathysG.jpg"
import Retour from "../assets/retour.png"
import style from './ajouterEntreprise.module.css'
import { useState } from "react"

export const AjouterEntreprise = () => {
    const location = useLocation();
 
    const handleGoBack = () => {
        window.history.back();
      };

    //   const [entrepriseName, setEntrepriseName] = useState('');
    //   const [firstName, setFirstName] = useState('');
    //   const [lastName, setLastName] = useState('');
    //   const [phone, setPhone] = useState('');
    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');
    //   const [isAdmin, setIsAdmin] = useState(false);

    //   const handleChangeEntrepriseName = e => {
    //     setEntrepriseName(e.target.value)
    //   }

    let formStateData = {
        "firm_name": '',
        "first_name": '',
        "last_name": '',
        "email": '',
        "phone_number": '',
        "password": '',
        "last_received_mail": '',
        "last_picked_up": '',
        "has_mail": true,
        "is_admin": false
    }

    let [formData, setFormData] = useState(formStateData)

    const handleInputChange = (e) => {
        const { value } = e.target;
        setFormData({ ...FormData, [name]: value});
    }

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
                            <input value={formData.firm_name} name={"firm_name"} onChange={handleInputChange} type="text" />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Contact:</p>
                        <div>
                        <div className={style.inputContainer}>
                            <input value={formData.last_name} name={"last_name"} onChange={handleInputChange} type="text" placeholder="Nom" />
                        </div>
                        <div className={style.inputContainer}>
                            <input value={formData.first_name} name={"first_name"} onChange={handleInputChange} type="text" placeholder="Prénom"/>
                        </div>
                    </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Téléphone:</p>
                        <div className={style.inputContainer}>
                        <input value={formData.phone_number} name={"phone_number"} onChange={handleInputChange} type="text" />
                        </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Email</p>
                        <div className={style.inputContainer}>
                            <input value={formData.email} name={"email"} onChange={handleInputChange} type="text" />
                        </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Identifiant</p>
                        <div className={style.inputContainer}>
                            <input value={formData.password} name={"password"} onChange={handleInputChange} type="text" />
                        </div>
                    </div> 
                    <div className={style.containerAdmin}>
                        <p className={style.admintxt}>Admin</p>
                        <input value={formData.is_admin} name={"is_admin"} onChange={handleInputChange} type="checkbox" className={style.checkboxSize}/>
                    </div>

                    <div>
                        <button className={style.SupprButton}>Supprimer</button>
                        <button onClick={() => {
                                    fetch('http://localhost:3000/user',{
                                        method: 'POST',
                                        credentials: 'include',
                                        headers: {
                                            "Content-Type": "application/json",
                                            // 'Content-Type': 'application/x-www-form-urlencoded',
                                          },
                                        body: JSON.stringify(
                                            formData
                                        )
                                        .then ((res) => {
                                            console.log(res);
                                        })
                                        .catch ((err) => {
                                            console.log(err);
                                        })
                                    })
                        }}className={style.TerminerButton}>Terminer</button>
                    </div>
            </form>
    </div>
    </> 
    
    )

} 