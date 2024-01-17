import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import style from './admin.module.css'
import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { Card } from "../component/card";




const addNotifEntreprise = () => {
    
}

const users = [{
    "firm_name": "firm_name 1",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone_number": "1234567890",
    "password": "$2b$10$gnPUWsHAd/mOd8TUpJrcv.1SQEUEj0NtjyeV.0yzUqBXHr1.jLlPG",
    "last_received_mail": "2024-01-15T12:00:00.000Z",
    "last_picked_up": "2024-01-15T12:00:00.000Z",
    "has_mail": true,
    "is_admin": false,
    "updatedAt": "2024-01-16T13:26:47.528Z",
    "createdAt": "2024-01-16T13:26:47.528Z"
}, {
    "firm_name": "firm_name 2",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone_number": "1234567890",
    "password": "$2b$10$gnPUWsHAd/mOd8TUpJrcv.1SQEUEj0NtjyeV.0yzUqBXHr1.jLlPG",
    "last_received_mail": "2024-01-15T12:00:00.000Z",
    "last_picked_up": "2024-01-15T12:00:00.000Z",
    "has_mail": true,
    "is_admin": false,
    "updatedAt": "2024-01-16T13:26:47.528Z",
    "createdAt": "2024-01-16T13:26:47.528Z"
}, {
    "firm_name": "firm_name 3",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone_number": "1234567890",
    "password": "$2b$10$gnPUWsHAd/mOd8TUpJrcv.1SQEUEj0NtjyeV.0yzUqBXHr1.jLlPG",
    "last_received_mail": "2024-01-15T12:00:00.000Z",
    "last_picked_up": "2024-01-15T12:00:00.000Z",
    "has_mail": true,
    "is_admin": false,
    "updatedAt": "2024-01-16T13:26:47.528Z",
    "createdAt": "2024-01-16T13:26:47.528Z"
}]

const Admin = () => {
    const [notifList, setNotifList] = useState([]);
    
    const [showDetails, setShowDetails] = useState(false)
    const [open, setOpen] = useState(false);
    const onCloseModal = () => setOpen(false);
    
    const handleCardClick = () => {
        
        
        setShowDetails(!showDetails);
    };
    
    useEffect(()=>{
        console.log(notifList)
    },  [open])
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
            
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ listNotif: notifList })
            };
            fetch('http://localhost:3000/send', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.data) ).catch(err => console.log(err));
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            fetch('http://localhost:3000/send',{
            method: 'PUT',
            headers: {
                // Nous n'accepterons que le JSON en résultat.
                'Accept': 'application/json',
                // Dans le cas d'une requête contenant un body,
                // par exemple une POST ou PUT, on définit le format du body.
                'Content-Type': 'application/json',
                
            },
            body: {
                "listNotif":notifList
            }
        }).then((res)=> {
            
            return res.json()
            
        }).then((resp)=> {
            console.log(resp)
        }
        ).catch((err)=> {console.log(err)})
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
    <button><IoMdAdd color="var(--color6)" fontSize="1.7rem"/></button>
    <button onClick={()=>{setOpen(true)}}><RiMailSendLine color="var(--color6)" fontSize="1.7rem"/></button>
    </div>
    </div>
    </>
    );
};

export default Admin