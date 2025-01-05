import React, { useState } from "react";
import UserContext from "./context/userContext";

export const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}