import Logo from "../assets/logo.jpg"
import '../css/navbar.css'
export const Navbar = () => {

    return(
        <>
           <header>
                <img src={Logo} alt="" className="logo" />
                <p>Entreprise </p> {/* il faudra faire des modifs pour que le nom de (du compte)l'entreprise s'affiche  */}
                <a href="#" className="disconnect">Déconnexion</a>
           </header>
        </>
    )
}