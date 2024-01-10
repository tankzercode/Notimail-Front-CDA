import { useEffect } from "react";
import { Card } from "../component/card";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import style from '../component/card.module.css';

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
        

           <div>

<div className={style.searchBarContainer}>
        <IoIosSearch />
        <input className={style.searchBarContainer.input} type="text" placeholder="Rechercher" />
    </div>
           {list.map((el, index)=> {
            return <Card items={el} ></Card>
           })}
           </div> 
           
    );
};

export default Admin