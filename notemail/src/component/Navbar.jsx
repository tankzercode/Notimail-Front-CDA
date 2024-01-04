import Logo from "../assets/notimailPng.png"
import '../css/navbar.css'
export const Navbar = () => {

    return(
        <>
       
                <header>
                <div className="container-logo">
                    <img src={Logo} alt="" className="logo" />
                </div>
                    <div className="container-of-header">
                        <p className="entreprise-git ">Entreprise</p> {/* il faudra faire des modifs pour que le nom de (du compte)l'entreprise s'affiche  */}
                        <a href="#" className="disconnect">Déconnexion</a>
                    </div>
                </header>
                
          
        
        </>
    )
}