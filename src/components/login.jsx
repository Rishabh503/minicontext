import React from "react";
import { useContext, useState } from "react"
import UserContext from "../context/userContext";

export const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    return(
        <div> 
            <h2>Login</h2>
            <input type="text" placeholder="name" value={username} 
            onChange={(e)=>{setUsername(e.target.value)}}/ >
                <br />
            <input type="text" placeholder="password"
            value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}