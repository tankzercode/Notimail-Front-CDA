import { useEffect } from "react";
import { Card } from "../component/card";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
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


const [notifList, setNotifList] = useState([]);

const addNotifEntreprise = () => {
    
}

const Admin = () => {
    const [list, setList] =useState([])
    
    useEffect(()=> { 
        fetch('http://localhost:3000/user', {
            credentials:'include'
        }).then((res)=> {return res.json()}).then((resp)=> {console.log(resp)
        setList(resp)
        }).catch((err)=> {console.log(err)})
    },[] )
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