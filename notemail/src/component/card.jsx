import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import style from './card.module.css';
import { useNavigate } from "react-router-dom";

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
const navigate = useNavigate()
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
                        <input type="checkbox" />
                        <span className={style.knob}></span>
                    </label>
                    <button>
                        <FaEdit onClick={()=> {
                            navigate('editEntreprise',{ state: {test :''}})
                        }} style={{ color: 'var(--color2)' }} className={style.editButton} />
                    </button>
                </div>
            </div>
            {showDetails && <EntrepriseMoreDetails details={props.items} ></EntrepriseMoreDetails>}
        </div>
    </div>        
</>
    )

}