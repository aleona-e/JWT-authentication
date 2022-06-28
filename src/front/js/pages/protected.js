import React, { useEffect } from "react";
import {useHistory} from "react-router-dom"


export const Protected =  () => {

    const history = useHistory()
    
    const accessProtected = async () => {
        const token = localStorage.getItem('jwt-token');
        console.log(token)
        const resp = await fetch(`https://3001-4geeksacade-reactflaskh-c6mrxiqfja0.ws-eu47.gitpod.io/protected`, {
           method: 'GET',
           headers: { 
             "Content-Type": "application/json",
             'Authorization': 'Bearer '+token // ⬅⬅⬅ authorization token
           } 
        })
        if (resp.status != 200){
            //redireccionar
            history.push("/login")
        }
        const data = await resp.json();
        console.log("This is the data you requested", data);
        return data
    }

    useEffect(() => {
        accessProtected()
    })
  return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center my-5">
                        <h1>Welcome, you are in!.</h1>
                        <h3>Only you can see this content.</h3>
                    </div>
                </div>    
            </div>
        </div>
    )
}
