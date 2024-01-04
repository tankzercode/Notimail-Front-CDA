import { useState } from 'react'
import Logo from '../assets/LogoByMathysG.jpg'
import ArrowDown from '../assets/arrow-down.png'
import LockLogin from '../assets/lock-login.png'
import '../App.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = e => {
        setUsername(e.target.value)
    }
    const changePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <>
            <div className="login-container">
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
        </>
    )
}

export default Login;