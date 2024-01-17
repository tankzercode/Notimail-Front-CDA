import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import style from './card.module.css';

export const EntrepriseMoreDetails = (props) => {
    return (
        <div className={style.moreDetails}>
            <div className={style.infosContainer}>
                <div className={style.infoTitle}>Email:</div>
                <div>{props.details.email}</div>
            </div>
            <div className={style.infosContainer}>
                <div className={style.infoTitle}>Téléphone:</div>
                <div>{props.details.phone_number}</div>
            </div>
            <div className={style.infosContainer}>
                <div className={style.infoTitle}>Identifiant:</div>
                <div>{props.details.password}</div>
            </div>
        </div>

    );
};


export const Card = (props) => {
    console.log(props)
    // fonction basé sur un onChange qui s'active quand on active/desactive un input toggle

    // On récupere l'evenement et le firm_name (Pour identifier l'entreprise)
    const handleCheckboxChange = (e, firm_name) => {
        // Si checked est en true execute le code ci-dessous
        if (e.target.checked) {
            props.setNotifList(prev => [...prev, {firm_name:firm_name}])
        } // Je target l'element du tableau qui contient le firm_name que je veux supprimer.
        else {
            // prev represente notifList. Avec filter, on filtre notre tableau pour en recréer un sans l'element firm_name (Celui qu'on veut supprimer). item symbolise chaque element du tableau notifList
            props.setNotifList(prev => prev.filter(item => item.firm_name !== firm_name))            
        }
    }
    


    const [showDetails, setShowDetails] = useState(false)
  
    const handleCardClick = () => {
        setShowDetails(!showDetails);
    };
    return(
        <>  
            <div className={style.entrepriseListContainer}>
                <div className={style.moreDetailsContainer} onClick={handleCardClick}>
                    <div className={style.entrepriseCard}>
                        <div className={style.entrepriseInfos}>
                            <h3>{props.items.firm_name}</h3>
                            <p> {props.items.last_picked_up} </p>
                        </div>
                        <div className={style.entrepriseEdit}>
                            <label className={style.toggleButton}>
                                <input type="checkbox" onChange={(e)=>{handleCheckboxChange(e,props.items.firm_name)}}/>
                                <span className={style.knob}></span>
                            </label>
                            <button>
                                <FaEdit style={{ color: 'var(--color2)' }} className={style.editButton} />
                            </button>
                        </div>
                    </div>
                    {showDetails && <EntrepriseMoreDetails details={props.items} ></EntrepriseMoreDetails>}
                </div>
            </div>        
        </>
    )

}