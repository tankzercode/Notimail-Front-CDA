import '../css/user.css'
import Mail from "../assets/MailNotif.png"

export const User = () => {

    return(
        <>
        <div className='container-test' >
            <div className='container-component'>
                <div>
                    <img src={Mail} alt="" />
                </div>
                    <p>Vous avez du courrier en attente</p>
                    <a href="#" class="receptionner">Réceptionner</a>
            </div> 
        </div>
        </>
    )
}