import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import style from './admin.module.css'
import { useState } from "react";
const EntrepriseMoreDetails = () => {
    return (
        <div className={style.moreDetailsTable}>
            <table border="0">
                <tr>
                    <td>Email</td>
                    <td>adresse-email@exemple.com</td>
                </tr>
                <tr>
                    <td>Téléphone</td>
                    <td>0123456789</td>
                </tr>
                <tr>
                    <td>Identifiant</td>
                    <td>1337</td>
                </tr>
            </table>
        </div>
    );
};

const Admin = () => {
    console.log("admin")
    const [showDetails, setShowDetails] = useState(false)
  
    const handleCardClick = () => {
        console.log('test');
        setShowDetails(!showDetails);
    };

    return (
        <>
     <div className={style.searchBarContainer}>
                <IoIosSearch />
                <input className={style.searchBarContainer.input} type="text" placeholder="Rechercher" />
            </div>
            <div className={style.entrepriseListContainer}>
                <div className={style.moreDetails} onClick={handleCardClick}>
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
                                <FaEdit style={{ }} className={style.editButton} />
                            </button>
                        </div>
                    </div>
                    {showDetails && <EntrepriseMoreDetails></EntrepriseMoreDetails>}
                </div>
            </div>        </>
    );
};

export default Admin