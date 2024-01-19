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

// const users = [{
    //     "firm_name": "firm_name1",
    //     "first_name": "John",
    //     "last_name": "Doe",
    //     "email": "john.doe@example.com",
    //     "phone_number": "1234567890",
    //     "password": "$2b$10$gnPUWsHAd/mOd8TUpJrcv.1SQEUEj0NtjyeV.0yzUqBXHr1.jLlPG",
    //     "last_received_mail": "2024-01-15T12:00:00.000Z",
//     "last_picked_up": "2024-01-15T12:00:00.000Z",
//     "has_mail": true,
//     "is_admin": false,
//     "updatedAt": "2024-01-16T13:26:47.528Z",
//     "createdAt": "2024-01-16T13:26:47.528Z"
// }, {
//     "firm_name": "firm_name2",
//     "first_name": "John",
//     "last_name": "Doe",
//     "email": "john.doe@example.com",
//     "phone_number": "1234567890",
//     "password": "$2b$10$gnPUWsHAd/mOd8TUpJrcv.1SQEUEj0NtjyeV.0yzUqBXHr1.jLlPG",
//     "last_received_mail": "2024-01-15T12:00:00.000Z",
//     "last_picked_up": "2024-01-15T12:00:00.000Z",
//     "has_mail": true,
//     "is_admin": false,
//     "updatedAt": "2024-01-16T13:26:47.528Z",
//     "createdAt": "2024-01-16T13:26:47.528Z"
// }, {
    //     "firm_name": "firm_name1",
    //     "first_name": "John",
    //     "last_name": "Doe",
    //     "email": "john.doe@example.com",
    //     "phone_number": "1234567890",
    //     "password": "$2b$10$gnPUWsHAd/mOd8TUpJrcv.1SQEUEj0NtjyeV.0yzUqBXHr1.jLlPG",
    //     "last_received_mail": "2024-01-15T12:00:00.000Z",
    //     "last_picked_up": "2024-01-15T12:00:00.000Z",
    //     "has_mail": true,
    //     "is_admin": false,
    //     "updatedAt": "2024-01-16T13:26:47.528Z",
    //     "createdAt": "2024-01-16T13:26:47.528Z"
    // }]
    
    const Admin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/user`, {
            withCredential: true,
        })
        .then ((res) => {
            return res.json()
        })
        .then ((data) => {
            setUsers(data);
        })
        .catch ((err) => (console.log(err)))
    }, [])

    const [notifList, setNotifList] = useState([]);
    
    const [showDetails, setShowDetails] = useState(false)
    const [open, setOpen] = useState(false);
    const onCloseModal = () => setOpen(false);
    
    const handleCardClick = () => {
        
        
        setShowDetails(!showDetails);
    };
    const navigate = useNavigate()

    // useEffect(()=>{
    //     console.log(notifList)
    // },  [open])

    return (
        <>
        <Modal open={open} onClose={onCloseModal} center>
        
        {notifList.map((el, index)=>{
            return <div  key={"fir_nameModal" + index}>
            {el.firm_name}
            </div>
        })}
        
        {!notifList[0] && 
            <p>
            <br></br>
            Aucun utilisateurs sélectionné</p>
        }
        <button>Annuler</button>
        <button onClick={  ()=>{
            axios.put('http://localhost:3000/send', {notifList: notifList}, {
                withCredentials: true,
                credentials: 'include',
                headers: {
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                }
            } ).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    
    }}>Envoyer</button>
    </Modal>
    <br></br>
    {users.map((el, index)=>{
        return <div key={"cardUser" + index }>
        <Card items={el} setNotifList={setNotifList} ></Card>
        </div>
    })}
    
    <div className={style.buttonSection}>
    <div className={style.buttonContainer}>
    <button onClick={()=>{navigate('/admin/ajouterEntreprise')}}><IoMdAdd color="var(--color6)" fontSize="1.7rem"/></button>
     <button onClick={()=>{setOpen(true)}} ><RiMailSendLine color="var(--color6)" fontSize="1.7rem"/></button> 
    </div>
    </div>
    </>
    );
};

export default Admin