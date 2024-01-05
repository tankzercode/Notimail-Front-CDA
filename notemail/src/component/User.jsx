import style from '../css/user.module.css'
import Mail from "../assets/MailNotif.png"
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

export const User = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return(
        <>
        
            <div className={style.containerComponent}>
                <div>
                    <img src={Mail} alt="" />
                </div>
                    <p className={style.txtMail}>Vous avez du courrier en attente</p>

                </div> 
                <button onClick={onOpenModal} className={style.receptionner}>Receptionner</button> 
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
        </>
    )
}