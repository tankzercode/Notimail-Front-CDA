import style from '../css/user.module.css'
import Mail from "../assets/MailNotif.png"
import Yes from "../assets/yes.png"
import No from "../assets/no.png"
import { Modal } from 'react-responsive-modal';
import { useContext, useState } from 'react';
import UserContext from '../userContext';

export const User = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const user = useContext(UserContext)

    const notifyMail =() =>{
      fetch('http://localhost:3000/users/', { method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }}).then((res)=>{return res}).then((resp)=> {
console.log(        resp.json())
        return resp.json()
      }).catch((err)=> {
        console.log(err)
      })
    }
    console.log(user)
    return(
        <>
            <div className={style.containerComponent}>
                <div className={style.logoMail}>
                    <img src={Mail} alt="" />
                </div>
                {user.user.has_mail &&
                                <p className={style.txtMail}>Vous avez du courrier en attente</p>    
               
                }
                 {!user.user.has_mail &&
                <p className={style.txtMail}>Vous n'avez pas de courrier</p>    

                
                }
            </div> 

            
            <div className={style.container_receptionner}>
                <button onClick={onOpenModal} className={style.receptionner}>Receptionner</button> 
            </div>
      <Modal open={open} onClose={onCloseModal} center>

      <div className={style.modal_container}>

        <p className={style.txt_confirm}>
          Confirmer la réception <br />
          du courrier :
        </p>

        <div className={style.yes_no_modal}>
          <img onClick={notifyMail} src={Yes} alt="" />
          <img src={No} alt="" />
        </div>

      </div>
      </Modal>
        </>
    )
}