import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Login.css';

export default function Login(){
    return (
        <div className="LoginMain">
            <div className="UILogin">
                <h1>LogIn</h1>
                <input className="usernameInput" placeholder="Enter username" />
                <input className="passwordInput" placeholder="Enter password" />
                <button className="submitButton">Log In</button>
            </div>
            <div className="reg">
                Doesnt have account? <Link to='/register'>Register</Link>  
            </div>
        </div>
    )
}