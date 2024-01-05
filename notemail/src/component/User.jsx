import style from '../css/user.module.css'
import Mail from "../assets/MailNotif.png"
import Yes from "../assets/yes.png"
import No from "../assets/no.png"
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

export const User = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return(
        <>
            <div className={style.containerComponent}>
                <div className={style.logoMail}>
                    <img src={Mail} alt="" />
                </div>
               <p className={style.txtMail}>Vous avez du courrier en attente</p>    
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
          <img src={Yes} alt="" />
          <img src={No} alt="" />
        </div>

      </div>
      </Modal>
        </>
    )
}