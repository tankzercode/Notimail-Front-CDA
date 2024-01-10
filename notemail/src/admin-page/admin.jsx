import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import style from './admin.module.css'
import { useState } from "react";
const EntrepriseMoreDetails = () => {
    return (
        <div className={style.moreDetails}>
            <div className={style.infosContainer}>
                <div className={style.infoTitle}>Email:</div>
                <div>adresse-email@exemple.com</div>
            </div>
            <div className={style.infosContainer}>
                <div className={style.infoTitle}>Téléphone:</div>
                <div>0123456789</div>
            </div>
            <div className={style.infosContainer}>
                <div className={style.infoTitle}>Identifiant:</div>
                <div>1337</div>
            </div>
        </div>

    );
};

const Admin = () => {
    const [showDetails, setShowDetails] = useState(false)
  
    const handleCardClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <div className={style.searchBarContainer}>
                <IoIosSearch />
                <input className={style.searchBarContainer.input} type="text" placeholder="Rechercher" />
            </div>
            <div className={style.entrepriseListContainer}>
                <div className={style.moreDetailsContainer} onClick={handleCardClick}>
                    <div className={style.entrepriseCard}>
                        <div className={style.entrepriseInfos}>
                            <h3>Entreprise 1</h3>
                            <p>Nom contact</p>
                            <p>19/09/2023</p>
                        </div>
                        <div className={style.entrepriseEdit}>
                            <label className={style.toggleButton}>
                                <input type="checkbox" />
                                <span className={style.knob}></span>
                            </label>
                            <button>
                                <FaEdit style={{ color: 'var(--color2)' }} className={style.editButton} />
                            </button>
                        </div>
                    </div>
                    {showDetails && <EntrepriseMoreDetails></EntrepriseMoreDetails>}
                </div>
            </div>        
        </>
    );
};

export default Admin