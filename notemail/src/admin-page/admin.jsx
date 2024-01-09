import { IoIosSearch } from "react-icons/io";
import editIcon from '../assets/edit-icon.png'
import style from './admin.module.css'

const Admin = () => {

    return (
        <>
            <div className={style.searchBarContainer}>
                <IoIosSearch/>
                <input className={style.searchBarContainer.input}type="text" placeholder="Rechercher"/>
            </div>
            <div className={style.entrepriseListContainer}>
                <div className={style.entrepriseCard}>
                    <div className={style.entrepriseInfos}>
                        <h3>Entreprise 1</h3>
                        <p>Nom contact</p>
                        <p>19/09/2023</p>
                    </div>
                    <div className={style.entrepriseEdit}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin