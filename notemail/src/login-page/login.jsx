import { useState, useEffect } from 'react'
import Logo from '../assets/LogoByMathysG.jpg'
import ArrowDown from '../assets/arrow-down.png'
import LockLogin from '../assets/lock-login.png'
import style from './login.module.css'

const Login = () => {
    /* useState pour contenir mes informations pour me connecter */
    const [entreprises, setEntreprises] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // requete API, qu'on ajoute au useState entreprises sous forme de tableau
    useEffect(() => {
        fetch(`../public/test.json`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setEntreprises(data)
        })
    }, [])

    /* fonction qui gère l'update de mon useState username */
    const changeUsername = e => {
        /* On actualise le useState grâce à l'event */
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    /* fonction qui gère l'update de mon useState password */
    const changePassword = e => {
        setPassword(e.target.value)
    }

    // Fonction pour vérifier le mot de passe
    const checkPassword = () => {
        for (let i = 0; i < entreprises.length; i++) {
            console.log('test');
            if (username == entreprises[i].firm_name) {
                if (password == entreprises[i].password) {
                    console.log('Vous êtes connecté');
                    // ajouter le reste du comportement
                }
                if (password !== entreprises[i].password) {
                    console.log('Mot de passe incorrect');
                    // ajouter le reste du comportement
                }
            }
        }
    }

    /* Fonction qui gère l'envoie du formulaire pour se connecter */
    const handleSubmit = e => {
        /* Annule le conportement par défaut qui consiste à actualiser la page quand on submit */
        e.preventDefault();
        // vérification du mot de passe
        checkPassword();
    }

    /* Contenu HTML de ma page login*/
    return (
        <>
            <div className={style.loginContainer}>
                <img src={Logo} className={style.logo} />
                <form onSubmit={handleSubmit} action="">
                    <div className={style.inputContainer}>
                        <select onChange={changeUsername}>
                            <option value="" disabled selected hidden>Entreprise</option>
                            {entreprises.map((entreprise, index) => (
                                <option key={index} value={entreprise.firm_name}>{entreprise.firm_name}</option>
                            ))}
                        </select>
                        <div className={style.rightPart}>
                            <img src={ArrowDown} />
                        </div>
                    </div>
                    <div className={style.inputContainer}>
                        <input value={password} onChange={changePassword} type="password" required />
                        <div className={style.rightPart}>
                            <div className={style.backgroundLock}>
                            <button type="submit" className={style.backgroundLock}>
                                <img src={LockLogin} />
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;