import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/LogoByMathysG.jpg";
import Retour from "../assets/retour.png";
import style from "./ajouterEntreprise.module.css";
import { useState } from "react";

export const AjouterEntreprise = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const handleGoBack = () => {
        // window.history.back();
        navigate("/admin");
    };
    const [message, setMessage] = useState()
    const [errors, setErrors] = useState([])

    const [formData, setFormData] = useState({
        firm_name: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        has_mail: false,
        is_admin: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (e.target.checked && e.target.name === "is_admin") {
            setFormData({ ...formData, is_admin: true });
        } else if (!e.target.checked && e.target.name === "is_admin") {
            setFormData({ ...formData, is_admin: false });
        } else {
            const { value, name } = e.target;
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <>
            <div className={style.containerImg}>
                <img src={Logo} alt="" className={style.logoImg} />
            </div>

            <div className={style.container}>
                <button className={style.buttonRetour} onClick={handleGoBack}>
                    <img src={Retour} alt="" />
                </button>
                <div className={style.containerTxtEntreprise}>
                    <p className={style.txtEntreprise}>Entreprise</p>
                </div>
            </div>


            {message &&

                <p style={{ color: "red", textAlign: "center" }}>{message} </p>
            }


            {errors.map((el) => {
                return <p style={{ color: "red", textAlign: "center" }}>{el} </p>
            })}
            <div className={style.formContainer}>
                <form className={style.edit_form}>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Entreprise:</p>
                        <div className={style.inputContainer}>
                            <input
                                name="firm_name"
                                onChange={handleInputChange}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Contact:</p>
                        <div>
                            <div className={style.inputContainer}>
                                <input
                                    name="last_name"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Nom"
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <input
                                    name="first_name"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Prénom"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Téléphone:</p>
                        <div className={style.inputContainer}>
                            <input
                                name="phone_number"
                                onChange={handleInputChange}
                                type="tel"
                            />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Email</p>
                        <div className={style.inputContainer}>
                            <input name="email" onChange={handleInputChange} type="email" />
                        </div>
                    </div>
                    <div className={style.containerInput_text}>
                        <p className={style.txt}>Identifiant</p>
                        <div className={style.inputContainer}>
                            <input
                                name="password"
                                onChange={handleInputChange}
                                type="password"
                            />
                        </div>
                    </div>
                    <div className={style.containerAdmin}>
                        <p className={style.admintxt}>Admin</p>
                        <input
                            name="is_admin"
                            onChange={handleInputChange}
                            type="checkbox"
                            className={style.checkboxSize}
                        />
                    </div>

                    <div>
                        <button onClick={handleGoBack} className={style.SupprButton}>
                            Supprimer
                        </button>
                        <button
                            onClick={(e) => {
                                console.log(formData);

                                e.preventDefault();
                                fetch("http://localhost:3000/user", {
                                    method: "POST",
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/json",
                                        // 'Content-Type': 'application/x-www-form-urlencoded',
                                    },
                                    body: JSON.stringify(formData),
                                })
                                    .then((res) => {

                                        return res.json();

                                    })
                                    .then((res) => {
                                        setMessage(false)
                                        setErrors([])

                                        console.log(res);

                                        if (res.message || res.error) {
                                            setMessage(res.message || res.error)
                                        }
                                        if (res.errors) {
                                            setErrors(res.errors)
                                        }
                                        if (res.data) {
                                            handleGoBack();

                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }}
                            className={style.TerminerButton}
                        >
                            Terminer
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
