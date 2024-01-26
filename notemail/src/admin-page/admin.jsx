import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import style from './admin.module.css'
import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { Card } from "../component/card";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

const Admin = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:3000/user`, {
            withCredential: true,
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => (console.log(err)))
    }, [])

    const [notifList, setNotifList] = useState([]);

    const [showDetails, setShowDetails] = useState(false)
    const [open, setOpen] = useState(false);
    const onCloseModal = () => setOpen(false);

    const handleCardClick = () => {
        setShowDetails(!showDetails);
    };
    const navigate = useNavigate()

    const [resultFilter, setResultFiter] = useState(users)

    useEffect(() => {
        setResultFiter(users)
    }, [users])

    const filterSearchBar = (e) => {
        const value = e.target.value;
        const resultLowerCase = value.toLowerCase();
        setResultFiter(users.filter((user) => user.firm_name.toLowerCase().includes(resultLowerCase)))
    }

    return (
        <>

            <div className={style.searchBarContainer}>
                <IoIosSearch />
                <input onChange={filterSearchBar} type="text" />
            </div>
            {error &&

                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            }
            <Modal open={open} onClose={onCloseModal} center>
                {notifList[0] &&
                    <ul>
                        {notifList.map((el, index) => {
                            return <li key={"fir_nameModal" + index}>
                                {el.firm_name}
                            </li>
                        })}
                    </ul>
                }

                {!notifList[0] &&
                    <p>
                        <br></br>
                        Aucun utilisateurs sélectionné</p>
                }

                <div className={style.modalButtonContainer}>

                    <button className={`${style.annuler} ${style.notifButton}`} onClick={onCloseModal}>Annuler</button>
                    <button className={`${style.envoyer} ${style.notifButton}`} onClick={() => {
                        axios.put('http://localhost:3000/send', { notifList: notifList }, {
                            withCredentials: true,
                            credentials: 'include',
                            headers: {
                                "Access-Control-Allow-Origin": "http://localhost:3000",
                            }
                        })
                            .then((res) => {
                                console.log(res);
                            })
                            .catch((err) => {
                                console.log(err);

                                setError(err.response.data)
                            })
                        onCloseModal();
                    }}>Envoyer</button>
                </div>
            </Modal>
            <br></br>
            {/* {console.log(users)} */}
            {resultFilter.map((el, index) => {
                return <div key={"cardUser" + index}>
                    <Card items={el} setNotifList={setNotifList} ></Card>
                </div>
            })}

            <div className={style.buttonSection}>
                <div className={style.buttonContainer}>
                    <button onClick={() => { navigate('/admin/ajouterEntreprise') }}><IoMdAdd color="var(--color6)" fontSize="1.7rem" /></button>
                    <button onClick={() => { setOpen(true) }} ><RiMailSendLine color="var(--color6)" fontSize="1.7rem" /></button>
                </div>
            </div>
        </>
    );
};

export default Admin