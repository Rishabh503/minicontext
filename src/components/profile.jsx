import { useContext } from "react"
import UserContext from "../context/userContext"

export const Profile=()=>{

    const {user}=useContext(UserContext)

    if(!user) return <div>please login</div>;
    
    return(<>

        Profile : {user.username}
    </>)
}