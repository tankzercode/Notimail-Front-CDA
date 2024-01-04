import { useState } from 'react'
import Logo from '../assets/LogoByMathysG.jpg'
import ArrowDown from '../assets/arrow-down.png'
import LockLogin from '../assets/lock-login.png'
import '../App.css'

const Login = () => {
    /* useState pour contenir mes informations pour me connecter */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /* fonction qui gère l'update de mon useState username */
    const changeUsername = e => {
        /* On actualise le useState grâce à l'event */
        setUsername(e.target.value)
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
            <div className="login-container">
                <div className="login">
                    <img src={Logo} className="logo"/>
                    <form onSubmit={handleSubmit} action="" >
                        <div className="input-container">
                            <input value={username} onChange={changeUsername}type="text" placeholder='Username' required />
                            <div className="right-part">
                                <img src={ArrowDown} />
                            </div>
                        </div>
                        <div className="input-container">
                            <input  value={password} onChange={changePassword} type="password" required />
                            <div className="right-part">
                                <div className='background-lock'>
                                    <img src={LockLogin} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Login;