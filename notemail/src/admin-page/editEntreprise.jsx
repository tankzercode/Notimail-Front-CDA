import { useLocation, useParams } from "react-router-dom"
import Logo from "../assets/LogoByMathysG.jpg"
import Retour from "../assets/retour.png"
import style from './edit.module.css'
import { useState } from "react"

export const EditEntreprise = () => {
    const location = useLocation();
 
    const handleGoBack = () => {
        window.history.back();
      };

      let formStateData = {
        firm_name: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(formStateData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    

    //   const [firm_name, setFirm_name] = useState("")
    //   const [last_name, setLast_name] = useState("")
    //   const [first_name, setFirst_name] = useState("")
    //   const [phone_number, setPhone_number] = useState("")
    //   const [email, setEmail] = useState("")
    //   const [password, setPassword] = useState("")

    //   const changeEntreprise = e => {  
    //     setFirm_name(e.target.value)
    // }

    // const changeLast_name = e => {  
    //     setLast_name(e.target.value)
    // }

    // const changeFirst_name = e => {    
    //     setFirst_name(e.target.value)
    // }

    // const changePhone_number= e => {  
    //     setPhone_number(e.target.value)
    // }
    
    // const changeEmail = e => {
    //     setEmail(e.target.value)
    // }

    // const changePassword = e => {
    //     setPassword(e.target.value)
    // }


    // fetch('http://localhost:3000/editEntreprise',{
    //     method: 'PUT',
    //     credentials: 'include',
    //     headers: {
    //         "Content-Type": "application/json",
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //     body: JSON.stringify({
    //         // firm_name: firm_name,
    //         // Last_name: last_name,
    //         // first_name: first_name,
    //         // phone_number: phone_number,
    //         // email: email,
    //         // password: password,

    //     })
    // })

    return ( 
    <form onSubmit={handleSubmit}>
    
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
            <div className={style.edit_form}>
                    <div className={style.containerInput_text}>
                        <p className={style.txt} >Entreprise:</p>
                        <div className={style.inputContainer}>
                            <input 
                            type="text" 
                            onChange={handleInputChange}
                            value={formData.firm_name} 
                            name="firm_name"
                            />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt} >Contact:</p>
                        <div>
                        <div className={style.inputContainer}>
                            <input type="text" 
                            placeholder="Nom" 
                            onChange={handleInputChange} 
                            value={formData.last_name} 
                            name="last_name"
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <input 
                            type="text" 
                            placeholder="Prénom" 
                            onChange={handleInputChange}
                            value={formData.first_name} 
                            name="first_name"
                            />
                        </div>
                    </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt} >Téléphone:</p>
                        <div className={style.inputContainer}>
                            <input 
                            type="text" 
                            onChange={handleInputChange}
                            value={formData.phone_number} 
                            name="phone_number"
                            />
                        </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Email</p>
                        <div className={style.inputContainer}>
                            <input 
                            type="text" 
                            onChange={handleInputChange}
                            value={formData.email} 
                            name="email"
                            /> 
                        </div>
                    </div> 
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Identifiant</p>
                        <div className={style.inputContainer}>
                            <input 
                            type="text" 
                            onChange={handleInputChange} 
                            value={formData.password} 
                            name="password"
                            />
                        </div>
                    </div> 
                    <div className={style.containerAdmin}>
                        <p className={style.admintxt}>Admin</p>
                        <input type="checkbox" className={style.checkboxSize}/>
                    </div>

                    <div>
                        <button className={style.SupprButton}>Supprimer</button>
                        <button className={style.TerminerButton} type="submit">Terminer</button>
                    </div>
            </div>
    </div>
    </form> 
    
    )

} 