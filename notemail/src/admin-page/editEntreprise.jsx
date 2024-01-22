import { useLocation, useParams } from "react-router-dom"
import Logo from "../assets/LogoByMathysG.jpg"
import Retour from "../assets/retour.png"
import style from './edit.module.css'
import { useState } from "react"
import axios from "axios"

export const EditEntreprise = () => {
    const location = useLocation();
    console.log(location.state)
    const handleGoBack = () => {
        window.history.back();
    };

    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        firm_name: location.state.firm_name,
        first_name: location.state.first_name,
        last_name: location.state.laste_name,
        phone_number: location.state.phone_number,
        email: location.state.email,
        password: location.state.password,

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/user/${location.state.firm_name}`, { formData }, {
            withCredentials: true,
            credentials: 'include',
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
            }
        })
            .then((res) => { console.log(res) })
            .catch((err) => { setError(err.response.data.message) })
    };


    return (
        <form onSubmit={handleSubmit}>

            <div className={style.containerImg}>
                <img src={Logo} alt="" className={style.logoImg} />
            </div>

            <div className={style.container}>
                <button className={style.buttonRetour} onClick={handleGoBack}><img src={Retour} alt="" /></button>
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
                                name="firm_name"
                                placeholder={location.state.firm_name}
                            />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt} >Contact:</p>
                        <div>
                            <div className={style.inputContainer}>
                                <input type="text"
                                    placeholder={location.state.last_name}
                                    onChange={handleInputChange}
                                    name="last_name"
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <input
                                    type="text"
                                    onChange={handleInputChange}
                                    name="first_name"
                                    placeholder={location.state.first_name}
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
                                name="phone_number"
                                placeholder={location.state.phone_number}
                            />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Email</p>
                        <div className={style.inputContainer}>
                            <input
                                type="text"
                                onChange={handleInputChange}
                                name="email"
                                placeholder={location.state.email}
                            />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Identifiant</p>
                        <div className={style.inputContainer}>
                            <input
                                type="text"
                                onChange={handleInputChange}
                                name="password"
                                placeholder={location.state.password}
                            />
                        </div>
                    </div>


                    <div className={style.containerAdmin}>

                        <p className={style.admintxt}>Admin</p>
                        <input
                            type="checkbox"
                            className={style.checkboxSize}
                            onChange={handleInputChange}
                            name="is_admin"
                        />
                    </div>

                    <div>
                        <button className={style.SupprButton}>Supprimer</button>
                        <button
                            className={style.TerminerButton}
                            type="submit"
                            onClick={() => {
                                console.log(formData)
                            }}
                        >Terminer</button>
                    </div>
                    <p >{error}</p>
                </div>
            </div>
        </form>

    )

} 