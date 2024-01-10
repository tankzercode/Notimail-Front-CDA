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
        console.log('ffff')
        fetch(`http://localhost:3000/user`, {
        withCredential: true,    
        headers : {"Content-Type" : "application/json"}})
        .then((res) => {
            return res.json()
        }).then((res) => {
            setEntreprises(res)
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

    /* Fonction qui gère l'envoie du formulaire pour se connecter */
    // const handleSubmit = e => {
    //     /* Annule le conportement par défaut qui consiste à actualiser la page quand on submit */
    //     e.preventDefault();
    //     // vérification du mot de passe
    //     fetch(`http://localhost:3000/user/login`, {
    //         method: 'POST'
    //     })
    //     .then (res =>  res)
    //     .then (res.json())
    //     .then (res) => {
    //         console.log('fffffffff');
    //         console.log(res);
    //                 if (res.ok) {
    //         const responseData = await res.json();
    //         console.log('Réponse de l\'API:', responseData);
    //         // Ajoutez ici la logique pour traiter la réponse de l'API
    //       } else {
    //         console.error('Échec de la requête API');
    //       }
    //     } catch (error) {
    //       console.error('Erreur lors de la requête API:', error);
    //     }
            
    //     }
    //     .catch((err) => console.log(err))


    // }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // vérification du mot de passe
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firm_name: `${username}`,
                password: `${password}`
            })
        })
          .then((res) => {
            return res.json();
          })
          .then((responseData) => {
            console.log('Réponse de l\'API:', responseData);
          })
          .catch((error) => {
            console.error('Erreur lors de la requête API:', error);
          });
      };


    /* Contenu HTML de ma page login*/
    return (
        <>
        {console.log(entreprises)}
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