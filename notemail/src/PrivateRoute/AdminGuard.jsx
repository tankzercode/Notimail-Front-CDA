import { useContext, useEffect } from "react"
import UserContext from "../userContext"
import { Outlet, useNavigate } from "react-router-dom"

export const AdminGuard = () => {
    
    const user = useContext(UserContext)
    console.log(user)
    const naviguate = useNavigate()
    useEffect( ()=>{
        if(!user.is_admin){
            naviguate('/')
        }
        
    }, [])
    
    return(
        <>
        <Outlet/>
        
        </>
        )
    }