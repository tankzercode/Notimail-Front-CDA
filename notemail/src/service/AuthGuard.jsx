import { useContext } from "react"
import UserContext from "../userContext"
import { Outlet, useNavigate } from "react-router-dom"

const AuthGuard = () => {

    const user = useContext(UserContext)
    console.log(user)

    const navigate = useNavigate()
    if (!user || !user.is_admin) {
        navigate("/")
    }


    return <Outlet></Outlet>


}

export default AuthGuard