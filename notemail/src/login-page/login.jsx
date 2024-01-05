import { useState } from 'react'
import Logo from '../assets/LogoByMathysG.jpg'
import ArrowDown from '../assets/arrow-down.png'
import LockLogin from '../assets/lock-login.png'
import style from './login.module.css'

const Login = () => {
    /* useState pour contenir mes informations pour me connecter */
    const [table, setTable] = useState(['Entreprise 1', 'Entreprise 2', 'Entreprise 3']);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

    /* Fonction qui gère l'envoie du formulaire pour se connecter */
    const handleSubmit = e => {
        /* Annule le conportement par défaut qui consiste à actualiser la page quand on submit */
        e.preventDefault()
    }

    /* Contenu HTML de ma page login*/
    return (
        <>
            <div className={style.loginContainer}>
                <img src={Logo} className={style.logo} />
                <form onChange={handleSubmit} action="">
                    <div className={style.inputContainer}>
                        {/* <input value={username} onChange={changeUsername} type="text" placeholder='Username' required /> */}
                        <select onChange={changeUsername}>
                            <option value="" disabled selected hidden>Entreprise</option>
                            {table.map((el,index)=>{
                                return <option key={index} value={el} > {el}</option>
                            })}
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