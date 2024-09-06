import React from "react";
import './Login.css';

export default function Login(){
    return (
        <div className="LoginMain">
            <input className="usernameInput" placeholder="Enter username"></input>
            <input className="passwordInput" placeholder="Enter password"></input>
            <button className="submitButton">Log In</button>
        </div>
    )
}