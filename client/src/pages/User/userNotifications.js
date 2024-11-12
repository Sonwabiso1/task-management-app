import React from "react";
import './../../styles/User/userNotification.css'

export default function Notification(){
    return(
        <>
        <div id="notif-title"><h1>Notifications</h1></div>
        <div class="notification"> 
            <p>🔔Work on the backend for the stanley banking app</p>
            <p>⏱️Due: 17 November 2024 C.O.B</p>
        </div>
        <br/>
        <div class="notification">
            <p>🔔Write a proposal for the portfolio project</p>
            <p>⏱️Due: 10 November 2024 C.O.B</p>
        </div>
        </>
    )
}