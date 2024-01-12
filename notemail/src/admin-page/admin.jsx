import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import style from './admin.module.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card } from "../component/card";



const Admin = () => {
const [users ,setUsers] = useState([])
    useEffect(()=> {

        fetch('http://localhost:3000/user').then((res)=>{ return res.json()})
        .then((resp)=> {
            console.log(resp)
            setUsers(resp)
        })
        .catch((err)=> {
            console.log(err)
        })


    }, [])

    const [notifList, setNotifList] = useState([]);
   
    return (
        <>
    <div style={{marginTop:"25px"}}>
        {users.map((el, index)=>{

            return <div style={{marginBottom:"25px"}}  key={'user'+index}>
                
                <Card items={el} setNotifList={setNotifList} ></Card>
          </div>
        })}
            </div>
            {/* {JSON.stringify(notifList)} */}
        </>
    );
};

export default Admin