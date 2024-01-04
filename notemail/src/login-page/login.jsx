import Logo from '../assets/LogoByMathysG.jpg'
import ArrowDown from '../assets/arrow-down.png'
import LockLogin from '../assets/lock-login.png'
import '../App.css'

const Login = () => {
    return (
        <>
            <div className="login-container">
                <img src={Logo} className="logo"/>
                <form action="">
                    <div className="input-container">
                        <input type="text" placeholder='Username' required />
                        <div className="right-part">
                            <img src={ArrowDown} />
                        </div>
                    </div>
                    <div className="input-container">
                        <input type="text" required />
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