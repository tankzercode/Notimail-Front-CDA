import { useState } from 'react'
import Logo from '../assets/LogoByMathysG.jpg'
import ArrowDown from '../assets/arrow-down.png'
import LockLogin from '../assets/lock-login.png'
import style from './login.module.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = e => {
        setUsername(e.target.value)
    }
    const changePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {

    }

    return (
        <>
            <div className={style.loginContainer}>
                <img src={Logo} className={style.logo} />
                <form onChange={handleSubmit} action="">
                    <div className={style.inputContainer}>
                        <input value={username} onChange={changeUsername} type="text" placeholder='Username' required />
                        <div className={style.rightPart}>
                            <img src={ArrowDown} />
                        </div>
                    </div>
                    <div className={style.inputContainer}>
                        <input value={password} onChange={changePassword} type="password" required />
                        <div className={style.rightPart}>
                            <div className={style.backgroundLock}>
                                <img src={LockLogin} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;