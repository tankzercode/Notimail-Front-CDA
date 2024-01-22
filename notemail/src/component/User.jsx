import style from '../css/user.module.css'
import Mail from "../assets/MailNotif.png"
import MailChecked from "../assets/MailNotifChecked.png"
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
  console.log(user)
  const notifyMail = () => {
    fetch('http://localhost:3000/user/' + user.user.firm_name, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then((res) => { return res.json() })
      .then((resp) => {
        // console.log(resp.updateUser.has_mail)
        user.setUser(resp.updateUser.has_mail = true)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  console.log(user)
  return (
    <>
      <div className={style.containerComponent}>
        <div className={style.logoMail}>
          {user.user.has_mail &&
            <img src={Mail} />
          }
          {!user.user.has_mail &&
            <img src={MailChecked} />
          }
        </div>
        <>
          {user.user.has_mail &&
            <p className={style.txtMail}>Vous avez du courrier en attente</p>

          }
          {!user.user.has_mail &&
            <p className={style.txtMail}>Vous n'avez pas de courrier</p>


          }
        </>

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