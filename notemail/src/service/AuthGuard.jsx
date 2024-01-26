import { useContext } from "react"
import UserContext from "../userContext"
import { Outlet } from "react-router-dom"

const AuthGuard = () => {

    const user = useContext(UserContext)



    return <Outlet></Outlet>



}