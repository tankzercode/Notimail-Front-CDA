import { useState, useEffect, useContext } from 'react'
import Logo from '../assets/LogoByMathysG.jpg'
import ArrowDown from '../assets/arrow-down.png'
import LockLogin from '../assets/lock-login.png'
import { useNavigate } from "react-router-dom";
import style from './login.module.css'
import userContext from '../component/context';
import UserContext from '../userContext';

const Login = () => {
    /* useState pour contenir mes informations pour me connecter */
    const [entreprises, setEntreprises] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const [user, setUser] = useState();

    // On crée un context nommé user
    console.log(user);
    // requete API, qu'on ajoute au useState entreprises sous forme de tableau
    useEffect(() => {
        fetch(`http://localhost:3000/user`, {
        withCredential: true,    
        })
        .then((res) => {
            return res.json()
        }).then((res) => {
            // On update le useState entreprises pour qu'il contienne la liste des entreprises sous forme de tableau
            setEntreprises(res)
        })

    }, [])

    /* fonction qui gère l'update de mon useState username */
    const changeUsername = e => {
        /* On actualise le useState grâce à l'event */
        setUsername(e.target.value)
    }

    /* fonction qui gère l'update de mon useState password */
    const changePassword = e => {
        setPassword(e.target.value)
    }

    const navigate = useNavigate();

    // Fonction qui gère le comportement du submit

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // vérification du mot de passe

        // Requette en post pour envoyer au back des informations (firm_name et password dans cet exemple)
        fetch('http://localhost:3000/login',{
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                firm_name: username,
                password: password,
            })
        })
          .then((res) => {
            // on renvoie la réponse converti en json()
            return res.json();

          })
          .then((responseData) => {
            // On update notre const user avec l'objet user de notre reponse venant du back
            console.log(responseData);
            setUser(responseData.user);
            // Si is_admin de l'objet user === true, renvoie sur la page /admin, sinon /user
            if(responseData.user.is_admin) {
                navigate('/admin')
            } else{
                navigate('/user')
            }
            console.log(user);
          })
          .catch((error) => {
            // Renvoi l'erreur potentielle
            console.error('Erreur lors de la requête API:', error);
          });
      };

    /* Contenu HTML de ma page login*/
    return (
        <>
        <UserContext.Provider value={user}>
            <div className={style.loginContainer}>
                <img src={Logo} className={style.logo} />
                <form onSubmit={handleSubmit} action="">
                    <div className={style.inputContainer}>
                    {/* Pour avoir le menu deroulant dans le login  dans la section username */}
                        <select onChange={changeUsername}>
                            <option value="" disabled selected hidden>Entreprise</option>
                            {entreprises.map((entreprise, index) => (
                                // Je recupere sur chaque json de l'API le firm_name de l'entreprise pour l'affichage dans l'input select 
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
        </UserContext.Provider>
        </>
    )
}

export default Login;